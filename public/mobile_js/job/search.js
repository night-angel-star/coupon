function search() {
    let searchInput = document.getElementById("keyword");
    let inputDelay = 500 + Math.random() * 1000;
    let searchDelay = inputDelay + Math.random() * 1000;

    let searchButton = document.getElementById("header-nav");
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
