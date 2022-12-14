$("#loader").delay(1000).fadeOut("slow", function(){
  $('.landing').fadeIn("slow");
});

// Scroll Animation
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  $('.scroll').css({
    opacity: function () {
      var elementHeight = $(this).height(),
        opacity = ((elementHeight - scrollTop) / (elementHeight * 0.5));
      return opacity;
    }
  });
});

// Weather API
const weather = document.getElementById("weather");
const city = document.getElementById("location");
const api_key = `46319d2aaad3e98dea92fc2f90542066`;
const tempIcon = document.getElementById("weather-emoji");

function onGeoProper(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main}, ${Math.round(data.main.temp)}°C`;
      let id = data.weather[0].main;
      console.log(id);
      if (id == "Thunderstorm") {
        tempIcon.src = './Assets/Images/thunderstorm.svg'
      } else if (id == "Drizzle") {
        tempIcon.src = './Assets/Images/drizzle.svg'
      } else if (id == "Rain") {
        tempIcon.src = './Assets/Images/rain.svg'
      } else if (id == "Snow") {
        tempIcon.src = './Assets/Images/snow.svg'
      } else if (id == "Clear") {
        tempIcon.src = './Assets/Images/sun.svg'
      } else if (id == "Clouds") {
        tempIcon.src = './Assets/Images/cloud.svg'
      } else {
        tempIcon.src = './Assets/Images/atmosphere.svg'
      }
    });
}

function onGeoError() {
  console.log("No information Found");
  city.innerHTML = 'Oops we are lost!'
  weather.innterHTML = '';
}

navigator.geolocation.getCurrentPosition(onGeoProper, onGeoError);



// Cheer Phrases API

displayPhrases();
var typedPhrases = [];

function displayPhrases() {
  fetch(`https://script.google.com/macros/s/AKfycbwaQJSlmmZJTfCw0jnk9g4uqxRm21NqHGjZ1PJohZz4A2mSHH6vyiGxO7Ozr-rHGQ56JA/exec`)
    .then(response => response.json()
      .then(data => {
        //console.log(data.data),
        data.data.forEach(element => {
          //console.log (element.Phrases),
          typedPhrases.push(element.Phrases)
        });
        var typed = new Typed(".API-text", {
          strings: typedPhrases,
          typeSpeed: 80,
          backSpeed: 50,
          loop: true
        });
      }))
}