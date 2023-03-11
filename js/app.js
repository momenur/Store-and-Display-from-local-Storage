const showProduct = () =>{
    const productFiled = document.getElementById('product-filed');
    const quantyFiled = document.getElementById('quanty-filed');
    const product = productFiled.value;
    const quanty = quantyFiled.value;
    productFiled.value = "";
    quantyFiled.value = "";
    displayProduct(product, quanty);
    saveProductToLocalStorage(product, quanty);
}
const displayProduct = (product, quanty) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText =`${product}: ${quanty}`;
    ul.appendChild(li);
}
const getStoredShopingCart = (product, quanty) =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const saveProductToLocalStorage = (product, quanty) =>{
    const cart = getStoredShopingCart();
    cart[product] = quanty;
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
    console.log(cartStringfied);
}

const displayProductFromLocalStorage = () =>{
    const saveCart = getStoredShopingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quanty = saveCart[product];
        console.log(saveCart[product]);
        displayProduct(product, quanty);
    }
}
displayProductFromLocalStorage();