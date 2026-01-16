(() => {
  const openBtn = document.querySelector("[data-modal-open]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const backdrop = document.querySelector("[data-modal]");

  if (!openBtn || !closeBtn || !backdrop) return;

  const toggleModal = () => {
    backdrop.classList.toggle("is-open");
    document.body.style.overflow = backdrop.classList.contains("is-open")
      ? "hidden"
      : "";
  };

  openBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click", toggleModal);

  // Закриття по кліку на бекдроп (поза модалкою)
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) toggleModal();
  });

  // Закриття по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
      toggleModal();
    }
  });
})();
