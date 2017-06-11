(function(){

  var app = {
    init: function () {
      map.area();
    }
  };

  var map = {
    area: function () {
      // declare html elements
      var rural = document.getElementById('landelijk');
      var ruralInfo = document.getElementById('landelijk-info');
      var industrial = document.getElementById('industrial');
      var industrialInfo = document.getElementById('industrial-info');
      var urban = document.getElementById('urban');
      var urbanInfo = document.getElementById('urban-info');
      var closeRural = document.getElementById('close-rural');
      var closeIndustrial = document.getElementById('close-industrial');
      var closeUrban = document.getElementById('close-urban');

      var satelliteSensor = document.getElementById('satellite');
      var droneSensor = document.getElementById('drone');


      // click event rural (landelijke gebied)
      rural.addEventListener('click', function(e){
        e.preventDefault();
        rural.classList.add('area-active');
        ruralInfo.classList.remove('hide');
        satelliteSensor.classList.remove('hide');
        droneSensor.classList.remove('hide');
      });

      closeRural.addEventListener('click', function(e){
        e.preventDefault();
        rural.classList.remove('area-active');
        ruralInfo.classList.add('hide');
        satelliteSensor.classList.add('hide');
        droneSensor.classList.add('hide');
      });

      // click event industrial (industrieel gebied)
      industrial.addEventListener('click', function(e){
        e.preventDefault();
        industrial.classList.toggle('area-active');
        industrialInfo.classList.toggle('hide');
      });

      closeIndustrial.addEventListener('click', function(e){
        e.preventDefault();
        industrial.classList.remove('area-active');
        industrialInfo.classList.add('hide');
      });

      // click event urban (stedelijk gebied)
      urban.addEventListener('click', function(e){
        e.preventDefault();
        urban.classList.toggle('area-active');
        urbanInfo.classList.toggle('hide');
      });

      closeUrban.addEventListener('click', function(e){
        e.preventDefault();
        urban.classList.remove('area-active');
        urbanInfo.classList.add('hide');
      });
    },
  };

  app.init();

})();
