(function(){

  var app = {
    init: function () {
      //animate.results();
      minCharacters.resultsBlock();
    }
  }

  var animate = {
    results: function () {
      var results = document.querySelectorAll(".branch li")
      var tlPopIn = new TimelineMax({repeat:0, repeatDelay:-0});
      tlPopIn.staggerFrom(results,0.8,{opacity:0.5,scale:0.5,x:0,y:1000, ease:Power2.easeOut,force3D:true},0.1);

    },
    filters: function (target,play) {


    },
    hideFilter : function (target) {
      // var filters = target.parentElement.nextElementSibling.nextElementSibling;
      // var tlAnimateFilter = new TimelineMax({repeat:0});
      // tlAnimateFilter.set(filters,{zIndex:-1})
      // tlAnimateFilter.to(filters,0.1,{opacity:0.1,zIndex:-1,height:0, ease:Power2.easeOut})
    },
    orbitSatellite : function () {
      console.log("orbit");
      var sat = document.querySelector(".satellite svg");
      var tlOrbit = new TimelineMax({repeat:-1});

      tlOrbit.set(sat,{x:200});
      tlOrbit.to(sat,1,{x:500});
    }
  }

  var minCharacters = {
    resultsBlock: function () {
      var i;
      var resultsParagraph = document.querySelectorAll('.results-paragraph');
      for(i=0;i<resultsParagraph.length;i++) {
        resultsParagraph[i].innerHTML = resultsParagraph[i].innerHTML.substring(0,100) + ' ' + '...';
      }
    }
  }

  app.init();

})();
