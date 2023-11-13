const goodsId = "GOODSIDREPLACE";
function selectGoods() {
    let goodsList = document.querySelectorAll(goodsSelector);
    function findGoods(list) {
        for (const goods of goodsList) {
            if (goods.href.includes(goodsId)) {
                return goods;
            }
        }
    }
    const goods = findGoods(goodsList);

    let selectDelay = 500 + Math.random() * 1000;
    function click(dom) {
        dom.click();
    }

    setTimeout(click, selectDelay, goods);
    return "success";
}

selectGoods();
