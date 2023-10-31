const searchInputSelector = "#keyword";
const searchButtonSelector = "#header-nav";
function search() {
    let searchInput = document.querySelector(searchInputSelector);
    let searchButton = document.querySelector(searchButtonSelector);
    let inputDelay = 500 + Math.random() * 1000;
    let searchDelay = inputDelay + Math.random() * 1000;

    let searchStr = "SEARCHSTRFORREPLACE";

    function input(dom, value) {
        dom.value = value;
    }

    function click(dom) {
        dom.click();
    }

    setTimeout(input, inputDelay, searchInput, searchStr);
    setTimeout(click, searchDelay, searchButton);
    return "success";
}

search();
