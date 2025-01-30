const popularGamesList = document.querySelector("#popular-games .products__list");

console.log(popularGamesList);

const arrayProducts = [
    {
        title: "GTA V",
        image: "./images/game-1.png",
        // price: null, --- Free Download
        // price: 590.000, --- Default price
        sale: 40,
        price: 590000,
    }
]

function createProductPriceBlock(item) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('item__price-wrapper');

    if (item.sale) {
        const saleWrapper = document.createElement('div');
        saleWrapper.classList.add('item__price--sale-wrapper');

        const sale = document.createElement('div');
        sale.classList.add("item__price--sale");
        const saleAmount = document.createElement('div');
        saleAmount.classList.add("item__price--sale-amount");

        const discountAmount = (item.price * item.sale) / 100;
        sale.textContent = `${item.sale}%`;
        saleAmount.textContent = `Rp ${item.price - discountAmount}`;

        saleWrapper.append(sale, saleAmount);
        wrapper.append(saleWrapper);
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