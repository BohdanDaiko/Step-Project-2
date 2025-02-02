const popularGamesList = document.querySelector("#popular-games .products__list");

console.log(popularGamesList);

const arrayProducts = [
    {
        title: "GTA V",
        image: "./images/game-5.png",
        // price: null, --- Free Download
        // price: 590.000, --- Default price
        sale: 40,
        price: 590000,
        visible: true
    },
    {
        title: "Roblox",
        image: "./images/game-6.png",
        price: null, // Free Download
        visible: true
    },
    {
        title: "NBA2K22",
        image: "./images/game-7.png",
        price: 990000,
        sale: 70,
        visible: true
    },
    {
        title: "Dead by daylight",
        image: "./images/game-8.png",
        price: 429000,
        sale: 50,
        visible: true
    },
    {
        title: "ARK: Survival Evolved",
        image: "./images/game-9.png",
        price: 430000,
        visible: true
    },
    {
        title: "Rocket League",
        image: "./images/game-10.png",
        price: null,
        visible: true
    },
    {
        title: "Forza Horizon 5",
        image: "./images/game-11.png",
        price: 890000,
        sale: 60,
        visible: true
    },
    {
        title: "Cities: Skylines",
        image: "./images/game-12.png",
        price: 590000,
        visible: true
    },
    {
        title: "Minecraft",
        image: "./images/game-1.png",
        price: null,
        visible: false
    },
    {
        title: "Asphalt legends",
        image: "./images/game-2.png",
        price: 700000,
        sale: 30,
        visible: false
    },
    {
        title: "The witcher wild hunt",
        image: "./images/game-3.png",
        price: 700000,
        visible: false
    },
    {
        title: "Surviving Mars",
        image: "./images/game-4.png",
        price: 900000,
        visible: false
    }
]

function createProductPriceBlock(item) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('item__price-wrapper');

    if (item.sale) {
        const saleWrapper = document.createElement('div');
        saleWrapper.classList.add('item__price--sale-wrapper');

        const sale = document.createElement('div');
        const price = document.createElement('div');
        price.classList.add("item__price--sale-amount")


        sale.classList.add("item__price--sale");
        const saleAmount = document.createElement('div');
        saleAmount.classList.add("item__price--old");

        const discountAmount = (item.price * item.sale) / 100;

        price.textContent = `Rp ${item.price - discountAmount}`;

        sale.textContent = `${item.sale}%`;
        saleAmount.textContent = `Rp ${item.price}`;

        saleWrapper.append(sale, saleAmount);
        wrapper.append(price, saleWrapper);
    } else if (item.price === null) {
        const priceFree = document.createElement('div');
        priceFree.classList.add("item__price--free");
        priceFree.textContent = "Free Download";

        wrapper.append(priceFree);
    } else {
        const price = document.createElement('div');
        price.classList.add("item__price--default");
        price.textContent = `Rp ${item.price}`;

        wrapper.append(price);
    }

    return wrapper;
}

console.log(createProductPriceBlock(arrayProducts[0]));

function createProductBlock(item) {
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item');

    const image = document.createElement('img');
    image.classList.add('item__image');
    image.src = item.image;

    const info = document.createElement('div');
    info.classList.add('item__info');

    const title = document.createElement('div');
    title.classList.add('item__title');
    title.textContent = item.title;
    
    const priceWrapper = createProductPriceBlock(item);

    info.append(title, priceWrapper);
    itemWrapper.append(image, info);

    return itemWrapper;
}

function showAllGames() {
    popularGamesList.innerHTML = '';

    addProductsToList(arrayProducts)
}

function addProductsToList(products) {

    products.forEach(item => {

        const block = createProductBlock(item)
    
        popularGamesList.append(block)
    })
}

addProductsToList(arrayProducts.filter(item => item.visible))


const swiper = new Swiper('.swiper', {
    // Optional parameters

    effect: "coverflow",

    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    pagination: {
        el: ".swiper-pagination",
    },

      // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
  });