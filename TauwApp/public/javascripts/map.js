// (function(){

  var app = {
    init: function () {
      map.area();
    }
  };

  var map = {
    area: function () {
      // declare html elements
      var htmlElements = {
        fullMap: document.querySelector('.full-map'),
        rural : document.getElementById('rural'),
        // ruralInfo : document.getElementById('landelijk-info'),
        industrial : document.getElementById('industrial'),
        // industrialInfo : document.getElementById('industrial-info'),
        urban : document.getElementById('urban'),
        // urbanInfo : document.getElementById('urban-info'),
        // closeRural : document.getElementById('close-rural'),
        // closeIndustrial : document.getElementById('close-industrial'),
        // closeUrban : document.getElementById('close-urban'),
        satelliteSensorRural : document.querySelector('#rural .satellite'),
        droneSensorRural : document.querySelector('#rural .drone'),
        satelliteSensorIndustrial : document.querySelector('#industrial .satellite'),
        droneSensorIndustrial : document.querySelector('#industrial .drone'),
        satelliteSensorUrban : document.querySelector('#urban .satellite'),
        droneSensorUrban : document.querySelector('#urban .drone')
      }

      var handleMapClick = function(e, sector) {
        e.preventDefault();
        var sectorSensorEl = 'satelliteSensor' + sector;
        var sectorDroneEl = 'droneSensor' + sector;

        htmlElements[sectorSensorEl].classList.remove('hide');
        htmlElements[sectorDroneEl].classList.remove('hide');

        setTimeout(function(){ window.location.href = e.target.parentElement.href; }, 700);
      }

      // var createArrowNav = function () {
      //   var buttonL = document.createElement("Button");
      //   var buttonR = document.createElement("Button");
      //
      //   buttonL.addEventListener('click', function (e) {
      //     fullMap.scrollLeft.
      //   })
      //   buttonR.addEventListener('click', function (e) {
      //
      //     fullMap.scrollLeft.
      //   })
      //   htmlElements.fullMap.appendChild(buttonL);
      //   htmlElements.fullMap.appendChild(buttonR);
      //
      // }();

      // click event rural (landelijke gebied)
      htmlElements.rural.addEventListener('click', function(e){
        handleMapClick(e, "Rural");

      });

      // closeRural.addEventListener('click', function(e){
      //   e.preventDefault();
      //   rural.classList.remove('area-active');
      //   ruralInfo.classList.add('hide');
      //   satelliteSensor.classList.add('hide');
      //   droneSensor.classList.add('hide');
      // });

      // click event industrial (industrieel gebied)
      htmlElements.industrial.addEventListener('click', function(e){
        handleMapClick(e, "Industrial");
      });

      // closeIndustrial.addEventListener('click', function(e){
      //   e.preventDefault();
      //   industrial.classList.remove('area-active');
      //   industrialInfo.classList.add('hide');
      // });

      // click event urban (stedelijk gebied)
      htmlElements.urban.addEventListener('click', function(e){
        handleMapClick(e, "Urban");
      });

      // closeUrban.addEventListener('click', function(e){
      //   e.preventDefault();
      //   urban.classList.remove('area-active');
      //   urbanInfo.classList.add('hide');
      // });
    },
  };

  app.init();

// })();
