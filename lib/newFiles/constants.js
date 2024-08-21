export const pools = {
  arbitrum: {
    ETH: "0x0BeBEB5679115f143772CfD97359BBcc393d46b3",
    USDC: "0x8FE3842e0B7472a57f2A2D56cF6bCe08517A1De0",
    ARB: "0x2B8C610F3fC6F883817637d15514293565C3d08A",
    BTC: "0x5CdE36c23f0909960BA4D6E8713257C6191f8C35",
    DAI: "0xd5e8f691756c3d7b86fd8a89a06497d38d362540",
  },
  avalanche: {
    USDC: "0x2323dAC85C6Ab9bd6a8B5Fb75B0581E31232d12b",
    AVAX: "0xD26E504fc642B96751fD55D3E68AF295806542f5",
    BTC: "0x475589b0Ed87591A893Df42EC6076d2499bB63d0",
    ETH: "0xD7fEB276ba254cD9b34804A986CE9a8C3E359148",
    USDT: "0xd222e10D7Fe6B7f9608F14A8B5Cf703c74eFBcA1"
  }
}
export const jsonRpcs = {
  arbitrum: 'https://arb1.arbitrum.io/rpc',
  avalanche: 'https://avalanche-mainnet.core.chainstack.com/ext/bc/C/rpc/0968db18a01a90bac990ff00df6f7da1'
}

export const decimals= {
  'BTC': 8,
  'USDC': 6,
  'USDT': 6,
  'ETH': 18,
  'AVAX': 18,
  'ARB': 18,
  'DAI': 18
}

export const secondsInYear = 3600 * 24 * 365;

export const avalancheBoostConfig = {
  AVAX: {
    depositRewarderAddress: "0x6d149Fcc150A3B097D7647408345898fe9db1ded",
    rewardToken: "sAVAX"
  },
  USDC: {
    depositRewarderAddress: "0xB913aC229910d705297DEB1c168af3dA1416B227",
    rewardToken: "ggAVAX"
  },
  USDT: {
    depositRewarderAddress: "0x3750F8d6Df82699ada6bBd1463C4E91fCf37005D",
    rewardToken: "sAVAX"
  },
  BTC: {
    depositRewarderAddress: "0x50b0b59f14bA882BD511Fe08d1cdc975807a94A4",
    rewardToken: "ggAVAX"
  }
}