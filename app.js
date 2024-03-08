/* ================================================= */
/* ===============     Swiper JS here  ============== */
/* ================================================= */

class mode {
  constructor(bgcolor, colour, accent, highlight) {
    this.bgcolor = bgcolor;
    this.colour = colour;
    this.accent = accent;
    this.highlight = highlight;
  }


}

let cards = document.querySelectorAll(".card")
let navbar = document.querySelector('#desktop-nav')
let img = document.querySelectorAll("img");
let h3 = document.querySelectorAll('h3')
let links = document.querySelectorAll('a')
let span = document.querySelectorAll('span')
let smCard = document.querySelectorAll('.card-sm');
let smcardHead = document.querySelector(".list h3");
let paras = document.querySelectorAll('p')
let headings = document.querySelectorAll('.headings')

let darkMode = new mode("rgb(41, 41, 46)", "whitesmoke", `rgb(52, 49, 49)`, `rgb(136, 12, 12)`);
let liteMode = new mode("#e6e1c5", "black", '#e6e1c5')

let darkButton = document.querySelector("#dark");
darkButton.style.cursor = 'pointer';
let liteButton = document.querySelector("#lite")
liteButton.style.cursor = 'pointer';

let isDarkModeEnabled = false;
const enableDark = () => {
  document.querySelector('body').style.backgroundColor = darkMode.bgcolor
  cards.forEach(card => {
    card.style.backgroundColor = darkMode.bgcolor;
    card.style.color = darkMode.colour;
    console.log(darkMode.bgcolor)
  })
  img.forEach(image => {
    image.style.filter = "grayscale(1)";
  })
  navbar.style.backgroundColor = darkMode.bgcolor
  navbar.style.color = darkMode.colour

  h3.forEach(h => {
    h.style.color = darkMode.colour;
  })
  links.forEach(link => {
    link.style.color = darkMode.colour;
  })
  span.forEach(Element => {
    Element.style.color = darkMode.colour;
  })
  document.querySelector('#mainNews').style.color = darkMode.colour;
  document.querySelector("#footer").style.backgroundColor = darkMode.bgcolor;
  dayBar.style.color = darkMode.colour;
  dateBar.style.color = darkMode.colour;
  temp.style.color = darkMode.colour
  timeBar.style.color = darkMode.colour;
  smCard.forEach(card => {
    card.style.backgroundColor = darkMode.accent;
    card.style.color = darkMode.colour;
  })
  smcardHead.style.backgroundColor = darkMode.highlight;
  paras.forEach(p => {
    p.style.color = darkMode.colour;
  })

}

const disableDark = () => {
  document.querySelector('body').style.backgroundColor = '';
  cards.forEach(card => {
    card.style.backgroundColor = liteMode.bgcolor;
    card.style.color = liteMode.colour;
  });
  img.forEach(image => {
    image.style.filter = 'sepia(2';
  });

  navbar.style.backgroundColor = liteMode.bgcolor;
  navbar.style.color = liteMode.colour;

  h3.forEach(h => {
    h.style.color = ' ';
  });
  links.forEach(link => {
    link.style.color = '';
  });

  span.forEach(Element => {
    Element.style.color = '';
  });

  paras.forEach(p => {
    p.style.color = '';
  });

  document.querySelector('#mainNews').style.color = '';
  document.querySelector("#footer").style.backgroundColor = '';

  dayBar.style.color = '';
  dateBar.style.color = '';
  temp.style.color = '';
  timeBar.style.color = '';

  smCard.forEach(card => {
    card.style.backgroundColor = '';
    card.style.color = '';
  });
  smcardHead.style.backgroundColor = '';
  cards.forEach(card => {
    card.style.color = '';
  });
  headings.forEach(function (heading) {
    heading.style.color = liteMode.colour;
  })

};

let mobilenav = document.querySelector('#mobile-nav')
let mobileDark = document.querySelector("#mobileDark")
console.log(mobileDark)
let counter = false;
mobileDark.addEventListener('click',()=>{
  if(counter){
    mobileDark.innerText = "Dark"
    mobilenav.style.backgroundColor = liteMode.bgcolor
    mobilenav.style.color = liteMode.colour
    disableDark()
    counter = false;
  }else{
    mobileDark.innerText = "Lite"
    mobilenav.style.backgroundColor = darkMode.bgcolor;
    mobilenav.style.color = darkMode.colour;
    enableDark()
    counter = true;
  }
});
darkButton.addEventListener('click', () => {
  enableDark();
  isDarkModeEnabled = true;

})

liteButton.addEventListener('click', () => {
  disableDark();
  isDarkModeEnabled = false;
})





/* ================================================= */
/* ===============     Swiper JS here  ============== */
/* ================================================= */
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


/* ================================================= */
/* ===============     Search bar     ============== */
/* ================================================= */


