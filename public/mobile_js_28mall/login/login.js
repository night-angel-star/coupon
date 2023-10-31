const navigateUri = "https://28mall.com/wap/tmpl/member/member.html";
const loginUri = "https://28mall.com/wap/tmpl/member/email_login.html";
const usernameInputSelector = "#username";
const passwordInputSelector = "#userpwd";
const loginButtonSelector = "#loginbtn";
function inject() {
    if (window.location.href.includes(loginUri)) {
        const usernameInput = document.querySelector(usernameInputSelector);
        const passwordInput = document.querySelector(passwordInputSelector);
        const loginButton = document.querySelector(loginButtonSelector);
        document
            .querySelector(".form-btn")
            .setAttribute("class", "form-btn ok");

        function inputUserName() {
            usernameInput.value = "USERNAMEFORREPLACE";
        }

        function inputPassword() {
            passwordInput.value = "PASSWORDFORREPLACE";
        }
        function clickLogin() {
            loginButton.click();
        }
        const inputUserNameDelayTime = 2000 + Math.random() * 3000;
        const inputPasswordDelayTime =
            inputUserNameDelayTime + Math.random() * 3000;
        const clickDelayTime = inputPasswordDelayTime + Math.random() * 3000;
        setTimeout(inputUserName, inputUserNameDelayTime);
        setTimeout(inputPassword, inputPasswordDelayTime);
        setTimeout(clickLogin, clickDelayTime);
    }
    return navigateUri;
}
inject();
