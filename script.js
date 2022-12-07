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
function weatherBalloon(cityID) {
    var key = `46319d2aaad3e98dea92fc2f90542066`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=`+cityID+`&appid=`+key)  
    .then(response=>response.json()
    .then(data => {
      console.log(data);
    }));
  }

  window.onload = function() {
    weatherBalloon(6167865);
  }
