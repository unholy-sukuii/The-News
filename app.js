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
  constructor(name, image, description, link) {
    name = this.name;
    image = this.image;
    description = this.description;
    link = this.description;
  }
}




class mode {
  constructor(bgcolor, color) {
    bgcolor = this.bgcolor;
    color = this.color;
  }
}

let darkMode = new mode(`rgb(30, 29, 29)`, "#e6e1c5");
let liteMode = new mode("#e6e1c5",`rgb(30, 29, 29)`)