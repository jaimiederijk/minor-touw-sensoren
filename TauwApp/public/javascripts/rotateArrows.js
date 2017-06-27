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
            if (current.querySelector("input").checked == false){
                var arrow = item.querySelector("span.arrow");
                animate.hideFilter(arrow);
                arrow.classList.add("down");
                arrow.classList.remove("up");

            }
            else {
                var arrow = item.querySelector("span.arrow");
                arrow.classList.add("up");
                arrow.classList.remove("down");
                animate.filters(arrow);
            }
        },
    };
    arrows.init();
})();
