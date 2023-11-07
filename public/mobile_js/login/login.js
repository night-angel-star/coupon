const navigateUri = "https://www.rriveter.com/account";
const loginUri = "https://www.rriveter.com/account/login";
const usernameInputSelector = "#CustomerEmail";
const passwordInputSelector = "#CustomerPassword";
const loginButtonSelector = 'button[type="submit"].btn.btn--full';

let inputCharDelay = 200;

function simulateTyping(inputField, text) {
    inputField.focus(); // Ensure the input field is focused

    for (let i = 0; i < text.length; i++) {
        const key = text[i];
        const eventDown = new KeyboardEvent("keydown", { key });
        const eventPress = new KeyboardEvent("keypress", { key });
        const eventUp = new KeyboardEvent("keyup", { key });

        setTimeout(() => {
            inputField.value += key;
            inputField.dispatchEvent(eventDown);
            inputField.dispatchEvent(eventPress);
            inputField.dispatchEvent(eventUp);

            if (i === text.length - 1) {
                const eventInput = new Event("input", { bubbles: true });
                inputField.dispatchEvent(eventInput);
            }
        }, i * inputCharDelay); // Delay each character by 0.5s (500ms)
    }
}

function inject() {
    if (window.location.href.includes(loginUri)) {
        const usernameInput = document.querySelector(usernameInputSelector);
        const passwordInput = document.querySelector(passwordInputSelector);
        const loginButton = document.querySelector(loginButtonSelector);

        const username = "USERNAMEFORREPLACE";
        const password = "PASSWORDFORREPLACE";

        const inputUserNameDelayTime = 2000 + Math.random() * 3000;
        const inputPasswordDelayTime =
            inputUserNameDelayTime +
            username.length * inputCharDelay +
            Math.random() * 3000;
        const clickDelayTime =
            inputPasswordDelayTime +
            password.length * inputCharDelay +
            Math.random() * 3000;

        setTimeout(() => {
            simulateTyping(usernameInput, username);
        }, inputUserNameDelayTime);

        setTimeout(() => {
            simulateTyping(passwordInput, password);
        }, inputPasswordDelayTime);

        setTimeout(() => {
            loginButton.click();
        }, clickDelayTime);

        return navigateUri;
    }
}

inject();
