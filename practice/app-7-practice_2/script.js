document.addEventListener('DOMContentLoaded', () => {
    // --- STATE MANAGEMENT (like Vuex) ---
    const state = {
        products: [],
        cart: [], // { id, product, quantity }
    };

    // --- MUTATIONS ---
    const mutations = {
        setProducts(products) {
            state.products = products;
        },
        addToCart(product) {
            const item = state.cart.find(i => i.id === product.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({ id: product.id, product, quantity: 1 });
            }
            renderApp();
        },
        removeFromCart(productId) {
            state.cart = state.cart.filter(i => i.id !== productId);
            renderApp();
        },
        updateQuantity({ productId, quantity }) {
            const item = state.cart.find(i => i.id === productId);
            if (item) {
                item.quantity = Math.max(1, quantity);
            }
            renderApp();
        },
        clearCart() {
            state.cart = [];
            renderApp();
        }
    };

    // --- ACTIONS ---
    const actions = {
        fetchProducts() {
            return new Promise(resolve => {
                setTimeout(() => {
                    const products = [
                        { id: 'p1', title: '無線耳機 Pro', price: 2999, img: 'https://picsum.photos/seed/p1/400/300', desc: '主動降噪，長效電池' },
                        { id: 'p2', title: '極速行動電源', price: 1499, img: 'https://picsum.photos/seed/p2/400/300', desc: '10000mAh 快充' },
                        { id: 'p3', title: '智慧手錶 S', price: 4999, img: 'https://picsum.photos/seed/p3/400/300', desc: '健康監測與多人模式' },
                        { id: 'p4', title: '專業攝影包', price: 2599, img: 'https://picsum.photos/seed/p4/400/300', desc: '防潑水、多隔層' },
                    ];
                    mutations.setProducts(products);
                    resolve(products);
                }, 700);
            });
        }
    };

    // --- GETTERS ---
    const getters = {
        cartItemCount: () => state.cart.reduce((s, i) => s + i.quantity, 0),
        cartTotalPrice: () => state.cart.reduce((s, i) => s + i.product.price * i.quantity, 0),
        getProductById: (id) => state.products.find(p => p.id === id),
    };

    // --- RENDER FUNCTIONS (like Components) ---
    function renderNavBar() {
        const navBar = document.querySelector('.navbar');
        const count = getters.cartItemCount();
        navBar.innerHTML = `
            <div class="nav-left">
                <a href="#/products" class="logo">MiniShop</a>
                <a href="#/products">商品</a>
                <a href="#/cart">購物車</a>
            </div>
            <div class="nav-right">
                <a href="#/cart">🛒 (${count})</a>
            </div>
        `;
    }

    function renderProductsPage(container) {
        container.innerHTML = `
            <section>
                <h2>商品列表</h2>
                <div class="loading">載入中...</div>
                <div class="grid"></div>
            </section>
        `;
        if (state.products.length === 0) {
            actions.fetchProducts().then(() => {
                const grid = container.querySelector('.grid');
                container.querySelector('.loading').style.display = 'none';
                state.products.forEach(p => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <a href="#/products/${p.id}">
                            <img src="${p.img}" alt="${p.title}" />
                        </a>
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                        <div class="bottom">
                            <span class="price">NT$ ${p.price}</span>
                            <button>加入購物車</button>
                        </div>
                    `;
                    card.querySelector('button').addEventListener('click', () => mutations.addToCart(p));
                    grid.appendChild(card);
                });
            });
        } else {
            const grid = container.querySelector('.grid');
            container.querySelector('.loading').style.display = 'none';
            state.products.forEach(p => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <a href="#/products/${p.id}">
                        <img src="${p.img}" alt="${p.title}" />
                    </a>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <div class="bottom">
                        <span class="price">NT$ ${p.price}</span>
                        <button>加入購物車</button>
                    </div>
                `;
                card.querySelector('button').addEventListener('click', () => mutations.addToCart(p));
                grid.appendChild(card);
            });
        }
    }

    function renderProductDetailPage(container, id) {
        const product = getters.getProductById(id);
        if (!product) {
            container.innerHTML = `<div class="empty">找不到商品。</div>`;
            return;
        }
        container.innerHTML = `
            <div class="detail">
                <img src="${product.img}" />
                <div class="info">
                    <h2>${product.title}</h2>
                    <p>${product.desc}</p>
                    <p class="price">NT$ ${product.price}</p>
                    <button>加入購物車</button>
                </div>
            </div>
        `;
        container.querySelector('button').addEventListener('click', () => mutations.addToCart(product));
    }

    function renderCartPage(container) {
        if (state.cart.length === 0) {
            container.innerHTML = `
                <section>
                    <h2>購物車</h2>
                    <div class="empty">目前購物車內沒有商品。</div>
                </section>
            `;
            return;
        }

        const itemsHTML = state.cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.product.img}" />
                <div class="info">
                    <h3>${item.product.title}</h3>
                    <p>NT$ ${item.product.price}</p>
                </div>
                <div class="qty">
                    <button class="decrease">-</button>
                    <input type="number" value="${item.quantity}" />
                    <button class="increase">+</button>
                </div>
                <div class="total">NT$ ${item.product.price * item.quantity}</div>
                <button class="remove">刪除</button>
            </div>
        `).join('');

        container.innerHTML = `
            <section>
                <h2>購物車</h2>
                <div class="cart">
                    ${itemsHTML}
                    <div class="summary">
                        <span>共 ${getters.cartItemCount()} 件</span>
                        <strong>總計 NT$ ${getters.cartTotalPrice()}</strong>
                    </div>
                    <div class="actions">
                        <a href="#/products">繼續購物</a>
                        <a href="#/checkout">前往結帳</a>
                    </div>
                </div>
            </section>
        `;

        container.querySelectorAll('.cart-item').forEach(el => {
            const productId = el.dataset.id;
            el.querySelector('.increase').addEventListener('click', () => {
                const item = state.cart.find(i => i.id === productId);
                mutations.updateQuantity({ productId, quantity: item.quantity + 1 });
            });
            el.querySelector('.decrease').addEventListener('click', () => {
                const item = state.cart.find(i => i.id === productId);
                mutations.updateQuantity({ productId, quantity: item.quantity - 1 });
            });
            el.querySelector('input').addEventListener('change', (e) => {
                mutations.updateQuantity({ productId, quantity: parseInt(e.target.value) });
            });
            el.querySelector('.remove').addEventListener('click', () => {
                mutations.removeFromCart(productId);
            });
        });
    }

    function renderCheckoutPage(container) {
        if (getters.cartItemCount() === 0) {
            alert('購物車為空，請先加入商品再結帳。');
            window.location.hash = '/cart';
            return;
        }

        const itemsHTML = state.cart.map(item => `
            <div class="row">
                <div>${item.product.title} x ${item.quantity}</div>
                <div>NT$ ${item.product.price * item.quantity}</div>
            </div>
        `).join('');

        container.innerHTML = `
            <section>
                <h2>結帳</h2>
                <div class="checkout">
                    ${itemsHTML}
                    <div class="total">
                        <span>總計</span>
                        <strong>NT$ ${getters.cartTotalPrice()}</strong>
                    </div>
                    <div class="actions">
                        <a href="#/cart">返回購物車</a>
                        <button id="submit-order">確認送出</button>
                    </div>
                </div>
            </section>
        `;

        container.querySelector('#submit-order').addEventListener('click', () => {
            setTimeout(() => {
                alert('訂單已送出！感謝購買。');
                mutations.clearCart();
                window.location.hash = '/products';
            }, 500);
        });
    }

    // --- ROUTER ---
    const routes = {
        '/products': renderProductsPage,
        '/products/:id': renderProductDetailPage,
        '/cart': renderCartPage,
        '/checkout': renderCheckoutPage,
    };

    function router() {
        const path = window.location.hash.slice(1) || '/';
        const container = document.querySelector('.container');
        
        if (path === '/') {
            window.location.hash = '/products';
            return;
        }

        const productDetailMatch = path.match(/^\/products\/(.+)$/);
        if (productDetailMatch) {
            const productId = productDetailMatch[1];
            routes['/products/:id'](container, productId);
        } else {
            const routeHandler = routes[path];
            if (routeHandler) {
                routeHandler(container);
            } else {
                container.innerHTML = '<h2>404 Not Found</h2>';
            }
        }
    }

    // --- APP INITIALIZATION ---
    function renderApp() {
        renderNavBar();
        router();
    }

    window.addEventListener('hashchange', router);

    // Initial load
    renderApp();
});
