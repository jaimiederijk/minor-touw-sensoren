(function(){

  var app = {
    init: function () {
      map.area();
    }
  };

  var map = {
    area: function () {
      // declare html elements
      var init = function () {
        // interaction.createEventListeners();
        // var mapWidth = htmlElements.fullMap.clientWidth;
        // if (mapWidth < 680) {
        //     interaction.createArrowNav();
        //
        // } else {
        //   //1038 450   715 310px  verschil 328 140 = 0.42682927
        //   for (var i = 0; i < htmlElements.allSvg.length; i++) {
        //     htmlElements.allSvg[i].style.height = mapWidth * 0.43 + "px";
        //     //htmlElements.allSvg[i].style.width = "auto";
        //   }
        // }
        animate.stedlijk();
        animate.industrie();
        animate.landelijk();
        animate.clouds();
      };

      var htmlElements = {
        fullMap: document.querySelector('.full-map'),
        allSections: document.querySelectorAll('.full-map > a'),
        allSvg: document.querySelectorAll('.full-map > a svg')
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

      var animate = {
        industrie : function () {
          var industriewater = document.querySelector("#industrie_water");
          var smokestack = document.querySelectorAll(".smokestack");
          var smokestack2 = document.querySelectorAll(".smokestack2");
          var smoke = document.querySelectorAll(".smoke");
          var smoke2 = document.querySelectorAll(".smoke2");
          var names = ["a","b","c","d","e","f","g","h","i","j","k","m","n"];

          var tlStack1 = new TimelineMax({repeat:-1 })
          var tlStack2 = new TimelineMax({repeat:-1 , delay:1})
          var tlIndustrie = new TimelineMax({repeat:-1 })

          tlIndustrie.to(industriewater,1,{scale:1.1,x:-1})
          tlIndustrie.to(industriewater,1,{scale:1, x:0})

          tlStack1.to(smokestack,1,{scale:1, y:10},"first")
          tlStack1.to(smokestack,1,{scale:1, y:0},"2nd")
          tlStack1.to(smoke,2,{scale:1, y:-20,x:10, opacity:0},"first")

          tlStack2.to(smokestack2,1,{scale:1, y:10},"first")
          tlStack2.to(smokestack2,1,{scale:1, y:0},"2nd")
          tlStack2.to(smoke2,2,{scale:1, y:-20,x:10, opacity:0},"first")
          // tlStack.to(smoke2,1,{scale:1, y:0},"2nd")

        },
        landelijk : function () {
          var boom = document.querySelectorAll(".landelijk_boom");

          var tlLandelijk = new TimelineMax({repeat:-1 })

          tlLandelijk.to(boom[0],2,{rotation:10 , transformOrigin:'50% 100%'}, "start")
          tlLandelijk.to(boom[0],2,{rotation:0, transformOrigin:'50% 100%'}, "return")
          tlLandelijk.to(boom[1],1,{rotation:6 , transformOrigin:'50% 100%'}, "start+=0.5")
          tlLandelijk.to(boom[1],3,{rotation:0, transformOrigin:'50% 100%'}, "return+=0.5")
          tlLandelijk.to(boom[2],2,{rotation:13 , transformOrigin:'50% 100%'}, "start")
          tlLandelijk.to(boom[2],2,{rotation:0, transformOrigin:'50% 100%'}, "return")
          tlLandelijk.to(boom[3],2,{rotation:7 , transformOrigin:'50% 100%'}, "start+=1")
          tlLandelijk.to(boom[3],2,{rotation:0, transformOrigin:'50% 100%'}, "return+=1")
          tlLandelijk.to(boom[4],2,{rotation:7 , transformOrigin:'50% 100%'}, "start-=0.5")
          tlLandelijk.to(boom[4],2,{rotation:0, transformOrigin:'50% 100%'}, "return-=0.5")
          tlLandelijk.to(boom[5],2,{rotation:12 , transformOrigin:'50% 100%'}, "start+=0.5")
          tlLandelijk.to(boom[5],2,{rotation:0, transformOrigin:'50% 100%'}, "return+=0.5")
        },
        stedlijk : function () {
          var flatramen = document.querySelectorAll(".stedelijk_flat g > rect");

          var tlStedlijk = new TimelineMax({repeat:-1 })

          tlStedlijk.to(flatramen[0],1,{fill:"#ffff00" }, "start")
          tlStedlijk.to(flatramen[0],1,{fill: "#EDEDED"}, "return")
          tlStedlijk.to(flatramen[2],1,{fill:"#ff9833" }, "start+=0.7")
          tlStedlijk.to(flatramen[2],1,{fill: "#EDEDED"}, "return+=0.7")
          tlStedlijk.to(flatramen[4],1,{fill:"#ffff00" }, "start+=1")
          tlStedlijk.to(flatramen[4],1,{fill: "#EDEDED"}, "return+=1")
          tlStedlijk.to(flatramen[6],1,{fill:"#ffff00" }, "start+=1.2")
          tlStedlijk.to(flatramen[6],1,{fill: "#EDEDED"}, "return+=1.2")
          tlStedlijk.to(flatramen[11],1,{fill:"#ff9833" }, "start+=0.5")
          tlStedlijk.to(flatramen[11],1,{fill: "#EDEDED"}, "return+=0.5")
          tlStedlijk.to(flatramen[13],1,{fill:"#ffff00" }, "start+=0.2")
          tlStedlijk.to(flatramen[13],1,{fill: "#EDEDED"}, "return+=0.2")

        },
        clouds : function () {
          var clouds = document.querySelectorAll(".cloud");
          var names = ["a","b","c","d","e","f","g","h","i","j","k","m","n"];
          //var clouds2 = document.querySelector(".cloud2");
          var tlClouds = {};

          for (var i = 0; i < clouds.length; i++) {
            tlClouds[names[i]] = new TimelineMax({repeat:-1,delay:(i*1.3) });

            tlClouds[names[i]].set(clouds[i],{zIndex:99,x:-htmlElements.fullMap.clientWidth});
            tlClouds[names[i]].to(clouds[i],16+i,{x:(htmlElements.fullMap.clientWidth),ease: Power0.easeNone }, 2);
          }



          //var tlClouds2 = new TimelineMax({repeat:-1 })

          // tlClouds2.set(clouds2,{zIndex:99,x:-htmlElements.fullMap.clientWidth})
          // tlClouds2.staggerTo(clouds2,20,{x:(htmlElements.fullMap.clientWidth/1.5)}, 4);

        }
      }

      var eventHandlers = {
        handleMapClick : function(e, sector) {
          //e.preventDefault();
          // var sectorSensorEl = 'satelliteSensor' + sector;
          // var sectorDroneEl = 'droneSensor' + sector;
          //
          // htmlElements[sectorSensorEl].classList.remove('hide');
          // htmlElements[sectorDroneEl].classList.remove('hide');

          //setTimeout(function(){ window.location.href = e.target.parentElement.href; }, 700);
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

})();
