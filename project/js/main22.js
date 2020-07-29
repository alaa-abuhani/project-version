//select itemcontainer
const container = document.querySelector('.wrapper-item-slide');
// ajax request
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const products = JSON.parse(this.responseText);

            for (let i = 0; i < products.items.length; i++) {

                container.appendChild(creatProduct(products.items[i]));

            }

            slickSlider();
        }
        //https://raw.githubusercontent.com/alaa-abuhani/yaya/master/dist/pro.json
    };
    xhttp.open("GET", "pro.json", true);
    xhttp.send();
}
loadDoc();

//creat product
function creatProduct(obj) {

    //creat item
    const product = document.createElement("div");
    product.className = "card";
    // append cart
    const cart = document.createElement("div");
    cart.className = "cart";
    const assetCart = document.createElement("div");
    assetCart.className = "asset-cart";

    const clildCart = document.createElement("img");
    const clildCartAtt = document.createAttribute("src");
    clildCartAtt.value = obj["product-cart"];
    clildCart.setAttributeNode(clildCartAtt);
    const clildCartAtt2 = document.createAttribute("alt");
    clildCartAtt2.value = ("Card cart");
    clildCart.setAttributeNode(clildCartAtt2);
    clildCart.className = "img";
    assetCart.appendChild(clildCart);
    cart.appendChild(assetCart);
    product.appendChild(cart);

    //append img
    const child1 = document.createElement("img");
    const chdAtt1 = document.createAttribute("src");
    chdAtt1.value = obj["product-img"];
    child1.setAttributeNode(chdAtt1);
    const chdAtt2 = document.createAttribute("alt");
    chdAtt2.value = ("Card image cap");
    child1.setAttributeNode(chdAtt2);
    child1.className = "img";
    product.appendChild(child1);

    //append card body
    const child2 = document.createElement("div");
    child2.className = "card-body";
    product.appendChild(child2);
    //append product name
    const first = document.createElement("h5");
    const firstAtt = document.createTextNode(obj["product-name"]);
    first.appendChild(firstAtt);
    child2.appendChild(first);
    //append separator
    const sept = document.createElement("div");
    sept.className = "separator";
    child2.appendChild(sept);
    //append product brand
    const two = document.createElement("p");
    const twoAtt = document.createTextNode(obj["product-brand"]);
    two.appendChild(twoAtt);
    child2.appendChild(two);
    //append product line
    const three = document.createElement("h6");
    const threeAtt = document.createTextNode(obj["product-line"]);
    three.appendChild(threeAtt);
    child2.appendChild(three);
    console.log(product);

    return product;
}