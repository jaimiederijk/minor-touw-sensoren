var htmlElements = {
}

var app = {
  init: function () {

    animate.results();
  }
}

var animate = {
  results: function () {
    var results = document.querySelectorAll(".branch li")
    var tlPopIn = new TimelineMax({repeat:0, repeatDelay:-0});
    tlPopIn.staggerFrom(results,0.8,{opacity:0.5,scale:0.5,x:0,y:1000, ease:Power2.easeOut,force3D:true},0.1);
    //for (var i = 0; i < htmlElements.results.length; i++) {
      // htmlElements.results[i].classList.remove("expandUp2");
      // tlPopIn.set(htmlElements.results[i],{scale:0.5,x:0,y:500},"in")
      // tlPopIn.to(htmlElements.results[i],1,{scale:1,x:0,y:-10,ease: Power4.easeOut,transformOrigin: "middle middle",delay:(i * 0.1)},"out")
      // tlPopIn.to(htmlElements.results[i],0.2,{y:0,ease: Power4.easeOut,delay:(i * 0.1)})
    //}
    // tlSea.set("#arm1",{x:-10,y:5,rotation: -45,
    //     transformOrigin: "top left"},"in")
    // tlSea.to("#arm1",2,{x:6,y:1,rotation: 20,ease: Power4.easeOut,
    //     transformOrigin: "top left"},"out")
    // tlSea.to("#arm1",2,{x:-10,y:5,rotation: -45,
    //     transformOrigin: "top left"},"back")
    // tlSea.set("#arm2",{x:10,y:5,rotation: 45,
    //     transformOrigin: "top right"},"in")
    // tlSea.to("#arm2",2,{x:-6,y:1,rotation: -20,ease: Power4.easeOut,
    //     transformOrigin: "top right"},"out")
    // tlSea.to("#arm2",2,{x:10,y:5,rotation: 45,
    //     transformOrigin: "top right"},"back")
    // tlSea.set("#been2",{x:10,y:5,rotation: 30,
    //     transformOrigin: "top right"},"in")
    // tlSea.to("#been2",2,{x:-5,y:1,rotation: -20,ease: Power4.easeOut,
    //     transformOrigin: "top right"},"out")
    // tlSea.to("#been2",2,{x:10,y:5,rotation: 30,
    //     transformOrigin: "top right"},"back")
    // tlSea.set("#been1",{x:-10,y:5,rotation: -30,
    //     transformOrigin: "top left"},"in")
    // tlSea.to("#been1",2,{x:5,y:1,rotation: 20,ease: Power4.easeOut,
    //     transformOrigin: "top left"},"out")
    // tlSea.to("#been1",2,{x:-10,y:5,rotation: -30,
    //     transformOrigin: "top left"},"back")
    // tlSea.to("#head",2,{x:0,y:0,rotation: -10,
    //     transformOrigin: "bottom center"},"out")
    // tlSea.to("#head",2,{x:0,y:0,rotation: 0,
    //     transformOrigin: "bottom center"},"back")
  }
}
app.init();
