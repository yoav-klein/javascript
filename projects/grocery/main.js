

const toggleSidebarButtonEl = document.getElementById("menu-button");
const dropDownMenuButtonEl = document.querySelector(".dropdown-button");
const sidebarEl = document.getElementById("sidebar");
const subMenuEl = document.querySelector(".sub-menu");

dropDownMenuButtonEl.addEventListener('click', toggleSubMenu);
toggleSidebarButtonEl.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    // when closing the sidebar with the drop-down open, close it
    if(subMenuEl.classList.contains('show')) {
        subMenuEl.classList.remove('show');
        dropDownMenuButtonEl.classList.toggle('rotate');
    }

    const overlayEl = document.getElementById('overlay');
    const isMobile = window.innerWidth <= 768;
    
    sidebarEl.classList.toggle('close');
    
    if (isMobile) {
        overlayEl.classList.toggle('active');
    }
}

function toggleSubMenu() {
    subMenuEl.classList.toggle('show');
    dropDownMenuButtonEl.classList.toggle('rotate');
    
    // if submenu button clicked and sidebar is closed, open it
    if(sidebarEl.classList.contains('close')) {
        sidebarEl.classList.toggle('close');
        toggleSidebarButtonEl.classList.toggle('rotate');
    }
}

