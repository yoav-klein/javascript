

const toggleSidebarButtonEl = document.getElementById("toggle-button");
const dropDownMenuButtonEl = document.querySelector(".dropdown-button");
const sidebarEl = document.getElementById("sidebar");
const subMenuEl = document.querySelector(".sub-menu");

toggleSidebarButtonEl.addEventListener('click', toggleSidebar);
dropDownMenuButtonEl.addEventListener('click', toggleSubMenu);

function toggleSidebar() {
    // when closing the sidebar with the drop-down open, close it
    if(subMenuEl.classList.contains('show')) {
        subMenuEl.classList.toggle('show');
        dropDownMenuButtonEl.classList.toggle('rotate');
    }

    sidebarEl.classList.toggle('close');
    toggleSidebarButtonEl.classList.toggle('rotate');

    
}

function toggleSubMenu() {
    subMenuEl.classList.toggle('show');
    dropDownMenuButtonEl.classList.toggle('rotate');
    
    // if submenu button clicked and sidebar is closed, open it
    if(sidebarEl.classList.contains('close')) {
        sidebarEl.classList.toggle('close');
        toggleSidebarButtonEl.toggle('rotate');
    }
}

