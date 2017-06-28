(function(){
    var arrows = {
        init: function() {
            var dropdowns = document.querySelectorAll('aside .filter-dropdown');
            for (var i = 0; i < dropdowns.length; i++) {
              dropdowns[i].onclick = function(e) {
                var current = e.target.parentElement;
                arrows.checkInputStatus(e.target.parentElement, current);

              }
            }


        },
        checkInputStatus: function(item, current) {
            // var tlAnimateFilter = new TimelineMax({repeat:0, paused:true});
            //tlAnimateFilter.from(item.lastElementChild,0.3,{y:-100,opacity:0.1,zIndex:-1, ease:Power2.easeOut});

            if (current.querySelector("input").checked == false){
                var arrow = item.querySelector("span.arrow");
                //tlAnimateFilter.play();
                arrow.classList.add("down");
                arrow.classList.remove("up");

            }
            else {
                var arrow = item.querySelector("span.arrow");
                arrow.classList.add("up");
                arrow.classList.remove("down");
              //  tlAnimateFilter.reverse();
            }
        },
    };
    arrows.init();
})();
// var filters = target.parentElement.nextElementSibling.nextElementSibling;
// var tlAnimateFilter = new TimelineMax({repeat:0, paused:true});
//
// tlAnimateFilter.set(filters,{zIndex:-1});
// tlAnimateFilter.from(filters,0.3,{y:-100,opacity:0.1,zIndex:-1, ease:Power2.easeOut});
// if (play) {
//   tlAnimateFilter.play();
// } else {
//   tlAnimateFilter.reverse();
// }
