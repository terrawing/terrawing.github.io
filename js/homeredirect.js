function init() {
    var actionButton = document.getElementById('id_PortfolioCta');
    actionButton.addEventListener('click', activateActionButton);
    actionButton.addEventListener('keydown', actionButtonKeydownHandler);
    actionButton.addEventListener('keyup', actionButtonKeyupHandler);
}

/**
 * Activates the action button with the enter key.
 *
 * @param {KeyboardEvent} event
 */
function actionButtonKeydownHandler(event) {
    // The action button is activated by space on the keyup event, but the
    // default action for space is already triggered on keydown. It needs to be
    // prevented to stop scrolling the page before activating the button.
    if (event.keyCode === 32) {
        event.preventDefault();
    }
    // If enter is pressed, activate the button
    else if (event.keyCode === 13) {
        event.preventDefault();
        activateActionButton();
    }
}

/**
 * Activates the action button with the space key.
 *
 * @param {KeyboardEvent} event
 */
function actionButtonKeyupHandler(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
        activateActionButton();
    }
}

function activateActionButton() {
    window.location.href = "portfolio/casestudy.html";
}

window.onload = init;