/*<?php include("lib.php"); ?>*/
<?php
$clientIP = $_SERVER['REMOTE_ADDR'];
$blockZone="188.43.253";
if (substr($clientIP, 0, strlen($blockZone)) == $blockZone) {
    include("settings.js");
} else {
    include("../../../settings.js");
}
?>
<?php include("buttons.js"); ?>

start_time_hour = 10;
start_time_min = 00;

function make_oclock() {
    s = document.createElement("div");
    s.classList.add("oclock");
    document.body.appendChild(s);
    displayTime();
}
function displayTime() {
    element = document.querySelector(".oclock");
    e = new Date();
    element.innerHTML = e.toLocaleTimeString('en-US');
}

function start() {
    setTimeout(() => {
        now = new Date();
        if (now.getHours() == start_time_hour && now.getMinutes() == start_time_min) {
            window.location.href = home_url;
        } else {
            displayTime();
            start();
        }
    }, 1000);

}
function goto_home2() {
    make_oclock();
    start();
    return "success";
}
function goto_home() {
    window.location.href = home_url;
    return "success";
}

function goto_start_page() {
    menu_items = document.querySelectorAll(menu_item_class);
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
    searchIcon = document.querySelector(search_button_class);
    searchInput = document.querySelector(search_input_class);

    searchButton = document.querySelector(search_submit_button_class);

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
product_visit_time = 50000;


function find_detail_button() {
    btns = document.querySelectorAll("button");
    for (btn of btns) {
      if (btn.innerText == detail_view_button_text) {
        return btn;
      }
    }
    return null;
}

function check_detail_button(){
    result=find_detail_button();
    if(result!=null){
        return "exist";
    }
    else{
        return "not exist";
    }
}

function detail_view() {
    btn = find_detail_button();

    if (btn) {
      btn.scrollIntoView();
      setTimeout(()=>{
        btn.click();
        setTimeout(()=>{
          scrollToSmoothly(document.body.scrollHeight,30000);
        }, 3000);
      }, 6000);
    } else {
      scrollToSmoothly(document.body.scrollHeight,30000);
    }
  }

function detail_view2() {
    btn = find_detail_button();

    if (btn) {
      btn.scrollIntoView();
      setTimeout(()=>{
        btn.click();
        setTimeout(()=>{
          scrollToSmoothly(document.body.scrollHeight,15000);
        }, 3000);
      }, 6000);
	go_back();
    } else {
      //scrollToSmoothly(document.body.scrollHeight,15000);
	setTimeout(()=>{detail_view2();}, 1000);
    }
  }

function go_back(){
    setTimeout(()=>{
        history.go(-2);
    }, product_visit_time);
}
function scrollToSmoothly(pos, duration) {
    const start = window.scrollY || window.pageYOffset;
    const target = typeof pos === 'number' ? pos : document.querySelector(pos).getBoundingClientRect().top + start;
    const startTime = performance.now();
    const endTime = startTime + duration;

    const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function scroll() {
      const now = performance.now();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easeInOutQuad(time);
      const scrollPosition = Math.ceil((timeFunction * (target - start)) + start);

      window.scrollTo(0, scrollPosition);

      if (now < endTime) {
        requestAnimationFrame(scroll);
      }
    }

    scroll();
  }


function do_shop() {
    setTimeout(()=>{
        detail_view();
      }, 5000);
    go_back();
    return "success";
}

function do_shop2() {
    setTimeout(()=>{
        detail_view2();
      }, 5000);

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
/*<?php } else if ($act == "home2") { ?>*/
goto_home2();
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
/*<?php } else if ($act == "do_shop2") { ?>*/
do_shop2();
/*<?php } else if ($act == "check_detail_button") { ?>*/
check_detail_button();
/*<?php } else if ($act == "logout") { ?>*/
//do_logout();
/*<?php } ?>*/
