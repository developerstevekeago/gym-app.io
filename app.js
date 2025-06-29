document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = {
        'whey-protein': {
            title: 'Premium Whey Protein',
            price: '$39.99',
            description: 'High-quality whey protein isolate with 25g protein per serving. Perfect for muscle recovery and growth. Available in chocolate, vanilla, and strawberry flavors.',
            image: 'https://i.pinimg.com/736x/b5/56/e5/b556e55be2a36ebcf0dfe1c8a9045a9c.jpg'
        },
        'resistance-bands': {
            title: 'Resistance Bands Set',
            price: '$24.99',
            description: '5-piece resistance band set with varying tension levels. Includes door anchor, ankle straps, and carrying bag. Perfect for home workouts and physical therapy.',
            image: 'https://i.pinimg.com/736x/56/bb/ed/56bbed0d8c1d1ee82a1710ea5bf9d0e9.jpg'
        },
        'gym-towels': {
            title: 'Microfiber Gym Towels',
            price: '$12.99',
            description: 'Pack of 3 high-absorption microfiber gym towels. Quick-drying and anti-odor technology. Perfect size for gym bags (16" x 26").',
            image: 'https://i.pinimg.com/736x/34/8d/0b/348d0bb69782958c3eda8c4dee108d83.jpg'
        },
        'dumbbells': {
            title: 'Adjustable Dumbbells',
            price: '$89.99',
            description: 'Space-saving adjustable dumbbells with 5-25kg weight range. Easy dial system to change weights quickly. Ergonomic rubberized handles for comfort.',
            image: 'https://i.pinimg.com/736x/ed/9f/46/ed9f4699151b9341db892de362d93598.jpg'
        },
        'pre-workout': {
            title: 'Energy Pre-Workout',
            price: '$29.99',
            description: 'Powerful pre-workout formula with caffeine, beta-alanine, and citrulline malate. Enhances energy, focus, and endurance. 30 servings per container.',
            image: 'https://i.pinimg.com/736x/22/21/b5/2221b5b4aa6ed58dfe14a828dfac1218.jpg'
        },
        'gym-apparel': {
            title: 'Performance Apparel',
            price: '$34.99',
            description: 'Moisture-wicking gym shirts and leggings with 4-way stretch. Breathable fabric with anti-odor technology. Available in multiple colors and sizes.',
            image: 'https://i.pinimg.com/736x/9d/77/e7/9d77e741f5ac139989c339eddcb34e45.jp'
        },
        'water-bottles': {
            title: 'Insulated Water Bottle',
            price: '$19.99',
            description: '24oz stainless steel water bottle with double-wall insulation. Keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof lid and carry handle.',
            image: 'https://i.pinimg.com/736x/80/cc/dd/80ccddf8020e29eb1d24210f9c43e044.jpg'
        },
        'lifting-belts': {
            title: 'Premium Lifting Belt',
            price: '$49.99',
            description: '4" powerlifting belt made from genuine leather. Provides lumbar support for heavy lifts. Adjustable buckle with secure fit. Available in black and brown.',
            image: 'https://i.pinimg.com/736x/66/52/38/6652382a39389588727f3c087a234e81.jpg'
        }
    };

    // Get modal elements
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');

    // Add click event to all quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.getAttribute('data-product');
            const product = products[productId];

            // Populate modal with product data
            modalTitle.textContent = product.title;
            modalPrice.textContent = product.price;
            modalDescription.textContent = product.description;
            modalImage.src = product.image;
            modalImage.alt = product.title;

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});



        // Testimonial Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const sliderDots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        
        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            sliderDots.forEach(dot => dot.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            sliderDots[index].classList.add('active');
            currentSlide = index;
        }
        
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto slide change
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);
        
        // Scroll Animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function checkScroll() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
        
        // Initial check
        checkScroll();
        
        // Check on scroll
        window.addEventListener('scroll', checkScroll);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Store Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                const productCards = document.querySelectorAll('.product-card');
                
                productCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Product Modal
        const modal = document.getElementById('product-modal');
        const modalTitle = document.getElementById('modal-product-title');
        const modalPrice = document.getElementById('modal-product-price');
        const modalRating = document.getElementById('modal-product-rating');
        const modalDescription = document.getElementById('modal-product-description');
        const modalImage = document.getElementById('modal-product-image');
        const sizeOptions = document.getElementById('size-options');
        const colorOptions = document.getElementById('color-options');
        const closeModal = document.querySelector('.close-modal');
        const viewDetailsBtns = document.querySelectorAll('.view-details');
        const quantityInput = document.querySelector('.quantity-input');
        const minusBtn = document.querySelector('.quantity-btn.minus');
        const plusBtn = document.querySelector('.quantity-btn.plus');
        const addToCartBtn = document.querySelector('.add-to-cart');
        const buyNowBtn = document.querySelector('.buy-now');
        
        let currentProduct = null;
        
        // Open modal when clicking View Details
        viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id);
                currentProduct = products.find(p => p.id === productId);
                
                if (currentProduct) {
                    modalTitle.textContent = currentProduct.title;
                    modalPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
                    modalRating.innerHTML = currentProduct.rating;
                    modalDescription.textContent = currentProduct.description;
                    modalImage.src = currentProduct.image;
                    modalImage.alt = currentProduct.title;
                    
                    // Populate size options
                    sizeOptions.innerHTML = '';
                    currentProduct.sizes.forEach(size => {
                        const sizeBtn = document.createElement('button');
                        sizeBtn.className = 'option-btn';
                        sizeBtn.textContent = size;
                        sizeBtn.addEventListener('click', () => {
                            document.querySelectorAll('#size-options .option-btn').forEach(b => b.classList.remove('active'));
                            sizeBtn.classList.add('active');
                        });
                        sizeOptions.appendChild(sizeBtn);
                    });
                    
                    // Populate color options
                    colorOptions.innerHTML = '';
                    currentProduct.colors.forEach(color => {
                        const colorBtn = document.createElement('button');
                        colorBtn.className = 'option-btn';
                        colorBtn.textContent = color;
                        colorBtn.addEventListener('click', () => {
                            document.querySelectorAll('#color-options .option-btn').forEach(b => b.classList.remove('active'));
                            colorBtn.classList.add('active');
                        });
                        colorOptions.appendChild(colorBtn);
                    });
                    
                    // Set default selections
                    if (sizeOptions.firstChild) sizeOptions.firstChild.classList.add('active');
                    if (colorOptions.firstChild) colorOptions.firstChild.classList.add('active');
                    
                    // Reset quantity
                    quantityInput.value = 1;
                    
                    // Show modal
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close modal
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Quantity controls
        minusBtn.addEventListener('click', () => {
            if (quantityInput.value > 1) {
                quantityInput.value--;
            }
        });
        
        plusBtn.addEventListener('click', () => {
            quantityInput.value++;
        });
        
        // Add to cart
        addToCartBtn.addEventListener('click', () => {
            if (currentProduct) {
                const size = document.querySelector('#size-options .option-btn.active')?.textContent || 'N/A';
                const color = document.querySelector('#color-options .option-btn.active')?.textContent || 'N/A';
                const quantity = parseInt(quantityInput.value);
                
                const cartItem = {
                    id: currentProduct.id,
                    title: currentProduct.title,
                    price: currentProduct.price,
                    image: currentProduct.image,
                    size,
                    color,
                    quantity
                };
                
                // Check if item already exists in cart
                const existingItem = cart.find(item => 
                    item.id === cartItem.id && 
                    item.size === cartItem.size && 
                    item.color === cartItem.color
                );
                
                if (existingItem) {
                    existingItem.quantity += cartItem.quantity;
                } else {
                    cart.push(cartItem);
                }
                
                updateCart();
                showCartNotification();
                
                // Close modal
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Buy now
        buyNowBtn.addEventListener('click', () => {
            addToCartBtn.click(); // Add to cart first
            document.getElementById('cart-icon').click(); // Open cart
        });
        
        // Cart functionality
        const cartIcon = document.getElementById('cart-icon');
        const cartModal = document.getElementById('cart-modal');
        const closeCart = document.querySelector('.close-cart');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalContainer = document.getElementById('cart-total');
        const cartSubtotalPrice = document.querySelector('.cart-subtotal-price');
        const checkoutBtn = document.querySelector('.checkout-btn');
        
        // Toggle cart modal
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Update cart
        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            document.querySelector('.cart-count').textContent = totalItems;
            
            // Update cart items
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
                cartTotalContainer.style.display = 'none';
            } else {
                cart.forEach((item, index) => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.className = 'cart-item';
                    cartItemElement.innerHTML = `
                        <div class="cart-item-img">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="cart-item-info">
                            <h4 class="cart-item-title">${item.title}</h4>
                            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                            <div class="cart-item-quantity">
                                <button class="decrease">-</button>
                                <input type="number" value="${item.quantity}" min="1">
                                <button class="increase">+</button>
                                <span class="remove-item" data-index="${index}">Remove</span>
                            </div>
                            <div class="cart-item-options">
                                <small>Size: ${item.size}</small>
                                <small>Color: ${item.color}</small>
                            </div>
                        </div>
                    `;
                    cartItemsContainer.appendChild(cartItemElement);
                    
                    // Add event listeners for quantity changes
                    const decreaseBtn = cartItemElement.querySelector('.decrease');
                    const increaseBtn = cartItemElement.querySelector('.increase');
                    const quantityInput = cartItemElement.querySelector('input');
                    const removeBtn = cartItemElement.querySelector('.remove-item');
                    
                    decreaseBtn.addEventListener('click', () => {
                        if (item.quantity > 1) {
                            item.quantity--;
                            quantityInput.value = item.quantity;
                            updateCart();
                        }
                    });
                    
                    increaseBtn.addEventListener('click', () => {
                        item.quantity++;
                        quantityInput.value = item.quantity;
                        updateCart();
                    });
                    
                    quantityInput.addEventListener('change', () => {
                        const newQuantity = parseInt(quantityInput.value);
                        if (newQuantity >= 1) {
                            item.quantity = newQuantity;
                            updateCart();
                        }
                    });
                    
                    removeBtn.addEventListener('click', () => {
                        cart.splice(index, 1);
                        updateCart();
                    });
                });
                
                // Update subtotal
                const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                cartSubtotalPrice.textContent = `$${subtotal.toFixed(2)}`;
                cartTotalContainer.style.display = 'block';
            }
        }
        
        // Checkout
        checkoutBtn.addEventListener('click', () => {
            alert('Proceeding to checkout! In a real implementation, this would redirect to a checkout page.');
            cart = [];
            updateCart();
            cartModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Show notification when adding to cart
        function showCartNotification() {
            const notification = document.createElement('div');
            notification.className = 'cart-notification';
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>Item added to cart!</span>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
            
            // Add styles for notification
            const style = document.createElement('style');
            style.textContent = `
                .cart-notification {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: var(--gold);
                    color: var(--black);
                    padding: 15px 25px;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    transform: translateY(100px);
                    opacity: 0;
                    transition: all 0.3s ease;
                    z-index: 3000;
                }
                .cart-notification.show {
                    transform: translateY(0);
                    opacity: 1;
                }
                .cart-notification i {
                    font-size: 1.2rem;
                }
            `;
            document.head.appendChild(style);
        }

        // Render products dynamically
function renderProducts(productsToRender) {
    const storeGrid = document.getElementById('store-grid');
    storeGrid.innerHTML = ''; // Clear previous products

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card fade-in`;
        productCard.setAttribute('data-category', product.category);

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">${product.rating}</div>
                <button class="product-btn view-details" data-id="${product.id}">View Details</button>
            </div>
        `;
        storeGrid.appendChild(productCard);
    });

    // Re-attach event listeners for "View Details" buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            currentProduct = products.find(p => p.id === productId);
            
            if (currentProduct) {
                modalTitle.textContent = currentProduct.title;
                modalPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
                modalRating.innerHTML = currentProduct.rating;
                modalDescription.textContent = currentProduct.description;
                modalImage.src = currentProduct.image;
                modalImage.alt = currentProduct.title;
                
                // Populate size options
                sizeOptions.innerHTML = '';
                currentProduct.sizes.forEach(size => {
                    const sizeBtn = document.createElement('button');
                    sizeBtn.className = 'option-btn';
                    sizeBtn.textContent = size;
                    sizeBtn.addEventListener('click', () => {
                        document.querySelectorAll('#size-options .option-btn').forEach(b => b.classList.remove('active'));
                        sizeBtn.classList.add('active');
                    });
                    sizeOptions.appendChild(sizeBtn);
                });
                
                // Populate color options
                colorOptions.innerHTML = '';
                currentProduct.colors.forEach(color => {
                    const colorBtn = document.createElement('button');
                    colorBtn.className = 'option-btn';
                    colorBtn.textContent = color;
                    colorBtn.addEventListener('click', () => {
                        document.querySelectorAll('#color-options .option-btn').forEach(b => b.classList.remove('active'));
                        colorBtn.classList.add('active');
                    });
                    colorOptions.appendChild(colorBtn);
                });
                
                // Set default selections
                if (sizeOptions.firstChild) sizeOptions.firstChild.classList.add('active');
                if (colorOptions.firstChild) colorOptions.firstChild.classList.add('active');
                
                // Reset quantity
                quantityInput.value = 1;
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

// Initial render
renderProducts(products);

// Optional: Update filter logic to re-render products
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        if (filter === 'all') {
            renderProducts(products);
        } else {
            renderProducts(products.filter(p => p.category === filter));
        }
    });
});