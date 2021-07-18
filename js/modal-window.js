// 1.Открыть и закрыть модалку: onModalOpen onModalClose
// 2.Закрыть по клику в бекдроп: onBackDropClick
// 3.Закрыть по ESC: onEscapeKeypress

const refs = {
  openModalBtn: document.querySelector('[data-action = "open-modal"]'),
  closeModalBtn: document.querySelector('[data-action = "close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};
// повесить слушателя события
refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);
// открыть модалку
function onOpenModal() {
  window.addEventListener("keydown", onEscKeyPress);
  document.body.classList.add("show-modal");
}
// закрыть модалку
function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  document.body.classList.remove("show-modal");
}
//проверить клик на бекдроп
function onBackdropClick(event) {
  //   console.log(event.currentTarget);
  //   console.log(event.target);

  if (event.currentTarget === event.target) {
    console.log("Clicked exactly to backdrop");
    onCloseModal();
  }
}
// проверить клик на искейп
function onEscKeyPress(event) {
  const ESK_KEY_CODE = "Escape";
  if (event.code === ESK_KEY_CODE) {
    onCloseModal();
  }
}
