function selectGoods() {
    let goods = document.querySelector('a[href*="sid=GOODSIDREPLACE"]');
    let selectDelay = 500 + Math.random() * 1000;
    function click(dom) {
        dom.click();
    }

    setTimeout(click, selectDelay, goods);
    return "success";
}

selectGoods();
