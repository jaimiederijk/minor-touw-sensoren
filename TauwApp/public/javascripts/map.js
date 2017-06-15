// (function(){

  var app = {
    init: function () {
      map.area();
    }
  };

  var map = {
    area: function () {
      // declare html elements
      var init = function () {
        interaction.createEventListeners();
        interaction.createArrowNav();
      };

      var htmlElements = {
        fullMap: document.querySelector('.full-map'),
        allSections: document.querySelectorAll('.full-map > a'),
        rural : document.getElementById('rural'),

        industrial : document.getElementById('industrial'),

        urban : document.getElementById('urban'),

        // satelliteSensorRural : document.querySelector('#rural .satellite'),
        // droneSensorRural : document.querySelector('#rural .drone'),
        // satelliteSensorIndustrial : document.querySelector('#industrial .satellite'),
        // droneSensorIndustrial : document.querySelector('#industrial .drone'),
        // satelliteSensorUrban : document.querySelector('#urban .satellite'),
        // droneSensorUrban : document.querySelector('#urban .drone')
      }
      var mapVariables = {
        selectedSector : 0,
        buttonL : document.createElement("Button"),
        buttonR : document.createElement("Button")
      }

      var eventHandlers = {
        handleMapClick : function(e, sector) {
          e.preventDefault();
          // var sectorSensorEl = 'satelliteSensor' + sector;
          // var sectorDroneEl = 'droneSensor' + sector;
          //
          // htmlElements[sectorSensorEl].classList.remove('hide');
          // htmlElements[sectorDroneEl].classList.remove('hide');

          setTimeout(function(){ window.location.href = e.target.parentElement.href; }, 700);
        },
        handleArrowClick : function () {
          var allSectors = htmlElements.allSections;
          mapVariables.buttonL.classList.remove('hide');
          mapVariables.buttonR.classList.remove('hide');
          if (mapVariables.selectedSector==0) {
            mapVariables.buttonL.classList.add('hide');
          }
          if (mapVariables.selectedSector==allSectors.length-1) {
            mapVariables.buttonR.classList.add('hide');
          }
          for (var i = 0; i < allSectors.length; i++) {
            allSectors[i].classList.remove('selectedSector');
          }
          var totalWidth = htmlElements.fullMap.scrollWidth;
          var viewWidth = htmlElements.fullMap.clientWidth;
          var widthLeft = 0;
          var itemWidth = allSectors[mapVariables.selectedSector].clientWidth;

          allSectors[mapVariables.selectedSector].classList.add('selectedSector');
          for (var i = 0; i < allSectors.length; i++) {
            if (i < mapVariables.selectedSector) {
              widthLeft += allSectors[i].clientWidth;
            }
          }
          var margin = (viewWidth - itemWidth )/2;
          for (var i = 0; i < allSectors.length; i++) {
            if (widthLeft != 0) {
              allSectors[i].style.left = "-" + (widthLeft - margin)+"px";
            } else {
              allSectors[i].style.left = 0;
            }

          }

        }
      }
      var interaction = {
        createArrowNav : function () {
          htmlElements.fullMap.classList.add('removedScroll');

          eventHandlers.handleArrowClick();
          mapVariables.buttonL.addEventListener('click', function (e) {
            mapVariables.selectedSector --;
            eventHandlers.handleArrowClick();
          })
          mapVariables.buttonR.addEventListener('click', function (e) {
            mapVariables.selectedSector ++;
            eventHandlers.handleArrowClick();
          })
          htmlElements.fullMap.appendChild(mapVariables.buttonL);
          htmlElements.fullMap.appendChild(mapVariables.buttonR);

        },
        createEventListeners : function () {
          for (var i = 0; i < htmlElements.allSections.length; i++) {
            htmlElements.allSections[i].addEventListener('click', function (e) {
              eventHandlers.handleMapClick(e, i);
            })
          }
        }
      }
      init();
    }
  };

  app.init();

// })();
