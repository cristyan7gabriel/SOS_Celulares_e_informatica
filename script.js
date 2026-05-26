// Configurações
const WHATSAPP_NUMBER = "5562999999999"; // Placeholder, the user should replace it

// Array of 50 Realistic Products
const products = [
    // --- Smartphones (10) ---
    { id: 'SM01', name: 'iPhone 15 Pro Max 256GB Titânio Natural', category: 'smartphones', price: 7999.00, oldPrice: 8599.00, img: 'https://picsum.photos/seed/produto1/600/600', isPromo: true },
    { id: 'SM02', name: 'iPhone 13 128GB Meia-Noite', category: 'smartphones', price: 3499.00, oldPrice: 3899.00, img: 'https://picsum.photos/seed/produto2/600/600', isPromo: false },
    { id: 'SM03', name: 'Samsung Galaxy S24 Ultra 512GB Titânio Cinza', category: 'smartphones', price: 8299.00, oldPrice: null, img: 'https://picsum.photos/seed/produto3/600/600', isPromo: false }, // Using generic high-end phone image
    { id: 'SM04', name: 'Samsung Galaxy A54 5G 256GB Preto', category: 'smartphones', price: 1799.00, oldPrice: 2199.00, img: 'https://picsum.photos/seed/produto4/600/600', isPromo: true },
    { id: 'SM05', name: 'Xiaomi Redmi Note 13 Pro 5G 256GB', category: 'smartphones', price: 1950.00, oldPrice: null, img: 'https://picsum.photos/seed/produto5/600/600', isPromo: false },
    { id: 'SM06', name: 'Poco X6 Pro 5G 512GB 12GB RAM Preto', category: 'smartphones', price: 2450.00, oldPrice: 2799.00, img: 'https://picsum.photos/seed/produto6/600/600', isPromo: true },
    { id: 'SM07', name: 'Motorola Moto G84 5G 256GB Viva Magenta', category: 'smartphones', price: 1499.00, oldPrice: null, img: 'https://picsum.photos/seed/produto7/600/600', isPromo: false },
    { id: 'SM08', name: 'Motorola Edge 40 Neo 5G 256GB Black Beauty', category: 'smartphones', price: 2199.00, oldPrice: 2499.00, img: 'https://picsum.photos/seed/produto8/600/600', isPromo: false },
    { id: 'SM09', name: 'iPhone 11 64GB Branco (Seminovo)', category: 'smartphones', price: 1699.00, oldPrice: 1899.00, img: 'https://picsum.photos/seed/produto9/600/600', isPromo: true },
    { id: 'SM10', name: 'Realme 11 Pro+ 512GB Bege', category: 'smartphones', price: 2599.00, oldPrice: null, img: 'https://picsum.photos/seed/produto10/600/600', isPromo: false },

    // --- Capinhas e Películas (10) ---
    { id: 'CP01', name: 'Capinha Silicone Aveludada iPhone 15 Pro Max', category: 'capinhas', price: 69.90, oldPrice: null, img: 'https://picsum.photos/seed/produto11/600/600', isPromo: false },
    { id: 'CP02', name: 'Película de Vidro 3D Privacidade iPhone 13', category: 'capinhas', price: 49.90, oldPrice: 69.90, img: 'https://picsum.photos/seed/produto12/600/600', isPromo: true },
    { id: 'CP03', name: 'Capinha Anti-Impacto Transparente Samsung S24', category: 'capinhas', price: 59.90, oldPrice: null, img: 'https://picsum.photos/seed/produto13/600/600', isPromo: false },
    { id: 'CP04', name: 'Película Cerâmica Fosca Gamer Xiaomi Redmi', category: 'capinhas', price: 39.90, oldPrice: null, img: 'https://picsum.photos/seed/produto14/600/600', isPromo: false },
    { id: 'CP05', name: 'Capa MagSafe Transparente iPhone 14', category: 'capinhas', price: 89.90, oldPrice: 119.90, img: 'https://picsum.photos/seed/produto15/600/600', isPromo: true },
    { id: 'CP06', name: 'Kit Proteção (Capa + Película) Motorola G84', category: 'capinhas', price: 85.00, oldPrice: 100.00, img: 'https://picsum.photos/seed/produto16/600/600', isPromo: true },
    { id: 'CP07', name: 'Película Lente da Câmera iPhone 15 Pro', category: 'capinhas', price: 35.00, oldPrice: null, img: 'https://picsum.photos/seed/produto17/600/600', isPromo: false },
    { id: 'CP08', name: 'Capa Carteira de Couro Samsung A54', category: 'capinhas', price: 75.00, oldPrice: null, img: 'https://picsum.photos/seed/produto18/600/600', isPromo: false },
    { id: 'CP09', name: 'Capinha TPU Flexível Poco X6 Pro', category: 'capinhas', price: 45.00, oldPrice: null, img: 'https://picsum.photos/seed/produto19/600/600', isPromo: false },
    { id: 'CP10', name: 'Película Hidrogel Alta Resistência (Qualquer Modelo)', category: 'capinhas', price: 69.90, oldPrice: 89.90, img: 'https://picsum.photos/seed/produto20/600/600', isPromo: true },

    // --- Fones de Ouvido (10) ---
    { id: 'FO01', name: 'AirPods Pro (2ª Geração) Original', category: 'fones', price: 1899.00, oldPrice: 2199.00, img: 'https://picsum.photos/seed/produto21/600/600', isPromo: true },
    { id: 'FO02', name: 'Galaxy Buds 2 Pro Preto', category: 'fones', price: 899.00, oldPrice: 1199.00, img: 'https://picsum.photos/seed/produto22/600/600', isPromo: true },
    { id: 'FO03', name: 'Redmi Buds 4 Active TWS Preto', category: 'fones', price: 149.90, oldPrice: null, img: 'https://picsum.photos/seed/produto23/600/600', isPromo: false },
    { id: 'FO04', name: 'Headset Gamer Redragon Zeus X RGB', category: 'fones', price: 349.90, oldPrice: null, img: 'https://picsum.photos/seed/produto24/600/600', isPromo: false },
    { id: 'FO05', name: 'Fone Bluetooth JBL Tune 520BT', category: 'fones', price: 269.90, oldPrice: 299.90, img: 'https://picsum.photos/seed/produto25/600/600', isPromo: true },
    { id: 'FO06', name: 'Fone com Fio Original Apple Lightning', category: 'fones', price: 189.90, oldPrice: null, img: 'https://picsum.photos/seed/produto26/600/600', isPromo: false },
    { id: 'FO07', name: 'Headset Gamer HyperX Cloud Stinger 2', category: 'fones', price: 289.00, oldPrice: null, img: 'https://picsum.photos/seed/produto27/600/600', isPromo: false },
    { id: 'FO08', name: 'Fone QCY T13 Bluetooth 5.1', category: 'fones', price: 159.90, oldPrice: null, img: 'https://picsum.photos/seed/produto28/600/600', isPromo: false },
    { id: 'FO09', name: 'Fone Tipo C Original Samsung AKG', category: 'fones', price: 129.90, oldPrice: 159.90, img: 'https://picsum.photos/seed/produto29/600/600', isPromo: true },
    { id: 'FO10', name: 'AirPods (3ª Geração) Premium 1:1', category: 'fones', price: 299.90, oldPrice: null, img: 'https://picsum.photos/seed/produto30/600/600', isPromo: false },

    // --- Cabos e Carregadores (10) ---
    { id: 'CC01', name: 'Fonte Carregador Apple 20W USB-C', category: 'cabos', price: 169.90, oldPrice: null, img: 'https://picsum.photos/seed/produto31/600/600', isPromo: false },
    { id: 'CC02', name: 'Cabo iPhone Lightning Homologado 1m', category: 'cabos', price: 59.90, oldPrice: 79.90, img: 'https://picsum.photos/seed/produto32/600/600', isPromo: true },
    { id: 'CC03', name: 'Carregador Samsung Super Fast 25W', category: 'cabos', price: 139.90, oldPrice: null, img: 'https://picsum.photos/seed/produto33/600/600', isPromo: false },
    { id: 'CC04', name: 'Cabo Tipo C Baseus 100W Trançado 2m', category: 'cabos', price: 89.90, oldPrice: null, img: 'https://picsum.photos/seed/produto34/600/600', isPromo: false },
    { id: 'CC05', name: 'Powerbank Pineng 10.000mAh Original', category: 'cabos', price: 129.90, oldPrice: 159.90, img: 'https://picsum.photos/seed/produto35/600/600', isPromo: true },
    { id: 'CC06', name: 'Carregador Turbo Xiaomi 33W', category: 'cabos', price: 119.90, oldPrice: null, img: 'https://picsum.photos/seed/produto36/600/600', isPromo: false },
    { id: 'CC07', name: 'Cabo 3 em 1 (Lightning, Tipo C, Micro USB)', category: 'cabos', price: 49.90, oldPrice: null, img: 'https://picsum.photos/seed/produto37/600/600', isPromo: false },
    { id: 'CC08', name: 'Base Carregador Indução MagSafe', category: 'cabos', price: 149.90, oldPrice: 189.90, img: 'https://picsum.photos/seed/produto38/600/600', isPromo: true },
    { id: 'CC09', name: 'Cabo iPhone Turbo PD Baseus 20W', category: 'cabos', price: 69.90, oldPrice: null, img: 'https://picsum.photos/seed/produto39/600/600', isPromo: false },
    { id: 'CC10', name: 'Carregador Veicular Duplo USB Fast Charge', category: 'cabos', price: 59.90, oldPrice: null, img: 'https://picsum.photos/seed/produto40/600/600', isPromo: false },

    // --- Informática (10) ---
    { id: 'IN01', name: 'Mouse Sem Fio Logitech M170 Preto', category: 'informatica', price: 65.00, oldPrice: 85.00, img: 'https://picsum.photos/seed/produto41/600/600', isPromo: true },
    { id: 'IN02', name: 'Teclado Mecânico Gamer Redragon Kumara', category: 'informatica', price: 239.90, oldPrice: null, img: 'https://picsum.photos/seed/produto42/600/600', isPromo: false },
    { id: 'IN03', name: 'SSD NVMe Kingston 1TB SNV2S', category: 'informatica', price: 459.90, oldPrice: 529.90, img: 'https://picsum.photos/seed/produto43/600/600', isPromo: true },
    { id: 'IN04', name: 'Pendrive SanDisk 64GB Cruzer Blade', category: 'informatica', price: 49.90, oldPrice: null, img: 'https://picsum.photos/seed/produto44/600/600', isPromo: false },
    { id: 'IN05', name: 'Webcam Full HD 1080p com Microfone', category: 'informatica', price: 149.90, oldPrice: null, img: 'https://picsum.photos/seed/produto45/600/600', isPromo: false },
    { id: 'IN06', name: 'Roteador TP-Link Archer C6 Gigabit Dual Band', category: 'informatica', price: 289.90, oldPrice: null, img: 'https://picsum.photos/seed/produto46/600/600', isPromo: false },
    { id: 'IN07', name: 'Mousepad Gamer Extra Grande 90x40cm', category: 'informatica', price: 79.90, oldPrice: 99.90, img: 'https://picsum.photos/seed/produto47/600/600', isPromo: true },
    { id: 'IN08', name: 'Kit Teclado e Mouse Sem Fio Dell', category: 'informatica', price: 189.90, oldPrice: null, img: 'https://picsum.photos/seed/produto48/600/600', isPromo: false },
    { id: 'IN09', name: 'Adaptador USB Wi-Fi TP-Link 300Mbps', category: 'informatica', price: 59.90, oldPrice: null, img: 'https://picsum.photos/seed/produto49/600/600', isPromo: false },
    { id: 'IN10', name: 'SSD SATA 3 Husky Gaming 256GB', category: 'informatica', price: 129.90, oldPrice: 159.90, img: 'https://picsum.photos/seed/produto50/600/600', isPromo: true },
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
