const products = [
    {
        id: 1,
        name: "Велосипед",
        price: 40000
    },
    {
        id: 2,
        name: "Самокат",
        price: 15000
    },
    {
        id: 3,
        name: "Лыжи",
        price: 20000
    },
    {
        id: 4,
        name: "Сноуборд",
        price: 25000
    }
]
const main = document.querySelector("main")
products.forEach(function(product){
    main.innerHTML += `<article class="item item${product.id}">
    <h5 class="name">${product.name}</h5>
    <p class="price">${product.price}</p>
</article>`
})