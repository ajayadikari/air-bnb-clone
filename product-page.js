const product = document.querySelector('.product')
const queryParams = new URLSearchParams(window.location.search)
const data = JSON.parse(queryParams.get('data'));
const checkIn = queryParams.get('checkIn')
const checkOut = queryParams.get('checkOut')
const working = queryParams.get('working')
document.addEventListener('DOMContentLoaded', () => {
    console.log(working)
    console.log(data)
    product.append(createPage());
})


function amentitiesFunc() {
    let amenities = '';
    for (let i = 0; i < 5; i++) {
        if (i > data.previewAmenities.length - 1) break;
        amenities += `<p>${data.previewAmenities[i]}</p>` + ' . '
    }

    return amenities;

}

function amentitiesBut() {
    let c = data.previewAmenities.length - 5;
    if (data.previewAmenities.length > 5) return `<button>Show all ${c} amenities</button>`
}

function superHostProfile() {
    if (!data.isSuperhost) return;
    // const profile = document.createElement('div');
    // profile.classList.add('box2');
    return `
    
    <div class="box2">
    <i class="fa-solid fa-star"></i> ${data.rating} . ${data.reviewsCount} review . ${data.isSuperhost ? ' Super Host .' : ''} ${data.address}
            </div>
            <h3 >Host Name is a Super Host</h3>
            <p >Response rate : 100%</p>
            <p >Response time : less than 30 min</p>
            <button>Contact Host</button>
        </div>
    `
    return profile;

}


function directionsBtn(){
    const btn = document.createElement('button');
    btn.classList.add('directionBtn')
    btn.textContent = 'Get Directions'
    btn.addEventListener('click', ()=>{
        openDirections()
    })
    return btn;
}

function openDirections() {
    // Open Google Maps directions in a new tab
    const url = `https://www.google.com/maps/dir//${data.lat},${data.lng}`;
    window.open(url, "_blank");
}


