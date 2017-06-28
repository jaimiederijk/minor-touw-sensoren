
(function(){


  var animate = {
    orbitSatellite : function () {
      console.log("orbit");
      var sat = document.querySelector(".satellite svg");
      var tlOrbit = new TimelineMax({repeat:-1});

      tlOrbit.set(sat,{x:200});
      tlOrbit.to(sat,10,{x:-400, y:-100});
      tlOrbit.to(sat,10,{x:-600, y:0});
    },
    flyDrone : function () {
      var drone = document.querySelector(".drone svg");
      var tlFly = new TimelineMax({repeat:-1 })

      tlFly.to(drone,1,{rotation:20},"start")
      tlFly.to(drone,3,{x:100,y:-50, ease:Power2.easeOut}, "start")
      tlFly.to(drone,0.5,{rotation:0}, "start+=1.5")
      tlFly.to(drone,3,{x:150,y:-20, ease:Power2.easeOut},"second")
      tlFly.to(drone,0.5,{rotation:10}, "second-=0.5");
      tlFly.to(drone,0.5,{rotation:0}, "second+=1");
      tlFly.to(drone,2,{x:0,y:0,ease:Power2.easeOut}, "third")
      tlFly.to(drone,0.5,{rotation:-30}, "third");
      tlFly.to(drone,0.5,{rotation:0}, "third+=1");
    }

  }
  animate.orbitSatellite();
  animate.flyDrone();
})();
