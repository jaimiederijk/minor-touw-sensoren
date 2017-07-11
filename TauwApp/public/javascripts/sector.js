
(function(){

  var animate = {
    init : function () {
      animate.orbitSatellite();
      animate.flyDrone();
      //animate.sectors();
      if (window.location.href.indexOf("Stedelijk") > -1) {
        animate.stedlijk();
      } else if (window.location.href.indexOf("Industrie") > -1) {
        animate.industrie();
      } else if (window.location.href.indexOf("Landelijk") > -1) {
        animate.landelijk();
      }

    },
    orbitSatellite : function () {
      var img = document.querySelector(".category-img");
      var imgWidth = img.clientWidth;
      var bezier_path = [{ x: 0, y: 0 }, { x: (-imgWidth/2), y: -100 },{ x: -imgWidth, y: 0 }];//
      var sat = document.querySelector(".satellite svg");
      var tlOrbit = new TimelineMax({repeat:-1,repeatDelay:5});
      tlOrbit.to(sat, 12, { bezier: {
        type: 'thru',
        values: bezier_path,
        curviness: 1
      }, rotation:-80 , ease: Power0.easeNone });
      tlOrbit.set(sat, {opacity:0})
      // tlOrbit.set(sat,{x:200});
      // tlOrbit.to(sat,10,{x:-400, y:-100});
      // tlOrbit.to(sat,10,{x:-600, y:0});
    },
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
      var boom = document.querySelectorAll(".category-img .landelijk_boom");

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
      var flatramen = document.querySelectorAll("#stedelijk_flat g > rect");

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
    // sectors: function () {
    //   var sectors = document.querySelectorAll(".branches li");
    //   var tlSectors = new TimelineMax({repeat:0, repeatDelay:-0});
    //   tlSectors.staggerFrom(sectors,0.8,{opacity:0.5,scale:0.5,x:0,y:1000, ease:Power2.easeOut,force3D:true},0.1);
    //
    // },
    flyDrone : function () {
      var drone = document.querySelector(".drone svg");
      var tlFly = new TimelineMax({repeat:-1 })

      tlFly.to(drone,0.2,{rotation:20},"start")
      tlFly.to(drone,2,{x:100,y:-20, ease:Power1.easeOut}, "start")
      tlFly.to(drone,0.2,{rotation:0}, "start+=1.5")
      tlFly.to(drone,3,{x:150,y:20, ease:Power1.easeInOut},"second")
      tlFly.to(drone,0.2,{rotation:10}, "second-=0.2");
      tlFly.to(drone,0.2,{rotation:-20 ,ease:Power1.easeInOut}, "second+=2.5")
      // tlFly.to(drone,0.5,{rotation:0}, "second+=2");
      // tlFly.to(drone,1,{x:160,y:-15, ease:Power1.easeOut},"third")
      tlFly.to(drone,4,{x:0,y:0,ease:Power4.easeInOut}, "third")
      tlFly.to(drone,0.2,{rotation:0 ,ease:Power0.easeNone}, "third+=2")
      // tlFly.to(drone,0.5,{rotation:0}, "third+=1");
    }

  }
  animate.init();
})();
