function selectGoods() {
    let goodsTag = document.querySelector('[data-product-id="GOODSIDREPLACE"]');
    let goods = goodsTag[0].getElementsByTagName("a")[0].click();
    let selectDelay = 500 + Math.random() * 1000;
    function click(dom) {
        dom.click();
    }

    setTimeout(click, selectDelay, goods);
    return "success";
}

selectGoods();
