function loginCheck() {
    const logoutButton = document.querySelector(logoutButtonSelector);
    if (logoutButton) {
        return "success";
    } else {
        return "fail";
    }
}

loginCheck();