let input = document.querySelector(".top-left input");
let search = document.querySelector("#search");

let count = true;
search.addEventListener("click", () => {
  if (count) {
    gsap.to(input, {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1,
    });
    count = false;
  } else {
    gsap.to(input, {
      width: "0%",
      ease: Expo.easeInOut,
      duration: 1,
    });
    count = true;
  }
});


/* =================================================
   ===============   Date and Time    ============== 
   ================================================= */

//    ACCESSING DOM HERE   // 
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

const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];


dateBar.innerText = `${d.getFullYear()} ${month} ${d.getDate()}`;
dayBar.innerText = `${day}`;


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
console.log(Date)




/* =================================================
   ===============   WEATHER API      ============== 
   ================================================= */

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




/* =================================================
   ===============   DYNAMIC NEWS     ============== 
   ================================================= */


class news {
  constructor(head, des, img, link) {
    this.head = head;
    this.des = des;
    this.img = img;
    this.link = link;
  }
}

// news(head,des,img,link) -- params/args







/* =================================================
   ===============   DYNAMIC NEWS     ============== 
   ================================================= */





const API_KEY = "fb0f24207fc74c02a2b84801b481c744"




let sportNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?q=sports&pageSize=10&apikey=${API_KEY}`
    const response = await fetch(apiUrl);
    let data = await response.json();
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 3)
    return finalData;

  } catch (err) {
    console.error("Error Fetching Data....", err)
    return []
  }
}



let businessNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?q=business&pageSize=6&apikey=${API_KEY}`
    const response = await fetch(apiUrl);
    let data = await response.json();


    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 3)
    return finalData;

  } catch (err) {
    console.error("Error Fetching Data....", err)
    return []
  }
}
// businessNews();

let financeNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?q=finance&pageSize=10&apikey=${API_KEY}`
    const response = await fetch(apiUrl);
    let data = await response.json();
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 3)
    return finalData;

  } catch (err) {
    console.error("Error Fetching Data....", err)
    return []
  }
}

// financeNews();

let earth = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=global-warming&pageSize=10&apikey=${API_KEY}`
    const response = await fetch(apiUrl);
    let data = await response.json();
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 2)
    console.log(finalData, "this is ");
    return finalData;
  } catch (err) {
    console.error("Error Fetching Data....", err)
    return []
  }
}
// earth();

let mainNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=palestine&pageSize=10&apikey=${API_KEY}`
    const response = await fetch(apiUrl);
    let data = await response.json();
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 1)
    console.log(finalData, "this is ");
    return finalData;

  } catch (err) {
    console.error("Error Fetching Data....", err)
    return []
  }
}
// mainNews();

let slideNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?q=politics&pageSize=15&apikey=${API_KEY}`
    const response = await fetch(apiUrl);
    let data = await response.json();
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 7)
    console.log(finalData, "this is ");
    return finalData;
  } catch (err) {
    console.error("Error Fetching Data....", err)
    return []
  }
}
// slideNews();

let trendingNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=trending&pageSize=15&apikey=${API_KEY}`
    const response = await fetch(apiUrl);
    let data = await response.json()
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 9)
    console.log(finalData, "this is ");
    return finalData;

  } catch (err) {
    console.log(err)
  }
}
// trendingNews();

let worldNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=world&pageSize=5&apikey=${API_KEY}`
    const response = await fetch(apiUrl);
    let data = await response.json()
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 3)
    console.log(finalData, "this is ");
    return finalData;

  } catch (err) {
    console.log(err)
  }
}
// worldNews();

let aroundNewsTop = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=hollywood&pageSize=5&apikey=${API_KEY}`;
    const response = await fetch(apiUrl)
    let data = await response.json()
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 1)
    console.log(finalData, "this is ");
    return finalData;
  } catch (err) {
    console.log(err)
  }
}
// aroundNewsTop();

let aroundNewsBottom = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=entertainment&pageSize=12&apikey=${API_KEY}`;
    const response = await fetch(apiUrl)
    let data = await response.json()
    // filtering articles with no urlToImage
    const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
    // limiting the array length 
    const finalData = articlesWithImages.slice(0, 6)
    console.log(finalData, "this is ");
    return finalData;
  } catch (err) {
    console.log(err)
  }
}

// aroundNewsBottom();















//  Dynamically pushing the business section 

let mainNewsClutter = document.querySelector("#mainNews .container ")

const mainNewsBlock = (articles) => {
  mainNewsClutter.innerHTML = "";
  articles.forEach((article, index) => {
    const shortTitle = article.title.length > 35 ? article.title.slice(0, 35) + "..." : article.title;
    const shortDes = article.description.length > 220 ? article.description.slice(0, 220) + "..." : article.description;
    mainNewsClutter.innerHTML = `<div class="text-container"><h1>${shortTitle}</h1>
      <p>
        ${shortDes}
      </p>
    </div>
    <img
      src="${article.urlToImage}"
      alt="" 
    />`
    document.querySelector("#mainNews .container img").addEventListener('click',()=>{
      window.open(article.url,"_blank");
    })

  });

  // Reapply dark mode styles
  isDarkModeEnabled ? enableDark() : disableDark();
};





