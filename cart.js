let cart = [];

function addToCart(productName, price) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    alert(${productName} added to your cart!);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "<h3>Your Cart</h3>";

    if (cart.length === 0) {
        cartContainer.innerHTML += "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement("p");
            cartItem.textContent = ${item.name} - $${item.price} x ${item.quantity};
            cartContainer.appendChild(cartItem);
        });
    }
}