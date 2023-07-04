
const activeMenuButton = document.querySelector(".active-menu");
const activeMenuIcon = document.querySelector(".active-menu i");
const menuModal = document.querySelector(".menu-modal");

const toggleMenu = () => {

  const iconName = "ph-x";

  menuModal.classList.toggle("actived")
    ? activeMenuIcon.classList.add(iconName)
    : activeMenuIcon.classList.remove(iconName)
}

activeMenuButton.addEventListener('click', toggleMenu);



