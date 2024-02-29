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

getWeather('Hetauda');










// NEWS API

const API_KEY = "fb0f24207fc74c02a2b84801b481c744"
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apikey=${API_KEY}`;

let slides = document.querySelector('.swiper-wrapper')


let getNews = async () => {
  try {

    let reply = await fetch(`https://newsapi.org/v2/everything?q=world&pageSize=9&apikey=${API_KEY}`);
    let data = await reply.json()
    // console.log(data.articles)
    // console.log(data)
    let articles = data.articles
    // console.log(articles.length)
    return articles;

  } catch (err) {
    console.log(err)
  }

}

let newsquery = async () => {
  try {
    const apiURL = `https://newsapi.org/v2/everything?q=palestine&pageSize=4&apikey=${API_KEY}`
    const response = await fetch(apiURL);
    let data = await response.json();
    // console.log("dynamic list worked")
    let articles = data.articles
    return articles;

  } catch (err) {
    console.log("Error Fetching Data....", err)
    return []
  }


}

let getBusiness = async () => {
  try {
    const apiURL = `https://newsapi.org/v2/everything?q=business&pageSize=3&apikey=${API_KEY}`
    const response = await fetch(apiURL);
    let data = await response.json();
    console.log("dynamic list worked")
    let articles = data.articles
    return articles;

  } catch (err) {
    console.log("Error Fetching Data....", err)
    return []
  }
}


let getSports = async () => {
  try {
    const apiURL = `https://newsapi.org/v2/everything?q=sports&pageSize=3&apikey=${API_KEY}`
    const response = await fetch(apiURL);
    let data = await response.json();
    console.log("dynamic list worked")
    let articles = data.articles
    return articles;

  } catch (err) {
    console.log("Error Fetching Data....", err)
    return []
  }
}


// newsquery();


// dynamic slides

let dynamicSlide = async (articles) => {
  slides.innerHTML = ""
  articles.forEach((article) => {
    const slideContainer = document.createElement('div')
    slideContainer.classList.add('swiper-slide')
    const slideImage = document.createElement('div')
    slideImage.classList.add('slides')
    const textArea = document.createElement("div")
    textArea.classList.add('text-section')
    const head = document.createElement('h2')
    const desc = document.createElement('p')
    const link = document.createElement('a')
    textArea.appendChild(head)
    textArea.appendChild(desc)
    textArea.appendChild(link)
    slideImage.appendChild(textArea)
    slideContainer.appendChild(slideImage)
    slides.appendChild(slideContainer)

    let shortTitle = article.title.length > 25 ? article.title.slice(0, 30) + "..." : article.title;
    let shortDes = article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description
    let image = article.urlToImage;

    slideImage.style.backgroundImage = `url("${article.urlToImage}")`;
    head.innerText = shortTitle;
    desc.innerText = shortDes;
    link.innerText = "Read More..."




  });


}



// DYNAMIC LIST

let list = document.querySelector('.list')

let dynamicList = async (articles) => {
  list.innerHTML = ""
  articles.forEach((article) => {

    let card = document.createElement('div')
    card.classList.add('card-sm')
    let img = document.createElement('img')
    let text = document.createElement('div')
    text.classList.add('list-text')
    let headline = document.createElement('h4')
    let desc = document.createElement("p")

    let shortTitle = article.title.length > 10 ? article.title.slice(0, 15) + "..." : article.title;
    let shortDes = article.description.length > 50 ? article.description.slice(0, 50) + "..." : article.description

    img.src = article.urlToImage;
    headline.textContent = shortTitle;
    desc.textContent = shortDes;
    text.appendChild(headline)
    text.appendChild(desc)
    card.appendChild(img);
    card.appendChild(text)
    list.append(card)



  })
  // head.innerText="Trending Now"
  // let head = document.createElement('h3')
  // list.appendChild(head)

}



// DYNAMIC MAIN NEWS

let mainNews = document.querySelector("#mainNews")


let dynamicMain = async (articles) => {
  mainNews.innerHTML = "";
  mainNews.innerHTML = ` <div class="container">
  <div class="text-container">
    <h1>${articles[1].title}</h1>
    <p>
    ${articles[1].description}
    </p>
  </div>
  <img
    src="${articles[1].urlToImage}"
    alt=""
  />
</div>`


}







let business = document.querySelector("#editors-pick .container .flex-container")
// console.log(business)  

let businessSection = async (articles) => {
  business.innerHTML = "";
  articles.forEach((article) => {

    let shortTitle = article.title.length > 10 ? article.title.slice(0, 15) + "..." : article.title
    let shortDes = article.description.length > 25 ? article.description.slice(0, 25) + "..." : article.description;
    let card = document.createElement('div')
    card.classList.add("card")
    let image = document.createElement('img')
    image.src = article.urlToImage;
    let heading = document.createElement('h4')
    let subtext = document.createElement('p')
    subtext.innerText = shortDes
    heading.innerText = shortTitle
    card.appendChild(image)
    card.appendChild(heading)
    card.appendChild(subtext)
    business.appendChild(card)
  
  })
  console.log("worked")
}

let sports = document.querySelector("#sports-pick")

let sportSection = async(articles) =>{
  sportSection.innerHTML = ""
  articles.forEach((article) =>{
    let shortTitle = article.title.length > 10 ? article.title.slice(0, 15) + "..." : article.title
    let shortDes = article.description.length > 25 ? article.description.slice(0, 25) + "..." : article.description;
    let card = document.createElement('div')
    card.classList.add("card")
    let image = document.createElement('img')
    image.src = article.urlToImage;
    let heading = document.createElement('h4')
    let subtext = document.createElement('p')
    subtext.innerText = shortDes
    heading.innerText = shortTitle
    card.appendChild(image)
    card.appendChild(heading)
    card.appendChild(subtext)
    business.appendChild(card)
  })
}














// (async () => {
//   try {
//     let articles = await getNews()
//     let articlesTwo = await newsquery()
//     let businessNews = await getBusiness()
//     let sportsNews = await getSports()
//     console.log(businessNews)
//     dynamicSlide(articles)
//     dynamicList(articlesTwo)
//     dynamicMain(articlesTwo);
//     businessSection(businessNews)
//     sportSection(sportsNews)
//   } catch (err) {
//     console.error("error fetching data...", err)
//   }
// }
// )();





