alert("asdasd")
window.location.href = "https://my.asos.com/identity/login";



// var back_info = localStorage.getItem("back_info");
// back_info = JSON.parse(back_info);

// // alert(back_info);

// function checkLoad() {
//   if (document.readyState === "complete") {
//     clearInterval(intervalId);
//     router(window.location.pathname);
//   } else {

//   }
// }

// intervalId = setInterval(checkLoad, 1000);

// function router(current_url) {
//   switch (current_url) {
//     case "/shop.html":
//       alert("in shop.html");
//       window.location.href = "https://my.asos.com/identity/login";
//       break;
//     case "/identity/login":
//       alert("asos in");
//       break;  
//     default:
//       break;
//   }
// }
// function router(current_url) {
//   switch (current_url) {
//     case "/shop.html":
//       alert("asd");
//       window.location.href = "https://my.asos.com/identity/login";

//       // if(back_info.login_info.user){
//       //     // alert(JSON.stringify(typeof back_info.login_info));
//       //     // alert(back_info.login_info.user);

//       //     location.href = "https://my.asos.com/identity/login";
//       // }
//       // else{
//       //     alert("asd");
//       //     location.reload();
//       // }
//       break;

//     case "/identity/login":
//       login_action();
//       // else{
//       //     setTimeout(function() {
//       //         location.reload();
//       //       }, 1000);
//       // }

//       break;

//     default:
      
//       break;
//   }
// }

// function redirectTo(url) {
//   alert("redirect to--->" + url);
//   window.location.href = url;
// }

// function favorite_action() {
//   const favoriteButton = document.getElementsByClassName("AGXyD GIdCP")[0];
//   favoriteButton.click();
// }

// function login_action() {
//   alert("asd");
//   // try {
//   const usernameInput = document.getElementById("EmailAddress");
//   const passwordInput = document.getElementById("Password");
//   const loginButton = document.getElementById("signin");

//   function inputUserName() {
//     // alert(back_info.login_info.user);
//     usernameInput.value = back_info.login_info.user;
//   }

//   function inputPassword() {
//     passwordInput.value = back_info.login_info.password;
//   }
//   function clickLogin() {
//     loginButton.click();
//   }
//   const inputUserNameDelayTime = 2000 + Math.random() * 3000;
//   const inputPasswordDelayTime = inputUserNameDelayTime + Math.random() * 3000;
//   const clickDelayTime = inputPasswordDelayTime + Math.random() * 3000;
//   setTimeout(inputUserName, inputUserNameDelayTime);
//   setTimeout(inputPassword, inputPasswordDelayTime);
//   setTimeout(clickLogin, clickDelayTime);

//   //     // var email = back_info.login_info.user;
//   //     // var password = c;
//   //     // var EmailAddress = document.getElementById("EmailAddress");
//   //     // var Password = document.getElementById("Password");
//   //     // var submit_button = document.getElementById("signin");
//   //     // EmailAddress.setAttribute("value", email);
//   //     // Password.setAttribute("value", password);
//   //     // simulatedClick(submit_button);
//   //     // alert("submit");
//   //     // return true;

//   // } catch (error) {
//   //     return false;
//   // }
// }

// function get_login_info() {
//   var tmp;
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       tmp = JSON.parse(this.responseText).result;
//       if (tmp) {
//         window.localStorage.setItem("back_info", JSON.stringify(tmp));
//         window.location.href = "https://my.asos.com/identity/login";
//       }
//       // window.localStorage.setItem('a','r');
//       // window.localStorage.setItem('back_info',JSON.stringify((JSON.parse(this.responseText)).result));
//     } else {
//       location.reload();
//     }
//   };
//   xhttp.open("POST", "http://51.15.21.77/nvlogin/getlogininfo", true);
//   xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//   xhttp.send("machine_id=" + mi);
// }

// function sendKeystrokesWithRandomDelay(inputString, id) {
//   var inputField = document.getElementById(id);

//   for (let index = 0; index < 100; index++) {
//     // const element = array[index];
//     simulatedClick(inputField);
//   }
// }

// function start_action(param_email) {
//   if (document.getElementById("EmailAddress")) {
//     sendKeystrokesWithRandomDelay(param_email, "signin");
//   }
// }

// // if (document.getElementById("Password")) {
// //     sendKeystrokesWithRandomDelay(password, "Password");
// //     document.getElementById('signInForm').submit();
// // }

// function simulatedClick(target) {
//   var event = target.ownerDocument.createEvent("MouseEvents"),
//     options = options || {},
//     opts = {
//       // These are the default values, set up for un-modified left clicks
//       type: "click",
//       canBubble: true,
//       cancelable: true,
//       view: target.ownerDocument.defaultView,
//       detail: 1,
//       screenX: 0, //The coordinates within the entire page
//       screenY: 0,
//       clientX: 0, //The coordinates within the viewport
//       clientY: 0,
//       ctrlKey: false,
//       altKey: false,
//       shiftKey: false,
//       metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
//       button: 0, //0 = left, 1 = middle, 2 = right
//       relatedTarget: null,
//     };

//   //Merge the options with the defaults
//   for (var key in options) {
//     if (options.hasOwnProperty(key)) {
//       opts[key] = options[key];
//     }
//   }

//   //Pass in the options
//   event.initMouseEvent(
//     opts.type,
//     opts.canBubble,
//     opts.cancelable,
//     opts.view,
//     opts.detail,
//     opts.screenX,
//     opts.screenY,
//     opts.clientX,
//     opts.clientY,
//     opts.ctrlKey,
//     opts.altKey,
//     opts.shiftKey,
//     opts.metaKey,
//     opts.button,
//     opts.relatedTarget
//   );

//   //Fire the event
//   target.dispatchEvent(event);
// }
