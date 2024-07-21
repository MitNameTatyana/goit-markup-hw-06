(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector(".mobile-menu-open-btn"),
    closeMobileMenuBtn: document.querySelector(".mobile-menu-close-btn"),
    mobileMenu: document.querySelector(".mobile-menu"),
    mobileMenuContainer: document.querySelector(".mobile-menu-container"),
  };

  refs.openMobileMenuBtn.addEventListener("click", openMenu);
  refs.closeMobileMenuBtn.addEventListener("click", closeMenu);

  function openMenu() {
    refs.mobileMenu.classList.add("is-open");
    refs.mobileMenuContainer.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.nodeName !== "A") return;
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      closeMenu();
      targetSection.scrollIntoView({ block: "start" });
    });
  }

  function closeMenu() {
    refs.mobileMenu.classList.remove("is-open");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector(".hero-btn"),
    closeModalBtn: document.querySelector(".modal-close-btn"),
    modal: document.querySelector(".backdrop"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
