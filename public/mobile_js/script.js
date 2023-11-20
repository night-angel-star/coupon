/*<?php include("lib.php"); ?>*/
<?php include("settings.js"); ?>
<?php include("buttons.js"); ?>

function goto_home() {
    window.location.href = home_url;
    return "success";
}
function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}

function goto_start_page() {
    menu_items = document.querySelectorAll(menu_item_class);
    console.log(menu_items.length);
    if (menu_items)  {
        for (link of menu_items) {
            str_data_code = link.getAttribute(menu_data_name);
            console.log(str_data_code);
            if (str_data_code == menu_data_shop_value) {
                console.log("click");
                link.click();
                return "success";
            }
        }
    }
    return "fail";
}
function goto_login_page() {
    const navigateToLoginButton = document.querySelector(
        login_button_class
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

txt_typping = false;
function simulateTyping(inputField, text) {
    txt_typping = true;
    console.log(inputField);
    inputField.focus(); // Ensure the input field is focused
    inputField.value = '';
    for (let i = 0; i < text.length; i++) {
        const key = text[i];
        const eventDown = new KeyboardEvent("keydown", { key });
        const eventPress = new KeyboardEvent("keypress", { key });
        const eventUp = new KeyboardEvent("keyup", { key });

        setTimeout(() => {
            inputField.dispatchEvent(eventDown);
            inputField.dispatchEvent(eventPress);
            inputField.value += key;
            inputField.dispatchEvent(eventUp);

            if (i === text.length - 1) {
                const eventInput = new Event("input", { bubbles: true });
                inputField.dispatchEvent(eventInput);
                txt_typping = false;
            }
        }, i * inputCharDelay); // Delay each character by 0.5s (500ms)
    }
}
function do_login() {
    const usernameInput = document.querySelector(login_user_field_id);
    const passwordInput = document.querySelector(login_password_field_id);
    const loginButton = document.querySelector(login_submit_button_id);

    if (!usernameInput || !passwordInput || !loginButton) {
        return "fail";
    }

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

    return "success";
}

function find_logout_button(){
    const logoutButton = document.querySelector(logout_button_class);
    if (logoutButton) {
        value = logoutButton.getAttribute(logout_button_data_name);
        if (value == logout_button_data_value) {
           return logoutButton;
        }
    }
    return null;
}
function login_check() {
    if (find_logout_button() != null) {
        return "success";
    }
    return "fail";

}
function do_search() {
    let searchIcon = document.querySelector(search_button_class);
    let searchInput = document.querySelector(search_input_class);
    let searchButton = document.querySelector(search_submit_button_class);

    if (!searchInput) {
        if (!searchIcon) {
            return "fail";
        }
        searchIcon.click();
    }

    if (!searchInput) {
        return "fail";
    }

    searchInput.value="";
    let searchStr = "SEARCHSTRFORREPLACE";

    let inputDelay = 2000 + Math.random() * 1000;
    let searchDelay =
        inputDelay + searchStr.length * inputCharDelay + Math.random() * 1000;

    setTimeout(() => {
        simulateTyping(searchInput, searchStr);
    }, inputDelay);

    setTimeout(() => {
        searchButton.click();
    }, searchDelay);

    return "success";
}

function select_product(product_id) {
    let goodsList = document.querySelectorAll(product_item_class);
    if (goodsList.length == 0) {
        return "fail";
    }
    function find_product(list) {
        for (const goods of list) {
            link = goods.getAttribute(product_check_attribute);
            if (link && link.includes(product_find_keywork+product_id)) {
                return goods;
            }
        }
        return null;
    }
    const goods = find_product(goodsList);
    if (goods == null) {
        return "fail";
    }

    let selectDelay = 500 + Math.random() * 1000;
    function click(dom) {
        dom.click();
    }

    setTimeout(click, selectDelay, goods);
    return "success";
}

function go_back(){
    setTimeout(()=>{
        history.back();
    }, product_visit_time);
}

function do_shop() {
    scrollToSmoothly(document.body.scrollHeight, 5000);
    go_back();
    return "success";
}

function find_logout_button2(){
    const links = document.querySelectorAll("a");

    for (link of links) {
        console.log(link.textContent);
        if ((link.textContent).toUpperCase() == logout_button_text) {
            return link;
        }
    }
    return null;
}
function do_logout() {
    btn = find_logout_button2();
    btn.click();
}
/*<?php if ($act == "home") { ?>*/
goto_home();
/*<?php } else if ($act == "goto_start_page") { ?>*/
goto_start_page();
/*<?php } else if ($act == "goto_login") { ?>*/
goto_login_page();
/*<?php } else if ($act == "do_login") { ?>*/
do_login();
/*<?php } else if ($act == "login_check") { ?>*/
login_check();
/*<?php } else if ($act == "do_search") { ?>*/
do_search();
/*<?php } else if ($act == "select_product") { ?>*/
product_id = "GOODSIDREPLACE";
select_product(product_id);
/*<?php } else if ($act == "do_shop") { ?>*/
do_shop();
/*<?php } else if ($act == "logout") { ?>*/
do_logout();
/*<?php } ?>*/
