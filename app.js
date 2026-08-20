/* ==========================================
   TARA CAFE - Clean Elegant Application Logic
   ========================================== */

const MENU_DATA = [
  // Crispy Gobi Corner
  { id: 'g1', name: 'Crispy Gobi Manchurian', cat: 'gobi', price: 160, desc: 'Golden crispy cauliflower florets tossed in garlic, ginger & soy glaze.', img: 'assets/images/gobi_manchurian.png' },
  { id: 'g2', name: 'Chilli Gobi Dry', cat: 'gobi', price: 170, desc: 'Spicy Indo-Chinese style fried Gobi with green chillies & capsicum.', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80' },
  { id: 'g3', name: 'Schezwan Gobi Fry', cat: 'gobi', price: 180, desc: 'Crispy Gobi coated in spicy Schezwan sauce with spring onion garnishing.', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80' },

  // Royal Faloodas
  { id: 'f1', name: 'Royal Mango Falooda', cat: 'falooda', price: 190, desc: 'Layered with rose syrup, basil seeds, vermicelli, mango pulp & saffron ice cream.', img: 'assets/images/royal_falooda.png' },
  { id: 'f2', name: 'Kesar Pista Dryfruit Falooda', cat: 'falooda', price: 210, desc: 'Saffron pistachio syrup loaded with almonds, cashews & double scoops of ice cream.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80' },
  { id: 'f3', name: 'Chocolate Delight Falooda', cat: 'falooda', price: 180, desc: 'Choco syrup loaded with brownie crumbles, chocolate ice cream & choco chips.', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80' },

  // Artisanal Ice Creams
  { id: 'i1', name: 'Sizzling Brownie Sundae', cat: 'icecream', price: 220, desc: 'Warm chocolate brownie served on a sizzler plate with vanilla ice cream & dark fudge.', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' },
  { id: 'i2', name: 'Classic Gudbud Sundae', cat: 'icecream', price: 195, desc: 'Trio scoop of Vanilla, Strawberry & Mango layered with fresh fruits, jelly & nuts.', img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80' },
  { id: 'i3', name: 'Belgian Dark Chocolate Scoop', cat: 'icecream', price: 120, desc: 'Rich 70% dark Belgian cocoa ice cream served in a crisp waffle bowl.', img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80' },

  // Juices & Shakes
  { id: 'j1', name: 'Fresh Alphonso Mango Shake', cat: 'juices', price: 140, desc: 'Thick pure mango pulp blended with whole milk and topped with fresh mango cubes.', img: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80' },
  { id: 'j2', name: 'Avocado Almond Smoothie', cat: 'juices', price: 160, desc: 'Creamy fresh avocado blended with wild organic honey & crushed almonds.', img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80' },
  { id: 'j3', name: 'Pomegranate Mint Juice', cat: 'juices', price: 110, desc: '100% freshly pressed pomegranate juice infused with fresh garden mint.', img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80' },

  // Chat Counter
  { id: 'c1', name: 'Crispy Pani Puri Platter', cat: 'chat', price: 90, desc: 'Crispy hollow puris served with spicy mint water, sweet tamarind chutney & potato filling.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80' },
  { id: 'c2', name: 'Special Dahi Puri', cat: 'chat', price: 120, desc: 'Puris stuffed with boiled potatoes, chilled sweet curd, nylon sev & pomegranate seeds.', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80' },
  { id: 'c3', name: 'Tara Special Bhel Puri', cat: 'chat', price: 100, desc: 'Puffed rice mix with tangy chutneys, onions, tomatoes, coriander & crispy sev.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80' }
];

const INITIAL_REVIEWS = [
  { name: 'Aarav Sharma', date: 'Recent', rating: 5, comment: 'The Royal Mango Falooda and Crispy Gobi Manchurian are fantastic! Friendly cafe staff.' },
  { name: 'Priya Sundaram', date: '1 week ago', rating: 5, comment: 'Loved ordering via Swiggy. Always fresh, hot Gobi fry.' },
  { name: 'Rohan Mehta', date: '2 weeks ago', rating: 4, comment: 'Awesome Pani Puri & Mango Shake. Hygienic environment and comfortable place.' }
];

let activeCat = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderReviews();

  // Search & Filter
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      activeCat = e.target.getAttribute('data-cat');
      renderMenu();
    });
  });

  // Mobile Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

function renderMenu() {
  const container = document.getElementById('menuGrid');
  if (!container) return;

  const items = MENU_DATA.filter(item => {
    const matchCat = activeCat === 'all' || item.cat === activeCat;
    const matchSearch = item.name.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (items.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-sub);">No menu items found.</div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="menu-card">
      <img src="${item.img}" alt="${item.name}" class="menu-img" loading="lazy">
      <div class="menu-body">
        <div class="menu-head">
          <h3 class="menu-item-title">${item.name}</h3>
          <span class="menu-item-price">₹${item.price}</span>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderReviews() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  const stored = JSON.parse(localStorage.getItem('tara_reviews_elegant') || '[]');
  const all = [...stored, ...INITIAL_REVIEWS];

  container.innerHTML = all.map(r => `
    <div class="review-card">
      <div class="rev-user">
        <div class="avatar">${r.name.charAt(0)}</div>
        <div class="rev-info">
          <h4>${r.name}</h4>
          <p>${r.date}</p>
        </div>
      </div>
      <div class="stars">${'★'.repeat(r.rating)}</div>
      <p class="rev-text">"${r.comment}"</p>
    </div>
  `).join('');
}
