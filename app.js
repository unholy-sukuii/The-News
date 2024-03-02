// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




// const { Expo } = require("gsap")

let input = document.querySelector(".top-left input");
let search = document.querySelector("#search");

// console.log(input)




let dateBar = document.querySelector("#date");
let timeBar = document.querySelector("#timeBar");
let dayBar = document.querySelector("#day");
let temp = document.querySelector("#temperature")




// Date
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date("2024-02-28");
let month = months[d.getMonth()];
let day = days[d.getDay()];

dateBar.innerText = `${d.getFullYear()} ${month} ${d.getDate()}`;
dayBar.innerText = `${day}`;

// Search bar vanish

let count = true;
search.addEventListener("click", () => {
  if (count) {
    // console.log("works");
    gsap.to(input, {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1,
    });
    count = false;
  } else {
    // console.log("clicked again");
    gsap.to(input, {
      width: "0%",
      ease: Expo.easeInOut,
      duration: 1,
    });
    count = true;
  }
});





// Getting current time and date

function showTime() {

  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  // Setting time for 12 Hrs format
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = `${hour}:${min}:${sec} ${am_pm}`;
  // Displaying the time
  timeBar.innerText = currentTime;
}

setInterval(showTime, 1000);


// Weather API
const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kathmandu";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0cba77dec7msh2503a99c2ef662fp152870jsnc6d1dc629452",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

let getWeather = async (city) => {
  try {
    let reponse = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    let data = await reponse.json();
    // console.log(data)
    temp.innerText = `${data.temp} Degree celsius`


  } catch (err) {
    console.log("error", err)
  }
}

// getWeather('Hetauda');





class news {
  constructor(head,des,des,link){
    this.head = head;
    this.des = des;
    this.img = img;
    this.link = link;
  }
}
let sportsNews = new news("Scientists Discover New Species of Giant Octopus in the Pacific Ocean",)





class mode {
  constructor(bgcolor,colour,accent,highlight){
      this.bgcolor = bgcolor;
      this.colour = colour;
      this.accent = accent;
      this.highlight = highlight;
  }
 
  
}


let darkMode = new mode ("rgb(41, 41, 46)", "whitesmoke",`rgb(52, 49, 49)`,`rgb(136, 12, 12)`);
let liteMode = new mode ("#e6e1c5", "black",'#e6e1c5')


// console.log(darkMode)

let cards = document.querySelectorAll(".card")
let navbar = document.querySelector('#desktop-nav')
let img =  document.querySelectorAll("img");
let h3 = document.querySelectorAll('h3')
let links = document.querySelectorAll('a')
let span = document.querySelectorAll('span')
let smCard = document.querySelectorAll('.card-sm');
let smcardHead = document.querySelector(".list h3");
let paras = document.querySelectorAll('p')

console.log(cards)
const enableDark = () =>{
    document.querySelector('body').style.backgroundColor = darkMode.bgcolor
    cards.forEach(card =>{
    card.style.backgroundColor=darkMode.bgcolor;
    card.style.color = darkMode.colour;
    console.log(darkMode.bgcolor)
    })    
    img.forEach(image =>{
      image.style.filter = "grayscale(1)";
    })    
    navbar.style.backgroundColor = darkMode.bgcolor
    navbar.style.color = darkMode.colour

    h3.forEach(h =>{
      h.style.color = darkMode.colour;
    })
    links.forEach(link =>{
      link.style.color = darkMode.colour;
    })
    span.forEach(Element =>{
      Element.style.color = darkMode.colour;
    })
    document.querySelector('#mainNews').style.color = darkMode.colour;
    document.querySelector("#footer").style.backgroundColor = darkMode.bgcolor;
    dayBar.style.color = darkMode.colour;
    dateBar.style.color = darkMode.colour;
    temp.style.color = darkMode.colour
    timeBar.style.color = darkMode.colour;
    smCard.forEach(card=>{
      card.style.backgroundColor = darkMode.accent;
      card.style.color = darkMode.colour;
    })
    smcardHead.style.backgroundColor = darkMode.highlight;
    paras.forEach(p=>
      {
        p.style.color = darkMode.colour;
      })
}
const enableLite =() =>{
  const disableDark = () => {
    // Reset body background color
    document.querySelector('body').style.backgroundColor = '';

    // Reset card background color and text color
    cards.forEach(card => {
        card.style.backgroundColor = '';
        card.style.color = '';
    });

    // Reset grayscale filter on images
    img.forEach(image => {
        image.style.filter = '';
    });

    // Reset navbar background color and text color
    navbar.style.backgroundColor = '';
    navbar.style.color = '';

    // Reset text color for headings
    h3.forEach(h => {
        h.style.color = " ";
    });

    // Reset text color for links
    links.forEach(link => {
        link.style.color = '';
    });

    // Reset text color for spans
    span.forEach(Element => {
        Element.style.color = '';
    });

    // Reset text color for paragraphs
    paras.forEach(p => {
        p.style.color = '';
    });

    // Reset text color for main news section
    document.querySelector('#mainNews').style.color = '';

    // Reset background color for footer
    document.querySelector("#footer").style.backgroundColor = '';

    // Reset text color for dayBar, dateBar, temperature, and timeBar
    dayBar.style.color = '';
    dateBar.style.color = '';
    temp.style.color = '';
    timeBar.style.color = '';

    // Reset background color and text color for small cards and their headers
    smCard.forEach(card => {
        card.style.backgroundColor = '';
        card.style.color = '';
    });
    smcardHead.style.backgroundColor = '';

    // Reset text color for all elements
    cards.forEach(card => {
        card.style.color = '';
    });
};

}





let dark = document.querySelector("#dark");
dark.style.cursor = 'pointer';
let lite = document.querySelector("#lite")
lite.style.cursor = 'pointer';

dark.addEventListener('click',()=>{
  enableDark();

})

lite.addEventListener('click',()=>{
  enableLite();
})