(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-js-open-menu]"),
    closeModalBtn: document.querySelector("[data-js-close-menu]"),
    modal: document.querySelector("[data-js-menu-container]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  

  function toggleModal() {
    refs.modal.classList.toggle("menu-mobile__open");
  }
})();