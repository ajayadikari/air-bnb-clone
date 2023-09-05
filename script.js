const inputs = document.querySelectorAll('input');
const loc1 = inputs[0].value || 'delhi';
const checkIn1 = inputs[1].value || '2023-09-19';
const checkOut1 = inputs[2].value || '2023-09-21'; 
const guests1 = inputs[3].value || '2'; 

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener('click', async (event) => {
    const queryString = `?loc=${encodeURIComponent(inputs[0].value)}&checkin=${encodeURIComponent(checkIn1)}&checkout=${encodeURIComponent(checkOut1)}&guests=${encodeURIComponent(guests1)}&clicked=${true}`;
    window.location.href = `listings.html${queryString}`;
});
