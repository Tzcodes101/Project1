
  // Beach
  var beachButton = document.querySelector('#playBeach');
  var beachSound = document.querySelector('#beachSound');

  beachButton.addEventListener('click', function () {
    if (beachSound.paused) {
      beachSound.play();
      beachButton.innerHTML = 'Pause';
    } else {
      beachSound.pause();
      beachButton.innerHTML = 'Beach';
    }
  })

  //Rain
  var rainButton = document.querySelector('#playRain');
  var rainSound = document.querySelector('#rainSound');

  rainButton.addEventListener('click', function () {
    if (rainSound.paused) {
      rainSound.play();
      rainButton.innerHTML = 'Pause';
    } else {
      rainSound.pause();
      rainButton.innerHTML = 'Rain';
    }
  })