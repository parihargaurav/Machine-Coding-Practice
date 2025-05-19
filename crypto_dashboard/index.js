let data =[];
let cardContainer = document.getElementById("card-container");

document.addEventListener("DOMContentLoaded", () => {

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(response => response.json())
    .then((res)=> {
        console.log(res);

        data = res;
        for (let i = 0; i< data.length; i++ ){
            cardContainer.innerHTML += `<div class="card">
            <div class="image">
                <img class="img" src=${data[i].image} />
            </div>
            <div class="details">
                <div class="row">
                    <span class="name">${data[i].name}</span>
                    <span class="price">${data[i].current_price}</span>
                </div>

                <div class="row">
                    <span class="symbol">${data[i].symbol}</span>
                    <span class="percent">${data[i].price_change_percentage_24h}</span>
                </div>
            </div>`
        }
    });
});