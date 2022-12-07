// Scroll Animation
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.scroll').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / (elementHeight*0.5));
            return opacity;
        }
    });
});


// Weather API

const weather = document.getElementById("weather");
const city = document.getElementById("location");
const api_key = `46319d2aaad3e98dea92fc2f90542066`;



// function weatherCaller(long, lat) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?id=`+cityID+`&appid=`+key)  
//     .then(response=>response.json()
//     .then(data => {
//       console.log(data);
//       console.log(data.weather[0].main);
//       console.log(data.name);
//     }));
//   }

//   window.onload = function() {
//     weatherCaller(6167865);
//   }

  function onGeoProper(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main}, ${Math.round(data.main.temp)}°C`;
    });
}

function onGeoError() {
  console.log("No information Found");
  city.innerHTML = 'Finding the location...'
  weather.innterHTML = '';
}

 navigator.geolocation.getCurrentPosition(onGeoProper, onGeoError);
