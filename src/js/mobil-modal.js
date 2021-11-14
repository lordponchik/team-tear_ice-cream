(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-mobil-open]'),
      closeModalBtn: document.querySelector('[data-mobil-close]'),
      modal: document.querySelector('[data-mobil]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();