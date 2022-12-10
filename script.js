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
const tempIcon = document.getElementById("weather-emoji");

function onGeoProper(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  //console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log (data);
      city.innerHTML = `${data.name},`;
      weather.innerHTML = `${data.weather[0].main}, ${Math.round(data.main.temp)}°C`;
      let id = data.cod;
      console.log(id);
      if(id < 250){
        tempIcon.src = './Assets/Images/cloud.svg'
      } 
      else if(id < 350){
        tempIcon.src = './Assets/Images/cloud.svg'  
      }
      else if(id < 550){
        tempIcon.src = './Assets/Images/rain.svg'  
      }
      else if(id < 650){
        tempIcon.src = './Assets/Images/snow.svg'  
      }
      else if(id < 800){
        tempIcon.src = './Assets/Images/atmosphere.svg'  
      }
      else if(id === 800){
        tempIcon.src = './Assets/Images/cloud.svg'  
      }
      else if(id >800){
        tempIcon.src = './Assets/Images/cloud.svg'  
      }
  });
}

function onGeoError() {
  console.log("No information Found");
  city.innerHTML = 'Oops we are lost!'
  weather.innterHTML = '';
}

 navigator.geolocation.getCurrentPosition(onGeoProper, onGeoError);



 //card stacking

 