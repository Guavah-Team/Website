document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) {
        return
    }

    let currentDropDown
    if (isDropdownButton) {
        currentDropDown = e.target.closest('[data-dropdown]')
        currentDropDown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropDown) {
            return
        }
        dropdown.classList.remove('active')
    })
})

function toggleHamburger() {

    const sideNav = document.getElementsByClassName("guavah-navbar-hamburger")[0];
    const sideNavButton = document.getElementsByClassName("guavah-navbar-button-hamburger")[0];

    if (!sideNav.classList.contains("expanded")) {
        sideNav.classList.add("expanded")
        sideNavButton.innerHTML = "🞪"
    }
    else {
        sideNav.classList.remove("expanded")
        sideNavButton.innerHTML = "☰"
    }
}