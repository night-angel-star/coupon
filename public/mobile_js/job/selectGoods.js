const goodsId = "GOODSIDREPLACE";
function selectGoods() {
    let goodsList = document.querySelectorAll(goodsSelector);
    if (!goodsList) {
        return "fail";
    }
    function findGoods(list) {
        for (const goods of list) {
            if (goods.getAttribute("data-product-id") === goodsId) {
                return goods;
            }
        }
        return null;
    }
    const goods = findGoods(goodsList);
    if (!goods) {
        return "fail";
    }

    const goodsLink = goods.querySelector("a");
    if (!goodsLink) {
        return "fail";
    }

    let selectDelay = 500 + Math.random() * 1000;
    function click(dom) {
        dom.click();
    }

    setTimeout(click, selectDelay, goodsLink);
    return "success";
}

selectGoods();
