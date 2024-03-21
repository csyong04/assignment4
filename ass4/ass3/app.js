// Sample products data with images
const products = [
    { id: 1, name: 'Men Sneaker 1', price: 1000, image: 'image/aj1cj1-removebg-preview.png' },
    { id: 2, name: 'Men Sneaker 2', price: 1000, image: 'image/aj1cj1-removebg-preview.png' },
    { id: 3, name: 'Men Sneaker 3', price: 1000, image: 'image/aj1cj1-removebg-preview.png' },
    { id: 4, name: 'Women Sneaker 1', price: 55, image: 'image/girlshoe1 (2).png' },
    { id: 5, name: 'Women Sneaker 2', price: 65, image: 'image/girlshoe1 (2).png' },
    { id: 6, name: 'Women Sneaker 3', price: 75, image: 'image/girlshoe1 (2).png' },
    { id: 7, name: 'Men Clothing 1', price: 40, image: 'image/menclothes1.png' },
    { id: 8, name: 'Men Clothing 2', price: 45, image: 'image/menclothes1.png' },
    { id: 9, name: 'Men Clothing 3', price: 50, image: 'image/menclothes1.png' },
    { id: 10, name: 'Women Clothing 1', price: 35, image: 'image/womenshirt1-removebg-preview.png' },
    { id: 11, name: 'Women Clothing 2', price: 40, image: 'image/womenshirt1-removebg-preview.png' },
    { id: 12, name: 'Women Clothing 3', price: 45, image: 'image/womenshirt1-removebg-preview.png' },
    { id: 13, name: 'Accessory 1', price: 20, image: 'image/hat2-removebg-preview.png' },
    { id: 14, name: 'Accessory 2', price: 25, image: 'image/hat2-removebg-preview.png' },
    { id: 15, name: 'Accessory 3', price: 30, image: 'image/hat2-removebg-preview.png' }
];

// Initialize cart
let cart = [];

// Function to display products
function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-md-4', 'product-card');
        productDiv.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        productsDiv.appendChild(productDiv);
    });
}

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        displayCart();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        const cartItem = cart[index];
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            cart.splice(index, 1);
        }
        displayCart();
    }
}

// Function to display cart
function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            <span>${item.name} - $${item.price} x ${item.quantity}</span>
            <button onclick="removeFromCart(${item.id})" class="btn btn-danger btn-sm ml-2">-</button>
        `;
        cartDiv.appendChild(cartItemDiv);
        totalPrice += item.price * item.quantity;
    });
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${totalPrice}`;
}

// Initial display
displayProducts();

// Function to display products
function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    const categories = {
        'Men Sneakers': [],
        'Women Sneakers': [],
        'Men Clothing': [],
        'Women Clothing': [],
        'Accessories': []
    };

    products.forEach(product => {
        switch (true) {
            case product.name.includes('Men Sneaker'):
                categories['Men Sneakers'].push(product);
                break;
            case product.name.includes('Women Sneaker'):
                categories['Women Sneakers'].push(product);
                break;
            case product.name.includes('Men Clothing'):
                categories['Men Clothing'].push(product);
                break;
            case product.name.includes('Women Clothing'):
                categories['Women Clothing'].push(product);
                break;
            default:
                categories['Accessories'].push(product);
        }
    });

    for (const category in categories) {
        if (categories.hasOwnProperty(category)) {
            const categoryProducts = categories[category];
            if (categoryProducts.length > 0) {
                const categoryHeader = document.createElement('h2');
                categoryHeader.textContent = category;
                productsDiv.appendChild(categoryHeader);

                categoryProducts.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('col-md-4', 'product-card');
                    productDiv.innerHTML = `
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">$${product.price}</p>
                                <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    `;
                    productsDiv.appendChild(productDiv);
                });
            }
        }
    }
}



