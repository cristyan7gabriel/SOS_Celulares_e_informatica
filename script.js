// Configurações
const WHATSAPP_NUMBER = "5562999999999"; // Placeholder, the user should replace it

// Array of 50 Realistic Products
const products = [
    // --- Smartphones (10) ---
    { id: 'SM01', name: 'iPhone 15 Pro Max 256GB Titânio Natural', category: 'smartphones', price: 7999.00, oldPrice: 8599.00, img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'SM02', name: 'iPhone 13 128GB Meia-Noite', category: 'smartphones', price: 3499.00, oldPrice: 3899.00, img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'SM03', name: 'Samsung Galaxy S24 Ultra 512GB Titânio Cinza', category: 'smartphones', price: 8299.00, oldPrice: null, img: 'https://images.unsplash.com/photo-1610945415296-735ab4b9eb93?q=80&w=600&auto=format&fit=crop', isPromo: false }, // Using generic high-end phone image
    { id: 'SM04', name: 'Samsung Galaxy A54 5G 256GB Preto', category: 'smartphones', price: 1799.00, oldPrice: 2199.00, img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'SM05', name: 'Xiaomi Redmi Note 13 Pro 5G 256GB', category: 'smartphones', price: 1950.00, oldPrice: null, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'SM06', name: 'Poco X6 Pro 5G 512GB 12GB RAM Preto', category: 'smartphones', price: 2450.00, oldPrice: 2799.00, img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'SM07', name: 'Motorola Moto G84 5G 256GB Viva Magenta', category: 'smartphones', price: 1499.00, oldPrice: null, img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'SM08', name: 'Motorola Edge 40 Neo 5G 256GB Black Beauty', category: 'smartphones', price: 2199.00, oldPrice: 2499.00, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'SM09', name: 'iPhone 11 64GB Branco (Seminovo)', category: 'smartphones', price: 1699.00, oldPrice: 1899.00, img: 'https://images.unsplash.com/photo-1574887428123-1ea23fcba326?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'SM10', name: 'Realme 11 Pro+ 512GB Bege', category: 'smartphones', price: 2599.00, oldPrice: null, img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cd8d6?q=80&w=600&auto=format&fit=crop', isPromo: false },

    // --- Capinhas e Películas (10) ---
    { id: 'CP01', name: 'Capinha Silicone Aveludada iPhone 15 Pro Max', category: 'capinhas', price: 69.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CP02', name: 'Película de Vidro 3D Privacidade iPhone 13', category: 'capinhas', price: 49.90, oldPrice: 69.90, img: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'CP03', name: 'Capinha Anti-Impacto Transparente Samsung S24', category: 'capinhas', price: 59.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1541877888806-0cb7a79e6eb1?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CP04', name: 'Película Cerâmica Fosca Gamer Xiaomi Redmi', category: 'capinhas', price: 39.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1544866380-4d436fecdbec?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CP05', name: 'Capa MagSafe Transparente iPhone 14', category: 'capinhas', price: 89.90, oldPrice: 119.90, img: 'https://images.unsplash.com/photo-1585298877543-16a7e0c451da?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'CP06', name: 'Kit Proteção (Capa + Película) Motorola G84', category: 'capinhas', price: 85.00, oldPrice: 100.00, img: 'https://images.unsplash.com/photo-1614088921876-0bf1db2418e2?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'CP07', name: 'Película Lente da Câmera iPhone 15 Pro', category: 'capinhas', price: 35.00, oldPrice: null, img: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CP08', name: 'Capa Carteira de Couro Samsung A54', category: 'capinhas', price: 75.00, oldPrice: null, img: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CP09', name: 'Capinha TPU Flexível Poco X6 Pro', category: 'capinhas', price: 45.00, oldPrice: null, img: 'https://images.unsplash.com/photo-1541877888806-0cb7a79e6eb1?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CP10', name: 'Película Hidrogel Alta Resistência (Qualquer Modelo)', category: 'capinhas', price: 69.90, oldPrice: 89.90, img: 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=600&auto=format&fit=crop', isPromo: true },

    // --- Fones de Ouvido (10) ---
    { id: 'FO01', name: 'AirPods Pro (2ª Geração) Original', category: 'fones', price: 1899.00, oldPrice: 2199.00, img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'FO02', name: 'Galaxy Buds 2 Pro Preto', category: 'fones', price: 899.00, oldPrice: 1199.00, img: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'FO03', name: 'Redmi Buds 4 Active TWS Preto', category: 'fones', price: 149.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'FO04', name: 'Headset Gamer Redragon Zeus X RGB', category: 'fones', price: 349.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'FO05', name: 'Fone Bluetooth JBL Tune 520BT', category: 'fones', price: 269.90, oldPrice: 299.90, img: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'FO06', name: 'Fone com Fio Original Apple Lightning', category: 'fones', price: 189.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'FO07', name: 'Headset Gamer HyperX Cloud Stinger 2', category: 'fones', price: 289.00, oldPrice: null, img: 'https://images.unsplash.com/photo-1599669500516-b181ad52b217?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'FO08', name: 'Fone QCY T13 Bluetooth 5.1', category: 'fones', price: 159.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'FO09', name: 'Fone Tipo C Original Samsung AKG', category: 'fones', price: 129.90, oldPrice: 159.90, img: 'https://images.unsplash.com/photo-1608240578848-1857cba38206?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'FO10', name: 'AirPods (3ª Geração) Premium 1:1', category: 'fones', price: 299.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop', isPromo: false },

    // --- Cabos e Carregadores (10) ---
    { id: 'CC01', name: 'Fonte Carregador Apple 20W USB-C', category: 'cabos', price: 169.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CC02', name: 'Cabo iPhone Lightning Homologado 1m', category: 'cabos', price: 59.90, oldPrice: 79.90, img: 'https://images.unsplash.com/photo-1506544777-64cfbe1142df?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'CC03', name: 'Carregador Samsung Super Fast 25W', category: 'cabos', price: 139.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CC04', name: 'Cabo Tipo C Baseus 100W Trançado 2m', category: 'cabos', price: 89.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1615526675545-c49156f7e41d?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CC05', name: 'Powerbank Pineng 10.000mAh Original', category: 'cabos', price: 129.90, oldPrice: 159.90, img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'CC06', name: 'Carregador Turbo Xiaomi 33W', category: 'cabos', price: 119.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CC07', name: 'Cabo 3 em 1 (Lightning, Tipo C, Micro USB)', category: 'cabos', price: 49.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1506544777-64cfbe1142df?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CC08', name: 'Base Carregador Indução MagSafe', category: 'cabos', price: 149.90, oldPrice: 189.90, img: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'CC09', name: 'Cabo iPhone Turbo PD Baseus 20W', category: 'cabos', price: 69.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1506544777-64cfbe1142df?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'CC10', name: 'Carregador Veicular Duplo USB Fast Charge', category: 'cabos', price: 59.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1581452445582-7f722cb54a2a?q=80&w=600&auto=format&fit=crop', isPromo: false },

    // --- Informática (10) ---
    { id: 'IN01', name: 'Mouse Sem Fio Logitech M170 Preto', category: 'informatica', price: 65.00, oldPrice: 85.00, img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'IN02', name: 'Teclado Mecânico Gamer Redragon Kumara', category: 'informatica', price: 239.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'IN03', name: 'SSD NVMe Kingston 1TB SNV2S', category: 'informatica', price: 459.90, oldPrice: 529.90, img: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'IN04', name: 'Pendrive SanDisk 64GB Cruzer Blade', category: 'informatica', price: 49.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'IN05', name: 'Webcam Full HD 1080p com Microfone', category: 'informatica', price: 149.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1587826359546-f947e4eb1203?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'IN06', name: 'Roteador TP-Link Archer C6 Gigabit Dual Band', category: 'informatica', price: 289.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'IN07', name: 'Mousepad Gamer Extra Grande 90x40cm', category: 'informatica', price: 79.90, oldPrice: 99.90, img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop', isPromo: true },
    { id: 'IN08', name: 'Kit Teclado e Mouse Sem Fio Dell', category: 'informatica', price: 189.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'IN09', name: 'Adaptador USB Wi-Fi TP-Link 300Mbps', category: 'informatica', price: 59.90, oldPrice: null, img: 'https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=600&auto=format&fit=crop', isPromo: false },
    { id: 'IN10', name: 'SSD SATA 3 Husky Gaming 256GB', category: 'informatica', price: 129.90, oldPrice: 159.90, img: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=600&auto=format&fit=crop', isPromo: true },
];

// Utility: Format currency (BRL)
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Utility: Generate WhatsApp Link
function getWhatsappLink(product) {
    const message = `Olá! Quero comprar o produto: ${product.name} (Ref: ${product.id}).`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Global Variables
const productGrid = document.getElementById('productGrid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const currentYearSpan = document.getElementById('currentYear');
const fabWhatsapp = document.getElementById('fabWhatsapp');

// Render Products
function renderProducts(items) {
    productGrid.innerHTML = '';

    if (items.length === 0) {
        productGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    productGrid.classList.remove('hidden');
    emptyState.classList.add('hidden');

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let promoBadge = product.isPromo ? `<span class="product-badge">OFERTA</span>` : '';
        let oldPriceHtml = product.oldPrice ? `<span class="product-price-old">${formatCurrency(product.oldPrice)}</span>` : '';

        // Generate 5 stars for visual rating
        const stars = `
            <div class="product-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        `;

        card.innerHTML = `
            ${promoBadge}
            <div class="product-image-container">
                <img src="${product.img}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title" title="${product.name}">${product.name}</h3>
                ${stars}
                <div class="product-price-container">
                    <span class="product-price">${formatCurrency(product.price)}</span>
                    ${oldPriceHtml}
                </div>
                <a href="${getWhatsappLink(product)}" target="_blank" class="btn-buy">
                    <i class="fa-brands fa-whatsapp"></i> Pedir Agora
                </a>
            </div>
        `;
        
        productGrid.appendChild(card);
    });
}

function getCategoryName(id) {
    const map = {
        'smartphones': 'Smartphones',
        'capinhas': 'Capinhas e Películas',
        'fones': 'Fones de Ouvido',
        'cabos': 'Cabos e Carregadores',
        'informatica': 'Informática'
    };
    return map[id] || id;
}

// Filter Logic
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.filter;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                              product.id.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

// Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Apply
        applyFilters();
    });
});

searchInput.addEventListener('input', applyFilters);

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    applyFilters();
});

// Setup Initial State
document.addEventListener('DOMContentLoaded', () => {
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Set general WhatsApp link for the FAB
    fabWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20estou%20no%20site%20da%20SOS%20Celulares%20e%20preciso%20de%20ajuda.`;
    
    // Initial render
    renderProducts(products);
});
