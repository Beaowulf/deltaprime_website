// The funciton below saves the selection on localStorage which might not be the best.
// Will need to clear with client. For now ill create one that opens and closes the modal with a redirection
// function launchAppClickHandler({ isModalOpen = false }) {
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const { push } = useRouter();

//   useEffect(() => {
//     const appElement = document.getElementById("__next");
//     if (appElement) {
//       Modal.setAppElement(appElement);
//     } else {
//       console.error("App element not found");
//     }
//   }, []);

//   function poolsHandler() {
//     // clear storage before entering (testing this now)
//     localStorage.clear();
//     localStorage.setItem("launchAppPreference", "poolsAccount");
//     console.log("clicked");
//     push("https://app.deltaprime.io/#/pools");
//   }

//   function primeAccountHandler() {
//     // clear storage before entering (testing this now)
//     localStorage.clear();
//     localStorage.setItem("launchAppPreference", "primeAccount");
//     console.log("clicked");
//     push("https://app.deltaprime.io/#/prime-account/zaps");
//   }

//   function launchAppClickHandler() {
//     const preference = localStorage.getItem("launchAppPreference");
//     if (preference == "primeAccount") {
//       push("https://app.deltaprime.io/#/prime-account/zaps");
//     } else if (preference == "poolsAccount") {
//       push("https://app.deltaprime.io/#/pools");
//     } else setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
// }

function setModalState({ setModalOpen }) {
  return (isOpen) => {
    setModalOpen(isOpen);
  };
}
