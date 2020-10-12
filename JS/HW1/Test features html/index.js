const navBar = document.querySelector(`.nav-bar-js`);
const tagsList = document.querySelector(`.tag-menu-js`);
navBar.addEventListener(`click`, Action);
tagsList.addEventListener(`click`, markTag);

function Action(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  if (e.target.nodeName === `LI`) {
    return;
  }
  const activeLink = e.currentTarget.querySelector(`.nav-item--active`);
  if (activeLink) {
    activeLink.classList.remove(`nav-item--active`);
  }

  e.target.classList.add(`nav-item--active`);
}

function markTag(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  e.target.classList.toggle(`tag-item--active`);
}
