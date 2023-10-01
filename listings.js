const cards = document.querySelector('.cards')
const queryParams2 = new URLSearchParams(window.location.search);
const spinnerEl = document.createElement('div');

const loc = queryParams2.get('loc');
const checkin = queryParams2.get('checkin');
const checkout = queryParams2.get('checkout');
const guests = queryParams2.get('guests');
const clicked = queryParams2.get('clicked') ? queryParams2.get('clicked') : false;

console.log(checkin, checkout)



document.addEventListener('DOMContentLoaded', () => {
    const lLoc = document.querySelector('#l-loc')
    const check = document.querySelector('#l-check')
    const guestCount = document.querySelector('#l-guest')

    lLoc.value = loc;
    check.value = checkin;
    guestCount.value = guests;
    if (clicked) {
        fetchFunc();
    }
})



async function fetchFunc() {

    spinnerEl.classList.add('spinner');
    const spinner = document.createElement('img');
    spinner.src = 'spinner/Magnify-1s-200px.svg';
    spinnerEl.append(spinner);
    cards.append(spinnerEl);


    try {
        const url = `https://airbnb13.p.rapidapi.com/search-location?location=${loc}&checkin=${checkin}&checkout=${checkout}&adults=${guests}&children=0&infants=0&pets=0&page=1&currency=USD`;


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f73af229c9msh3fcebc768e851fap1d0ef0jsncc1e8161ad67',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };


        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result)
        cards.innerHTML = '';


        populateCards(result.results);




    } catch (error) {
        console.error(error);
    }


}



function populateCards(arr) {
    cards.innerHTML = '';

    arr.forEach(data => {
        cards.append(createListingCard(data));

    })

}


function createListingCard(data) {
    const card = document.createElement('div');
    const favIcon = '<i class="fa-solid fa-heart"></i>';
    const star = '<i class="fa-solid fa-star"></i>'
    const rareFind = data.rareFind ? "<h4 style='color: green'>Rare Find</h4>" : "";
    const remAmenities = data.previewAmenities.length - 3 > 0 ? `<p>${data.previewAmenities.length - 3}</p>` : '';
    let amenities = '';
    for(let i = 0; i<data.previewAmenities.length; i++) amenities += `<p>${data.previewAmenities[i]}</p>`
    amenities += remAmenities;
    card.classList.add('card');
    card.innerHTML = `<div class="cards">
    <div class="card">
        <div class="card-left" style="background-image: url('${data.images[0]}')"></div>
        <div class="card-right">
            <div class="card-right-1 card-blocks">
                <div class="left">
                    <p>Entire Home in ${loc}</p>
                    <h2>${data.city}</h2>
                </div>
                <div class="right">
                    ${favIcon}
                    ${rareFind}
                </div>
            </div>
            <div class="amenities">
                    ${amenities}
                </div>
            <div class="card-right-2 card-blocks">
                <div class="left">
                    <p>${data.persons} guests. Entire Home . ${data.beds} - beds . ${data.bathrooms} - bath . Kitches . Parking</p>
                </div>
            </div>
            <div class="card-right-3 card-blocks">
                <div class="left rating-box">
                    <p>${data.rating}</p>
                    ${star}
                    <p>(${data.reviewsCount})</p>
                </div>
                <div class="right">
                    <p>$${data.price.priceItems[0].amount}/night</p>
                </div>
            </div>
        </div>
    </div>
</div>
`
    card.addEventListener('click', async () => {
        console.log(data)
        const queryString = `?data=${encodeURIComponent(JSON.stringify(data))}&checkIn=${encodeURIComponent(checkin)}&checkOut=${encodeURIComponent(checkout)}&working=${true}`
        window.location.href = `product-page.html${queryString}`
    })

    return card;
}
