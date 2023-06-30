
const handleWithActiveMenu = (isActived) => {
  
  const activeMenuButton = document.querySelector(".active-menu");
  const activeMenuIcon = document.querySelector(".active-menu i");
  const menuModal = document.querySelector(".menu-modal");

  activeMenuButton.addEventListener('click', () => {

    if (!isActived) {

      isActived = true;
      menuModal.classList.add("actived");
      activeMenuIcon.classList.add("ph-x");

    } else {

      isActived = false;
      menuModal.classList.remove("actived");
      activeMenuIcon.classList.remove("ph-x");

    }

  });
}

handleWithActiveMenu();

