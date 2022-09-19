console.log(`You rock my world`);

const btnReset = document.querySelector(".header__text");
const allSections = document.querySelectorAll(".section__box");
const iconUnread = document.querySelectorAll(".section__icon--unread");
const notification = document.querySelector(".heading-primary__sub");

btnReset.addEventListener("click", function (e) {
  allSections.forEach((s) => s.classList.remove("unread"));
  iconUnread.forEach((i) => (i.style.opacity = 0));
  notification.textContent = 0;
});
