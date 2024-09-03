function setModalState({ setModalOpen }) {
  return (isOpen) => {
    setModalOpen(isOpen);
  };
}
