const searchIconSelector =
    ".site-nav__link.site-nav__link--icon.js-search-header.medium-up--hide";
const searchInputSelector = ".search__input";
const searchButtonSelector = ".btn--search";
function search() {
    // let searchIcon = document.getElementsByClassName(
    //     "site-nav__link site-nav__link--icon js-search-header medium-up--hide"
    // )[0];
    // let searchInput = document.getElementsByClassName("search__input")[0];
    // let searchButton = document.getElementsByClassName("btn--search")[0];
    let searchIcon = document.querySelector(searchIconSelector);
    let searchInput = document.querySelector(searchInputSelector);
    let searchButton = document.querySelector(searchButtonSelector);

    let selectDelay = 500 + Math.random() * 1000;
    let inputDelay = selectDelay + Math.random() * 1000;
    let searchDelay = inputDelay + Math.random() * 1000;

    let searchStr = "SEARCHSTRFORREPLACE";

    function input(dom, value) {
        dom.value = value;
    }

    function click(dom) {
        dom.click();
    }

    setTimeout(click, selectDelay, searchIcon);
    setTimeout(input, inputDelay, searchInput, searchStr);
    setTimeout(click, searchDelay, searchButton);
    return "success";
}

search();
