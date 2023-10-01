const date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const inputs = document.querySelectorAll('input');
const loc1 = inputs[0].value || 'delhi';
const checkIn1 = inputs[1].value || '2023-11-28';
const checkOut1 = inputs[2].value || '2023-11-29';

console.log(checkIn1, checkOut1);
const guests1 = inputs[3].value || '2'; 


const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener('click', async (event) => {
    if(checkIn1 === ''|| checkOut1 === ''|| loc1 === '') {
        alert('need location, check in and check out dates. add guests optional')
    }
    else{
        const queryString = `?loc=${encodeURIComponent(inputs[0].value)}&checkin=${encodeURIComponent(checkIn1)}&checkout=${encodeURIComponent(checkOut1)}&guests=${encodeURIComponent(guests1)}&clicked=${true}`;
        window.location.href = `listings.html${queryString}`;
    }
});
