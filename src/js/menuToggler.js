const   toolpicker  = document.querySelector('.toolPicker'),
        menuToggler = document.querySelector('.menuToggle');

menuToggler.addEventListener('click', () => {

    let menuTogglerStatutClass  = menuToggler.classList[1],
        toolPickerStatutClass   = toolpicker.classList[1];

    switch (menuTogglerStatutClass) {
        case "menuTogglerOff":
            toolpicker.classList.remove("menuOff");
            menuToggler.classList.remove("menuTogglerOff");
            toolpicker.classList.add("menuOn");
            menuToggler.classList.add("menuTogglerOn");
            break;

        default:   
            toolpicker.classList.remove("menuOn");
            menuToggler.classList.remove("menuTogglerOn");
            toolpicker.classList.add("menuOff");
            menuToggler.classList.add("menuTogglerOff");
            break;
    }
});