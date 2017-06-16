(function(){
    var arrows = {
        init: function() {
            document.querySelector('main').onclick = function(e) {
                if (e.target.tagName.toUpperCase() == 'INPUT'){
                    var current = e.target.parentElement;
                    arrows.checkInputStatus(e.target.parentElement, current);
                }
            }
        },
        checkInputStatus: function(item, current) {
            if (current.querySelector("input").checked == false){
                var arrow = item.querySelector("span.arrow");
                arrow.classList.add("down");
                arrow.classList.remove("up");
            }
            else {
                var arrow = item.querySelector("span.arrow");
                arrow.classList.add("up");
                arrow.classList.remove("down");
            }
        },
    };
    arrows.init();
})();
