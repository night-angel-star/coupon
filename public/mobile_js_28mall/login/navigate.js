const navigateUri = "https://28mall.com/wap/tmpl/member/email_login.html";
const navigateToIndex = "https://28mall.com/wap/tmpl/member/member.html";
function navigate() {
    if (window.location.href === navigateToIndex) {
        window.location.href = navigateUri;
        return navigateUri;
    } else {
        window.location.href = navigateToIndex;
    }
}

navigate();
