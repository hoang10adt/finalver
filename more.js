var product = [{
    "name": "Apple Macbook Air 13 (MGN63SA/A) (Apple M1/8GB RAM/256GB SSD/13.3 inch IPS/Mac OS/Xám)",
    "price": "25.289.000đ",
    "link": 'image/com1.png',
    "item": "macbook"
}, {
    "name": "Apple Macbook Air 13 (MGN63SA/A) (Apple M1/8GB RAM/256GB SSD/13.3 inch IPS/Mac OS/Xám)",
    "price": "38.599.000đ",
    "link": 'image/com2.png',
    "item": "macbook"
}, {
    "name": "Apple Macbook Pro 13 Touchbar (MXK72) (i5 1.4Ghz/8GB /512GB SSD/13.3 inchIPS/Mac OS/Bạc)",
    "price": "37.689.000đ",
    "link": "image/com3.jpg",
    "item": "macbook"
}, {
    "name": "Apple Macbook Air 13 (MVH52) (i5 1.1Ghz/8GB /512GB SSD/13.3 inch IPS/MacOS/Vàng) (2020)",
    "price": "31.489.000đ",
    "link": "image/com4.jpg",
    "item": "macbook"
}, {
    "name": "Apple Macbook Air 13 (MVH22) (i5 1.1Ghz/8GB /512GB SSD/13.3 inch IPS/MacOS/Xám) (2020)",
    "price": "31.489.000đ",
    "link": "image/com5.jpg",
    "item": "macbook"
}, {
    "name": "Apple Macbook Pro 13 Touchbar (MXK52) (i5 1.4Ghz/8GB /512GB SSD/13.3 inch IPS/Mac OS/Xám)",
    "price": "37.689.000đ",
    "link": "image/com6.jpg",
    "item": "macbook"
}, {
    "name": "PC Apple iMac Pro 8-core (Intel Xeon/32G RAM ECC/1TB SSD/Radeon Pro Vega 56) (MQ2Y2SA/A)",
    "price": "131.999.000đ",
    "link": "image/com7.jpg",
    "item": "imac"
}, {
    "name": "Apple Mac Mini MRTR2SA/A (2018) (i3 8100 3.6Ghz/8GB RAM/128GB SSD/Mac OS X)",
    "price": "21.489.000đ",
    "link": "image/com8.jpg",
    "item": "mini"
}, {
    "name": "Apple AirPods Pro - MWP22",
    "price": "5.599.000đ",
    "link": "image/com9.jpg",
    "item": "access"
}, {
    "name": "Apple AirPods 2 True Wireless - MV7N2",
    "price": "3.599.000đ",
    "link": "image/com10.jpg",
    "item": "access"
}];

function function1() {
    for (let i = 0; i < product.length; i++) {
        var linode = document.createElement("div");
        linode.setAttribute('class', 'itembox');
        linode.setAttribute('data-item', `${product[i].item}`);
        linode.innerHTML = '<img src=" ' +
            `${product[i].link}` + '"  alt=""><h1>'+`${product[i].name}`+'</h1><p>Giá: '+`${product[i].price}`+'</p>';
        document.getElementById('product').appendChild(linode);
    }

}