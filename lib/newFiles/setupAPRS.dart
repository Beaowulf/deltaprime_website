async setupAprs() {
  for (let network of Object.keys(pools)) {
    const redstoneApi = 'https://oracle-gateway-1.b.redstone.finance/data-packages/latest/redstone-main-demo';
    const LTIPPoolBoostApi = 'https://2t8c1g5jra.execute-api.us-east-1.amazonaws.com/ltip-pool-boost-apy';
    const jsonRPC = jsonRpcs[network];
    const provider = new ethers.providers.JsonRpcProvider(jsonRPC);

    const poolsInfo = await Promise.all(Object.entries(pools[network]).map(async ([asset, address]) => {
      const poolContract = new ethers.Contract(address, POOL.abi, provider);
      const poolDetails = await Promise.all([
        poolContract.totalSupply(),
        poolContract.getDepositRate(),
        poolContract.totalBorrowed()
      ]);

      return {
        id: asset,
        totalSupply: poolDetails[0],
        depositRate: poolDetails[1],
        totalBorrowed: poolDetails[2]
      };
    }));

    const priceRequest = await fetch(redstoneApi);
    const prices = await priceRequest.json();
    const LTIPPoolsBoostRequest = await fetch(LTIPPoolBoostApi);
    const LTIPPoolsBoost = await LTIPPoolsBoostRequest.json();
// consts that we might need to use
    const AvalancheBoostRates = network === 'avalanche' ? await getAvalancheBoostRates(Object.keys(pools['avalanche']), prices, provider) : {};
// consts that we might need to use
    this.pools[network] = Object.keys(pools[network]).map(
        symbol => {
          const poolInfo = poolsInfo.find(pool => pool.id.toLowerCase() === symbol.toLowerCase());
          const price = prices[symbol][0].dataPoints[0].value;

// consts that we might need to use
          const apy = (fromWei(poolInfo.depositRate) * 100);
          const miningApr =
              (network === 'arbitrum') ?
                  LTIPPoolsBoost[symbol] * 100
                  :
                  AvalancheBoostRates[symbol] * secondsInYear / (tvl * price) * 100;
// consts that we might need to use

          const tvl = formatUnits(poolInfo.totalSupply, decimals[symbol]);
          let formattedTotalSupply
          if (!tvl) formattedTotalSupply = '';
          const tvlInUsd = tvl * price;
          if (tvlInUsd < 1000000) {
            formattedTotalSupply = `$${(tvlInUsd / 1000).toFixed()}k`
          } else {
            formattedTotalSupply = `$${(tvlInUsd / 1000000).toFixed()}M`;
          }
          return new Pool(symbol, apy, miningApr, formattedTotalSupply, price);
        }
    )


    this.pools[network].sort((a, b) => (b.apy + b.miningApr) - (a.apy + a.miningApr));
  }
},
