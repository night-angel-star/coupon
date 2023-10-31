const goodsSelector = 'a[href*="goods_id=GOODSIDREPLACE"]';
function selectGoods() {
    let goods = document.querySelector(goodsSelector);
    let selectDelay = 500 + Math.random() * 1000;
    function click(dom) {
        dom.click();
    }

    setTimeout(click, selectDelay, goods);
    return "success";
}

selectGoods();
