var login_url = "https://my.asos.com/identity/login";
var em;
var ps;
const mi = localStorage.getItem("m");
var back_info = localStorage.getItem("back_info");
back_info = JSON.parse(back_info);

function getTask() {}

function checkLoad() {
  if (document.readyState === "complete") {
    clearInterval(intervalId);

    // alert(window.location.pathname);
    router(window.location.pathname);

    // start_action(email);
  } else {
    // alert("Page is not loaded");
  }
}

intervalId = setInterval(checkLoad, 1000);
function router(current_url) {
  switch (current_url) {
    case "/shop.html":
      // alert("asd");
      window.location.href = "https://my.asos.com/identity/login";

      // if(back_info.login_info.user){
      //     // alert(JSON.stringify(typeof back_info.login_info));
      //     // alert(back_info.login_info.user);

      //     location.href = "https://my.asos.com/identity/login";
      // }
      // else{
      //     alert("asd");
      //     location.reload();
      // }
      break;

    case "/identity/login":
      login_action();
      // else{
      //     setTimeout(function() {
      //         location.reload();
      //       }, 1000);
      // }
      break;
    case "/my-account":
      window.location.href = "https://www.asos.com/search/";
      break;
    case "/search":
      //search();
      break;

    default:
      const delayTime = 2000 + Math.random() * 1000;
      alert("current task is ===>" + currentTask);
      currentTask = Number.parseInt(currentTask);
      if (currentTask !== 0) {
        alert("voting");
        setTimeout(favorite_action, delayTime);
        currentTask = currentTask + 1;
        if (currentTask < back_info.job_info.goods.length) {
          const redirectURL = back_info.job_info.goods[currentTask];
          localStorage.setItem("current_task", currentTask.toString());
          setTimeout(redirectTo, delayTime * 2, redirectURL);
        }
      } else {
        alert("initialize");
        if (back_info.job_info.goods.length !== 0) {
          alert("redirecting");
          const redirectURL = back_info.job_info.goods[currentTask].nvid;
          alert("new task is===>" + currentTask);
          localStorage.setItem("current_task", currentTask.toString());
          alert(
            "checking localStorage===>" + localStorage.getItem("current_task")
          );
          setTimeout(redirectTo, delayTime, redirectURL);
        }
      }
      break;
  }
}

function redirectTo(url) {
  alert("redirect to--->" + url);
  window.location.href = url;
}

function favorite_action() {
  const favoriteButton = document.getElementsByClassName("AGXyD GIdCP")[0];
  favoriteButton.click();
}

function login_action() {
  // try {
  const usernameInput = document.getElementById("EmailAddress");
  const passwordInput = document.getElementById("Password");
  const loginButton = document.getElementById("signin");

  function inputUserName() {
    // alert(back_info.login_info.user);
    usernameInput.value = back_info.login_info.user;
  }

  function inputPassword() {
    passwordInput.value = back_info.login_info.password;
  }
  function clickLogin() {
    loginButton.click();
  }
  const inputUserNameDelayTime = 2000 + Math.random() * 3000;
  const inputPasswordDelayTime = inputUserNameDelayTime + Math.random() * 3000;
  const clickDelayTime = inputPasswordDelayTime + Math.random() * 3000;
  setTimeout(inputUserName, inputUserNameDelayTime);
  setTimeout(inputPassword, inputPasswordDelayTime);
  setTimeout(clickLogin, clickDelayTime);

  //     // var email = back_info.login_info.user;
  //     // var password = c;
  //     // var EmailAddress = document.getElementById("EmailAddress");
  //     // var Password = document.getElementById("Password");
  //     // var submit_button = document.getElementById("signin");
  //     // EmailAddress.setAttribute("value", email);
  //     // Password.setAttribute("value", password);
  //     // simulatedClick(submit_button);
  //     // alert("submit");
  //     // return true;

  // } catch (error) {
  //     return false;
  // }
}

function get_login_info() {
  var tmp;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      tmp = JSON.parse(this.responseText).result;
      if (tmp) {
        window.localStorage.setItem("back_info", JSON.stringify(tmp));
        window.location.href = "https://my.asos.com/identity/login";
      }
      // window.localStorage.setItem('a','r');
      // window.localStorage.setItem('back_info',JSON.stringify((JSON.parse(this.responseText)).result));
    } else {
      location.reload();
    }
  };
  xhttp.open("POST", "http://51.15.21.77/nvlogin/getlogininfo", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhttp.send("machine_id=" + mi);
}

function sendKeystrokesWithRandomDelay(inputString, id) {
  var inputField = document.getElementById(id);

  for (let index = 0; index < 100; index++) {
    // const element = array[index];
    simulatedClick(inputField);
  }
}

function start_action(param_email) {
  if (document.getElementById("EmailAddress")) {
    sendKeystrokesWithRandomDelay(param_email, "signin");
  }
}

function waitUntilReadyObjAndRun(obj_id, action) {
  if (document.getElementById(obj_id)) {
    setTimeout(waitUntilReadyObjAndRun, 1000, obj_id, action);
    return;
  } else {
    action(obj_id);
  }
}
// if (document.getElementById("Password")) {
//     sendKeystrokesWithRandomDelay(password, "Password");
//     document.getElementById('signInForm').submit();
// }

function simulatedClick(target) {
  var event = target.ownerDocument.createEvent("MouseEvents"),
    options = options || {},
    opts = {
      // These are the default values, set up for un-modified left clicks
      type: "click",
      canBubble: true,
      cancelable: true,
      view: target.ownerDocument.defaultView,
      detail: 1,
      screenX: 0, //The coordinates within the entire page
      screenY: 0,
      clientX: 0, //The coordinates within the viewport
      clientY: 0,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
      button: 0, //0 = left, 1 = middle, 2 = right
      relatedTarget: null,
    };

  //Merge the options with the defaults
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      opts[key] = options[key];
    }
  }

  //Pass in the options
  event.initMouseEvent(
    opts.type,
    opts.canBubble,
    opts.cancelable,
    opts.view,
    opts.detail,
    opts.screenX,
    opts.screenY,
    opts.clientX,
    opts.clientY,
    opts.ctrlKey,
    opts.altKey,
    opts.shiftKey,
    opts.metaKey,
    opts.button,
    opts.relatedTarget
  );

  //Fire the event
  target.dispatchEvent(event);
}
