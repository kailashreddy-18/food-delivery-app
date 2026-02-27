// =====================================
// Data Structures
// =====================================

// We have 5 real generated images in our assets.
const ASSETS = {
  burger: 'assets/burger_meal_1772170308271.png',
  pizza: 'assets/pizza_slice_1772170328354.png',
  pasta: 'assets/pasta_bowl_1772170464198.png',
  poster1: 'assets/kroo_poster_1_1772170350350.png',
  poster2: 'assets/kroo_poster_2_1772170499257.png',
  // Placeholders for variety
  sushi: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
  tacos: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
};

const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    icon: "🍔",
    menu: [
      { id: 101, name: "Double Cheeseburger", desc: "Two beef patties, cheddar, special sauce.", price: 12.99, img: ASSETS.burger },
      { id: 102, name: "Spicy Chicken Sandwich", desc: "Crispy chicken, spicy mayo, pickles.", price: 9.99, img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80' },
      { id: 103, name: "Loaded Fries", desc: "Fries topped with cheese, bacon, and ranch.", price: 6.50, img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 2,
    name: "Pizza Heaven",
    icon: "🍕",
    menu: [
      { id: 201, name: "Pepperoni Slice", desc: "Classic slice with stretchy cheese.", price: 4.99, img: ASSETS.pizza },
      { id: 202, name: "Margherita Pizza", desc: "Fresh basil, mozzarella, tomato sauce.", price: 16.99, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80' },
      { id: 203, name: "Garlic Knots", desc: "Baked dough with garlic butter.", price: 5.99, img: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 3,
    name: "Pasta Bella",
    icon: "🍝",
    menu: [
      { id: 301, name: "Fettuccine Alfredo", desc: "Creamy sauce with parmesan.", price: 14.99, img: ASSETS.pasta },
      { id: 302, name: "Spaghetti Bolognese", desc: "Rich meat sauce over pasta.", price: 13.99, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80' },
      { id: 303, name: "Caesar Salad", desc: "Crisp romaine, croutons, dressing.", price: 8.99, img: ASSETS.salad }
    ]
  },
  {
    id: 4,
    name: "Tokyo Bites",
    icon: "🍣",
    menu: [
      { id: 401, name: "Sushi Platter", desc: "Assorted nigiri and rolls.", price: 24.99, img: ASSETS.sushi },
      { id: 402, name: "Spicy Tuna Roll", desc: "Fresh tuna with spicy mayo.", price: 10.99, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 5,
    name: "Taco Fiesta",
    icon: "🌮",
    menu: [
      { id: 501, name: "Street Tacos", desc: "Three beef tacos with cilantro/onion.", price: 11.99, img: ASSETS.tacos },
      { id: 502, name: "Nachos Supreme", desc: "Chips loaded with cheese and jalapeños.", price: 9.99, img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 6,
    name: "Indian Breakfast",
    icon: "🍛",
    menu: [
      { id: 601, name: "Masala Dosa", desc: "Crispy crepe made from rice and lentils, filled with potato curry.", price: 8.99, img: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&w=800&q=80' },
      { id: 602, name: "Idli Sambar", desc: "Steamed rice cakes served with lentil soup and chutney.", price: 6.99, img: 'https://images.unsplash.com/photo-1589301773012-05f8842af560?auto=format&fit=crop&w=800&q=80' },
      { id: 603, name: "Poha", desc: "Flattened rice sautéed with onions, peanuts, and spices.", price: 5.50, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80' },
      { id: 604, name: "Aloo Paratha", desc: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with butter.", price: 7.99, img: 'https://images.unsplash.com/photo-1626781699741-267926941164?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 7,
    name: "Mocktail Lounge",
    icon: "🍹",
    menu: [
      { id: 701, name: "Virgin Mojito", desc: "Refreshing blend of mint, lime, and soda.", price: 4.99, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80' },
      { id: 702, name: "Blue Lagoon", desc: "Citrusy mocktail with blue curacao syrup and lemonade.", price: 5.99, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80' },
      { id: 703, name: "Watermelon Breeze", desc: "Fresh watermelon juice with a hint of basil.", price: 5.50, img: 'https://images.unsplash.com/photo-1587888637140-849b25d80ef9?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

const posters = [
  ASSETS.poster1,
  ASSETS.poster2,
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1000&q=80'
];

let cart = [];
let activeRestaurantId = restaurants[0].id;
let posterIndex = 0;

// =====================================
// DOM Elements
// =====================================

const captchaScreen = document.getElementById('captcha-screen');
const mainApp = document.getElementById('main-app');
const captchaText = document.getElementById('captcha-text');
const captchaInput = document.getElementById('captcha-input');
const verifyBtn = document.getElementById('verify-btn');
const captchaError = document.getElementById('captcha-error');

const searchInput = document.getElementById('search-input');
const searchBtn = document.querySelector('.search-btn');

const restaurantsList = document.getElementById('restaurants-list');
const menuItems = document.getElementById('menu-items');
const currentRestaurantTitle = document.getElementById('current-restaurant-title');

const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');

const posterCarousel = document.getElementById('poster-carousel');
const carouselDots = document.getElementById('carousel-dots');

// New Checkout DOM Elements
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const chkSummaryList = document.getElementById('chk-summary-list');
const chkTotalPrice = document.getElementById('chk-total-price');
const chkErrorMsg = document.getElementById('chk-error-msg');
const paymentRadios = document.querySelectorAll('input[name="payment"]');
const payFieldsContainer = document.getElementById('pay-fields-container');
const successModal = document.getElementById('success-modal');
const backHomeBtn = document.getElementById('back-home-btn');

// =====================================
// Captcha Logic
// =====================================

function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

let expectedCaptcha = generateCaptcha();
captchaText.textContent = expectedCaptcha;

verifyBtn.addEventListener('click', () => {
  const userVal = captchaInput.value.trim();
  if (userVal === expectedCaptcha) {
    captchaScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    initApp();
  } else {
    captchaError.textContent = "Incorrect captcha. Try again.";
    expectedCaptcha = generateCaptcha();
    captchaText.textContent = expectedCaptcha;
    captchaInput.value = '';
    captchaInput.focus();
  }
});

captchaInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') verifyBtn.click();
});

// =====================================
// App Initialization
// =====================================

function initApp() {
  renderRestaurants();
  renderMenu(activeRestaurantId);
  updateCartUI();
  setupCarousel();
}

// =====================================
// Search Logic
// =====================================

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();

  if (query === '') {
    // Revert to active restaurant if search is cleared
    renderMenu(activeRestaurantId);
    return;
  }

  // Find all matching items across all menus
  const matchingItems = [];

  // To handle plurals (like "burgers" matching "burger"), we can strip trailing 's'
  const searchTerms = query.split(/\s+/).map(t => t.replace(/s$/, ''));

  restaurants.forEach(r => {
    r.menu.forEach(item => {
      const itemText = (item.name + " " + item.desc).toLowerCase();

      // Check if the full exact query matches, OR if any normalized terms match
      const isMatch = itemText.includes(query) || searchTerms.some(term => term.length > 2 && itemText.includes(term));

      if (isMatch) {
        matchingItems.push(item);
      }
    });
  });

  renderSearchResults(matchingItems, query);
});

searchBtn.addEventListener('click', () => {
  searchInput.dispatchEvent(new Event('input'));
});

function renderSearchResults(items, query) {
  currentRestaurantTitle.textContent = `Search Results for "${query}"`;
  menuItems.innerHTML = '';

  if (items.length === 0) {
    menuItems.innerHTML = '<p style="color:rgba(255,255,255,0.6); grid-column: 1 / -1; text-align: center; margin-top: 20px;">No matching food found.</p>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.innerHTML = `
      <div class="food-img-container">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="food-info">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <span class="food-price">$${item.price.toFixed(2)}</span>
      </div>
      <button class="add-btn" onclick="addToCart(${item.id})">+</button>
    `;
    menuItems.appendChild(card);
  });
}

// =====================================
// Rendering Logic
// =====================================

function renderRestaurants() {
  restaurantsList.innerHTML = '';
  restaurants.forEach(r => {
    const card = document.createElement('div');
    card.className = `restaurant-card ${r.id === activeRestaurantId ? 'active' : ''}`;
    card.innerHTML = `
      <div class="restaurant-icon">${r.icon}</div>
      <span>${r.name}</span>
    `;
    card.addEventListener('click', () => {
      activeRestaurantId = r.id;
      renderRestaurants();
      renderMenu(r.id);
    });
    restaurantsList.appendChild(card);
  });
}

function renderMenu(restaurantId) {
  const restaurant = restaurants.find(r => r.id === restaurantId);
  currentRestaurantTitle.textContent = `${restaurant.name} Menu`;
  menuItems.innerHTML = '';

  restaurant.menu.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.innerHTML = `
      <div class="food-img-container">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="food-info">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <span class="food-price">$${item.price.toFixed(2)}</span>
      </div>
      <button class="add-btn" onclick="addToCart(${item.id})">+</button>
    `;
    menuItems.appendChild(card);
  });
}

// =====================================
// Cart Logic
// =====================================

// Expose to window for inline onclick in template string
window.addToCart = function (itemId) {
  // Find item in all menus
  let foundItem = null;
  for (let r of restaurants) {
    const i = r.menu.find(m => m.id === itemId);
    if (i) {
      foundItem = i;
      break;
    }
  }

  if (foundItem) {
    cart.push(foundItem);
    updateCartUI();

    // Tiny animation feedback
    const btn = event.target;
    const originTxt = btn.textContent;
    btn.textContent = '✓';
    btn.style.background = 'var(--green)';
    setTimeout(() => {
      btn.textContent = originTxt;
      btn.style.background = '';
    }, 500);
  }
};

window.removeFromCart = function (index) {
  cart.splice(index, 1);
  updateCartUI();
};

function updateCartUI() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
    cartTotalEl.textContent = '$0.00';
    return;
  }

  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-item-title">${item.name}</span>
        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
    `;
    cartItemsContainer.appendChild(el);
  });

  cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

// =====================================
// Carousel Logic (10s interval)
// =====================================

function setupCarousel() {
  carouselDots.innerHTML = '';
  posters.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => setPoster(idx));
    carouselDots.appendChild(dot);
  });

  posterCarousel.src = posters[posterIndex];

  setInterval(() => {
    posterIndex = (posterIndex + 1) % posters.length;
    setPoster(posterIndex);
  }, 10000); // 10 seconds as requested
}

function setPoster(idx) {
  posterIndex = idx;
  posterCarousel.style.opacity = '0.5';
  setTimeout(() => {
    posterCarousel.src = posters[posterIndex];
    posterCarousel.style.opacity = '1';

    // Update dots
    Array.from(carouselDots.children).forEach((d, i) => {
      d.className = `dot ${i === posterIndex ? 'active' : ''}`;
    });
  }, 300);
}

// =====================================
// Checkout Logic
// =====================================

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;

  // Populate Summary
  chkSummaryList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const el = document.createElement('div');
    el.style.display = 'flex';
    el.style.justifyContent = 'space-between';
    el.style.marginBottom = '8px';
    el.innerHTML = `<span>${item.name}</span> <span style="color: var(--primary);">$${item.price.toFixed(2)}</span>`;
    chkSummaryList.appendChild(el);
  });
  chkTotalPrice.textContent = `$${total.toFixed(2)}`;

  // Reset fields
  checkoutForm.reset();
  chkErrorMsg.textContent = '';
  document.querySelectorAll('.pay-field-group').forEach(f => f.classList.add('hidden'));
  document.getElementById('field-card').classList.remove('hidden');

  checkoutModal.classList.remove('hidden');
});

closeCheckoutBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
});

paymentRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    // Hide all
    document.querySelectorAll('.pay-field-group').forEach(f => f.classList.add('hidden'));

    // Un-require all dynamic inputs
    payFieldsContainer.querySelectorAll('input, select').forEach(input => input.required = false);

    // Show selected and require them
    const selected = e.target.value;
    const targetGroup = document.getElementById(`field-${selected}`);
    if (targetGroup) {
      targetGroup.classList.remove('hidden');
      targetGroup.querySelectorAll('input, select').forEach(input => input.required = true);
    }
  });
});

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic custom validation for explicitly shown fields
  const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
  chkErrorMsg.textContent = '';

  if (selectedPayment === 'card') {
    const cn = document.getElementById('card-num').value.trim();
    if (cn.length < 15) {
      chkErrorMsg.textContent = 'Please enter a valid card number.';
      return;
    }
  }

  // If we reach here, it's valid
  checkoutModal.classList.add('hidden');
  successModal.classList.remove('hidden');

  // Clear cart
  cart = [];
  updateCartUI();
});

backHomeBtn.addEventListener('click', () => {
  successModal.classList.add('hidden');
});
