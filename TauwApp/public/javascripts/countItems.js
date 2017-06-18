(function(){

    var counters = document.querySelectorAll("section .count");
    var itemContainer = document.querySelectorAll("section ul");
    var counts = [];
    var objectIds = [];

    var counting = {
        init: function() {
            itemContainer.forEach(function(item){
                console.log(item.classList.value)
                console.log(item.children)
                counts.push(item.children.length);
                objectIds.push(item.classList.value);
            });
            counting.updateCounts();
        },
        updateCounts: function() {
            console.log(counts)
            for (i = 0; i < counters.length; i++) {
                counters[i].innerHTML = "("+ counts[i] +")"
            }
        }
    };

    counting.init();

})();
