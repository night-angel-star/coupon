const goodsTagSelector = '[data-product-id="GOODSIDREPLACE"]';
function selectGoods() {
    let goodsTag = document.querySelector(goodsTagSelector);
    let goods = goodsTag.getElementsByTagName("a")[0];
    let selectDelay = 500 + Math.random() * 1000;
    function click(dom) {
        dom.click();
    }

    setTimeout(click, selectDelay, goods);
    return "success";
}

selectGoods();
