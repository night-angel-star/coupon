function navigateToLogin() {
    const navigateToLoginButton = document.querySelector(
        navigateToLoginButtonSelector
    );
    if (!navigateToLoginButton) {
        return "fail";
    }
    const clickDelayTime = 1000 + Math.random() * 3000;
    setTimeout(() => {
        navigateToLoginButton.click();
    }, clickDelayTime);
    return "success";
}

navigateToLogin();
