
var email = "codesmartass01@rambler.ru";
var password = "1992330agh";

window.localStorage.setItem('a','r');
// chrome-search

function checkLoad() {
    if (document.readyState === "complete") {
        const m = localStorage.getItem('m');

        if ( window.localStorage.getItem('a') == 'r'){
            get_login_info();
        }
        
            
        
        
        // alert(window.location.pathname);
        // window.location.href = "http://www.google.com";
        // router(window.location.pathname);
        // start_action(email);
        // clearInterval(intervalId);
    } else {
        // alert("Page is not loaded");
    }
}

// http://localhost:8000/nvlogin/getlogininfo
var intervalId = setInterval(checkLoad, 1000);

function router(current_url) {
    switch (current_url) {
        case "/identity/login":
            if ( login_action() ){
                localStorage.setItem('a','t');
            }
            else{
                setTimeout(function() {
                    location.reload();
                  }, 1000);
            }    
        
            break;
        
        default:
            break;
    }
}

function login_action() {
    try {
        var EmailAddress = document.getElementById("EmailAddress");
        var Password = document.getElementById("Password");
        var submit_button = document.getElementById("signin");
        EmailAddress.setAttribute("value", email);
        Password.setAttribute("value", password);
        simulatedClick(submit_button);
        alert("submit");
        return true;

    } catch (error) {
        return false;
    }
}

// function get_login_info() {
//     fetch("http://192.168.148.184/nvlogin/getlogininfo", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         'Content-Length': 28,
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: {
//         machine_id : "qwe@qwe.qwe"
//       }
//     })
//     .then(response => response.text())
//     .then(data => {
//       console.log(data);
//       window.localStorage.setItem('a', 'r');
//     })
//     .catch(error => {
//     //   alert(error);
//     });
//   }


function get_login_info() {
    
    var tmp = window.localStorage.setItem('a','c');
    var xhttp = new XMLHttpRequest();
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.onreadystatechange = function () {
        // alert(this.status );
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            // Code to handle the response
            alert('asd');
            // console.log(this.responseText);
            window.localStorage.setItem('a','r');
        }
    };
    xhttp.open("POST", "http://192.168.148.184/nvlogin/getlogininfo", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhttp.send("machine_id=qwe@qwe.qwe")
}

const pasteEvent = new KeyboardEvent('keydown', {
    key: 'v',
    code: 'KeyV',
    ctrlKey: false,
});


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

// if (document.getElementById("Password")) {
//     sendKeystrokesWithRandomDelay(password, "Password");
//     document.getElementById('signInForm').submit();
// }


function simulatedClick(target) {

    var event = target.ownerDocument.createEvent('MouseEvents'),
        options = options || {},
        opts = { // These are the default values, set up for un-modified left clicks
            type: 'click',
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