// Dynamically pushing the Around the world news bottom section

let aroundNewsBottomClutter = document.querySelector("#more-around .container .main .right-container .bottom .flex-container")
console.log(aroundNewsBottomClutter)

const aroundNewsBottomBlock = (articles) => {
  aroundNewsBottomClutter.innerHTML = "";
  articles.forEach((article, index) => {
    const shortTitle = article.title.length > 25 ? article.title.slice(0, 25) + "..." : article.title;
    const shortDes = article.description.length > 50 ? article.description.slice(0, 50) + "..." : article.description;

    const div = document.createElement('div');
    div.classList.add("card");
    div.innerHTML = `
          <img src="${article.urlToImage}">
          <h4>${shortTitle}</h4>
          <span>${article.author}</span>
      `;
    aroundNewsBottomClutter.appendChild(div);

    div.addEventListener('click', () => window.open(article.url, "_blank"));

    // Add an additional class to the third card to hide it
    if (index === 2) {
      div.classList.add("hidden");
      console.log
    }
    if (index === 5) {
      div.classList.add("hidden");
      console.log
    }

  });

  // Reapply dark mode styles
  isDarkModeEnabled ? enableDark() : disableDark();
};


// Dynamically pushing the sports section

let sportsClutter = document.querySelector("#sports-pick .container .flex-container")

const sportsBlock = (articles) => {
  sportsClutter.innerHTML = "";
  articles.forEach((article, index) => {
    const shortTitle = article.title.length > 25 ? article.title.slice(0, 25) + "..." : article.title;
    const shortDes = article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description;

    const div = document.createElement('div');
    div.classList.add("card");
    div.innerHTML = `
          <img src="${article.urlToImage}">
          <h4>${shortTitle}</h4>
          <p>${shortDes}</p>
      `;
    sportsClutter.appendChild(div);

    div.addEventListener('click', () => window.open(article.url, "_blank"));

    // Add an additional class to the third card to hide it
    if (index === 2) {
      div.classList.add("hidden");
      console.log
    }
  });

  // Reapply dark mode styles
  isDarkModeEnabled ? enableDark() : disableDark();
};

//  Dynamically pushing the business section 

let businessClutter = document.querySelector("#business .container .flex-container")

const businessBlock = (articles) => {
  businessClutter.innerHTML = "";
  articles.forEach((article, index) => {
    const shortTitle = article.title.length > 25 ? article.title.slice(0, 25) + "..." : article.title;
    const shortDes = article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description;

    const div = document.createElement('div');
    div.classList.add("card");
    div.innerHTML = `
          <img src="${article.urlToImage}">
          <h4>${shortTitle}</h4>
          <p>${shortDes}</p>
      `;
    businessClutter.appendChild(div);

    div.addEventListener('click', () => window.open(article.url, "_blank"));

    // Add an additional class to the third card to hide it
    if (index === 2) {
      div.classList.add("hidden");
      console.log
    }
  });

  // Reapply dark mode styles
  isDarkModeEnabled ? enableDark() : disableDark();
};

// Dynamically pushing the finance section 

let financeClutter = document.querySelector("#finance .container .flex-container")

const financeBlock = (articles) => {
  financeClutter.innerHTML = "";
  articles.forEach((article, index) => {
    const shortTitle = article.title.length > 25 ? article.title.slice(0, 25) + "..." : article.title;
    const shortDes = article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description;

    const div = document.createElement('div');
    div.classList.add("card");
    div.innerHTML = `
          <img src="${article.urlToImage}">
          <h4>${shortTitle}</h4>
          <p>${shortDes}</p>
      `;
    financeClutter.appendChild(div);

    div.addEventListener('click', () => window.open(article.url, "_blank"));

    // Add an additional class to the third card to hide it
    if (index === 2) {
      div.classList.add("hidden");
      console.log
    }
  });

  // Reapply dark mode styles
  isDarkModeEnabled ? enableDark() : disableDark();
};


















(async () => {
  try {
    let financeArticles = await financeNews()
    let businessArticles = await businessNews()
    let sportsArticles = await sportNews()
    let mainNewsArticles = await mainNews()
    let aroundNewsBottomArticles = await aroundNewsBottom();

    mainNewsBlock(mainNewsArticles)
    aroundNewsBottomBlock(aroundNewsBottomArticles)
    sportsBlock(sportsArticles, "this is the one")
    financeBlock(financeArticles);
    businessBlock(businessArticles);
    // console.log(sportsArticles);
  } catch (err) {
    console.log(err)
  }
})();









