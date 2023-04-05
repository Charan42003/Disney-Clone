//PRELOADER
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".preload").style.display = "none";
})
window.addEventListener('load', () => {
    document.querySelector(".preload1").style.display = "none";
})
//CAROUSEL
let movies = [
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    },
    {
        name: 'falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet 4onsectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 3.PNG'
    },
]

const carousel = document.querySelector(".carousel");
let sliderIndex = 0;
let sliders = [];
for(let i = 0; i < movies.length; i++) {
    populatingCarousel();
}

function populatingCarousel() {
    if(sliderIndex >= movies.length-1) {
        sliderIndex = 0;
    }
    // CREATING DOM ELEMENTS 
    let slider = document.createElement('div');
    let slideContent = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let slideImage = document.createElement('img');

    //APPENDING THE ELEMENTS
    slideContent.appendChild(h1);
    slideContent.appendChild(p);
    slider.appendChild(slideContent);
    slider.appendChild(slideImage);

    // ADDING ATTRIBUTES
    slideImage.setAttribute("src", movies[sliderIndex].image);

    //ADDING CLASS
    slider.className = "slider";
    slideContent.className = "slider_content";
    h1.className = "movie-title";
    p.className = "movie-des";
    
    //ADDING CONTENT
    h1.innerText = movies[sliderIndex].name;
    p.innerText = movies[sliderIndex].des;
    carousel.appendChild(slider)
    sliders.push(slider);
    
    sliderIndex++;
}

let c = 0;
let i = [0, 1, 2, 3, 4];
let v;
setInterval(() => {
    v = i[c];
    sliders[v].style.marginLeft = `calc(-${100 * (sliders.length - 4)}% - ${30 * (sliders.length - 4)}px)`;
    c++;
    if(c == 5) {
        c = 0;
        for(let i = 0; i < movies.length; i++) {
            sliders[i].style = "";
            sliders[i].style.display = "none";
        }
        setTimeout(()=> {
            for(let i = 0; i < movies.length; i++) {
                sliders[i].style.display = "flex";
            }
        }, 100);
    }
}, 3000);

// VIDEO CARDS
const videoCard = document.querySelectorAll('.video_card');

videoCard.forEach(components => {
    components.addEventListener('mouseover', () => {
        let video = components.children[1];
        video.play();
    });
    components.addEventListener('mouseleave', () => {
        let video = components.children[1];
        video.pause();
    });
})


//MENU BAR 
let op = document.querySelector('.menu')
op.addEventListener('click', function() {
    document.querySelector(".nav-links").style.marginLeft = "0";
});
let cl = document.querySelector('.cross')
cl.addEventListener('click', menuClose());
function menuClose() {
    document.querySelector(".nav-links").style.marginLeft = "-100vw";
    document.querySelector(".nav-links").style = "";
}

// //SEARCH OPEN 
// document.querySelector(".resp").addEventListener('click', ()=> {
//     document.querySelector('.search-box').style.display = "block"
// });


// LOGIN OPEN AND CLOSE 

function logopen() {
    document.querySelector(".login").style.display = "flex";
}

function logclose() {
    document.querySelector(".login").style.display = "none";
}