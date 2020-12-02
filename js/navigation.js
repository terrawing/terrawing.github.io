function accessibilityHamburgerMenu(event, status) {
    let status1, status2;
    let navElement = event.currentTarget;
    let elementNavigationPopout = document.getElementById("id_NavigationPopOutArea")
    let elementHamburgerMenu = document.getElementsByClassName("hamburgermenu_bars");
    let elementHamburgerMenuLinks = document.getElementsByClassName("navigation_subsection");

    if(status == true) {
        event.preventDefault();
    }

    status1 = navElement.getAttribute("aria-pressed");
    status2 = navElement.getAttribute("aria-expanded");

    if(status1 == "false" && status2 == "false") {
        navElement.setAttribute("aria-pressed", "true");
        navElement.setAttribute("aria-expanded", "true");

        if(status == true) {
            elementNavigationPopout.classList.add("animate");
            elementHamburgerMenu[0].classList.add("hamburgermenu_bars", "animate");
            elementHamburgerMenuLinks[0].classList.add("navigation_subsection", "animate");
        }
    }
    else {
        navElement.setAttribute("aria-pressed", "false");
        navElement.setAttribute("aria-expanded", "false");

        if(status == true) {
            elementNavigationPopout.classList.toggle("animate");
            elementHamburgerMenu[0].classList.toggle("animate");
            elementHamburgerMenuLinks[0].classList.toggle("animate");
        }
    }
}