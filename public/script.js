function inject() {
    // if (window.location.href !== "https://192.168.148.184/coupon.html") {
    //     window.location.href = "http://192.168.148.184/coupon.html";
    // }
    if (window.location.href.includes("https://my.asos.com/identity/login")) {
        const usernameInput = document.getElementById("EmailAddress");
        const passwordInput = document.getElementById("Password");
        const loginButton = document.getElementById("signin");

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
}
inject();