function createPage() {
    const page = document.createElement('div');
    page.innerHTML = `
    <div class="first">
        <div class="upper">
            <div class="left">
                <h1>${data.name}</h1>
                <div class="box1">
                    <div class="left">
                        <div class="box2">
                            <i class="fa-solid fa-star"></i> ${data.rating} . ${data.reviewsCount} .${data.isSuperhost ? ' Super Host .' : ''} ${data.address}
                        </div>
                    </div>
                    <div class="right">
                        <div class="box2">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> share
                            <i class="fa-solid fa-heart"></i> save
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lower">
            <div class="pic-cont">
                <img src=${data.images[0]}
                    alt="">
                <div class="mini-pic-cont">
                    <img src="${data.images[1]}">
                    <img src="${data.images[2]}">
                    <img src="${data.images[3]}">
                    <img src="${data.images[4]}">

                </div>
            </div>
        </div>
    </div>

    <div class="second">
        <div class="left">
            <div class="up">
                <div class="obj1">
                    <h3>Entire rental unit hosted by "No host name"</h3>
                    <div class="box2">${data.persons} guest . ${data.bedrooms} bedroom . ${data.beds} bed . ${data.bathrooms} bath</div>
                </div>
                <div class="obj2">
                    <img class="profile-pic"
                        src="${data.hostThumbnail}"
                        alt="">
                    <img class="badge" src="images/product-page-assests/Airbnb Superhost Badge.png" alt="">
                </div>
            </div>
            <hr>
            <div class="mid">
                <div class="mid-row">
                    <i class="fa-solid fa-house"></i>
                    <div class="div">
                        <h4>Entire Home</h4>
                        <p>You'll have apartment to yourself</p>
                    </div>
                </div>
                <div class="mid-row">
                    <i class="fa-solid fa-hand-sparkles"></i>
                    <div>
                        <h4>Enhanced clean</h4>
                        <p>This Host committed to Airbnb's 5-step enhanced cleaning process. <a href="#">Show more.</a>
                        </p>
                    </div>
                </div>
                <div class="mid-row">
                    <i class="fa-solid fa-door-closed"></i>
                    <div>
                        <h4>Self check-in</h4>
                        <p>Check yourself in with the keypad.</p>
                    </div>
                </div>
                <div class="mid-row">
                    <i class="fa-solid fa-calendar-days"></i>
                    <h4>Free cancellation before 5 Days of booking</h4>
                </div>
            </div>
            <hr>
            <div class="bot">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque id illo eos mollitia quod vel
                beatae tempora recusandae minima provident qui tempore delectus error enim quidem odio explicabo
                voluptatem eaque porro, tenetur excepturi magnam blanditiis. Quo aut nostrum dicta, ea blanditiis illum
                ipsum numquam culpa dolores unde. Quod, blanditiis velit.
            </div>
            <hr>

        </div>
        <div class="right">
            <div class="first row" style="margin-bottom: 10px;">
                <h3>${data.price.priceItems[0].title}</h3>
                <div>
                    <i class="fa-solid fa-star"></i> ${data.rating} . ${data.reviewsCount} reviews
                </div>
            </div>
            <div class="second">
                <div class="info-box">
                    <div class="">
                        <h5>CHECK-IN</h5>
                        <P>${checkIn}</P>
                    </div>
                    <div class="">
                        <h5>CHECK-OUT</h5>
                        <P>${checkOut}</P>
                    </div>
                </div>
                <div class="dropDown">
                    <label for="drop-down"></label>
                    <select name="drop-down" id="">
                        <option value="dummy1">dummy1</option>
                        <option value="dummy2">dummy2</option>
                    </select>
                </div>
                <button>Reserve</button>
                <p>You Won't Be Charged Yet</p>
            </div>
            <div class="third third-lower">
                <div class="row">
                    <p>${data.price.priceItems.length > 0 ? data.price.priceItems[0].title : 'no title'}</p>
                    <p>${data.price.priceItems.length > 0 ? data.price.priceItems[0].amount + '$' : '0$'}</p>
                </div>
                <div class="row">
                    <p>Weekly discount </p>
                    <p>$0</p>
                </div>
                <div class="row">
                    <p>Cleaning fee</p>
                    <p>$0</p>
                </div>
                <div class="row">
                    <p>${data.price.priceItems.length > 1 ? data.price.priceItems[1].title : 'no title'}</p>
                    <p>${data.price.priceItems.length > 1 ? data.price.priceItems[1].amount + '$' : '0$'}</p>
                </div>
                <div class="row">
                    <p>${data.price.priceItems.length > 2 ? data.price.priceItems[2].title : 'no title'}</p>
                    <p>${data.price.priceItems.length > 2 ? data.price.priceItems[2].amount : '0$'}</p>
                </div>
                <hr>
                <div class="row">
                    <p>Total</p>
                    <p>${data.price.total}$</p>
                </div>
            </div>
        </div>
    </div>

    <div class="third">
        <h3>Where you'll sleep</h3>
        <div class="card">
            <img src="${data.images[1]}"
                alt="">
            <p style="font-weight: 600;">Bedroom</p>
            <p>1 queen bed</p>
            <hr>
        </div>
    </div>

    <div class="fourth">
        <h3>What this place offers</h3>
        <div class="words">
            ${amentitiesFunc()}
        </div>
        ${amentitiesBut()}
        
    </div>

    <hr style="width: 90%; margin: auto;">
    <div class="fifth">
        <div class="board">
            <i class="fa-solid fa-star"></i>
            <p>${data.rating} . </p>
            <p>${data.reviewsCount} reviews</p>
        </div>
        <div class="progress-bars">
            <div class="bar">
                <label for="">Cleanliness</label>
                <div class="actual-bar">
                    <div class="outer">
                        <div class="inner"></div>
                    </div>
                    <p>4.0</p>
                </div>
            </div>
            <div class="bar">
                <label for="">Accuracy</label>
                <div class="actual-bar">
                    <div class="outer">
                        <div class="inner"></div>
                    </div>
                    <p>4.0</p>
                </div>
            </div>
            <div class="bar">
                <label for="">Communication</label>
                <div class="actual-bar">
                    <div class="outer">
                        <div class="inner"></div>
                    </div>
                    <p>4.0</p>
                </div>
            </div>
            <div class="bar">
                <label for="">Location</label>
                <div class="actual-bar">
                    <div class="outer">
                        <div class="inner"></div>
                    </div>
                    <p>4.0</p>
                </div>
            </div>
            <div class="bar">
                <label for="">Check-in</label>
                <div class="actual-bar">
                    <div class="outer">
                        <div class="inner"></div>
                    </div>
                    <p>4.0</p>
                </div>
            </div>
            <div class="bar">
                <label for="">Value</label>
                <div class="actual-bar">
                    <div class="outer">
                        <div class="inner"></div>
                    </div>
                    <p>4.0</p>
                </div>
            </div>
        </div>
        <div class="review-box">
            <div class="user-profile">
                <div class="user-details">
                    <img src="${data.images[0]}">
                    <div class="details-box">
                        <div class="user-name">jose</div>
                        <div class="com-data">12-12-2023</div>
                    </div>
                </div>
                <p>Comments are not provided by this api</p>
            </div>

            <div class="user-profile">
                <div class="user-details">
                    <img src="${data.images[0]}">
                    <div class="details-box">
                        <div class="user-name">jose</div>
                        <div class="com-data">12-12-2023</div>
                    </div>
                </div>
                <p>Comments are not provided by this api</p>
            </div>

            <div class="user-profile">
                <div class="user-details">
                    <img src="${data.images[0]}">
                    <div class="details-box">
                        <div class="user-name">jose</div>
                        <div class="com-data">12-12-2023</div>
                    </div>
                </div>
                <p>Comments are not provided by this api</p>
            </div>
            <div class="user-profile">
                <div class="user-details">
                    <img src="${data.images[0]}">
                    <div class="details-box">
                        <div class="user-name">jose</div>
                        <div class="com-data">12-12-2023</div>
                    </div>
                </div>
                <p>Comments are not provided by this api</p>
            </div>

            <div class="user-profile">
                <div class="user-details">
                    <img src="${data.images[0]}" >
                    <div class="details-box">
                        <div class="user-name">jose</div>
                        <div class="com-data">12-12-2023</div>
                    </div>
                </div>
                <p>Comments are not provided by this api</p>
            </div>

            <div class="user-profile">
                <div class="user-details">
                    <img src="${data.images[0]}" >
                    <div class="details-box">
                        <div class="user-name">jose</div>
                        <div class="com-data">12-12-2023</div>
                    </div>
                </div>
                <p>Comments are not provided by this api</p>
            </div>

            <button>Show all 37 reviews</button>


        </div>
    </div>

    <div class="sixth">

    </div>

    <hr style="width: 90%; margin: auto;">

    <div class="seventh">
        <div class="host-profile-2">
            <div class="obj2">
                <img class="host-profile"
                    src="${data.hostThumbnail}"
                    alt="">
                <img class="profile-badge" src="images/product-page-assests/Airbnb Superhost Badge.png" alt="">
            </div>
            <div class="details-box">
                <div class="user-name">Hosted By Host Name</div>
                <div class="com-data">12-12-2023</div>
            </div>
            
        </div>
        ${superHostProfile()}
    </div>

    <hr style="width: 90%; margin: auto;">

    
    `
    page.appendChild(directionsBtn());
    page.append(footerCreater())
    return page;
}

function footerCreater(){
    const footer = document.createElement('footer')
    footer.innerHTML = `
    <p >Made By Ajay Adikari</p>
    `
    return footer
}