// var items = document.querySelectorAll("ul > li > a");
// var search = document.querySelector(".search");
// var itemList = [];
//
// search.addEventListener('keydown', function(e) {
//     log.logData();
//     filterSearch.checkMatches();
// }, true);
//
// var log = {
//     logData:function() {
//         console.log(items);
//         }
//     },
// };
//
// var filterSearch = {
//     makeObject: function(){
//         for (i = 0; i < items.length; i++) {
//             console.log(items[i].innerHTML)
//         }
//     },
//     checkMatches:function() {
//         console.log(itemList.includes(search.innerHTML))
//     },
//     isInArray: function(value, array) {
//         return array.indexOf(value) > -1;
//     },
// };

var counters = document.querySelectorAll("section .count");
var itemContainer = document.querySelectorAll("section ul");
var inputCountainer = document.querySelectorAll("section input[type=checkbox]");

var counts = [];
// var arrows = [];
var objectIds = [];

var counting= {
    init: function() {
        itemContainer.forEach(function(item){
            console.log(item.classList.value)
            console.log(item.children)
            counts.push(item.children.length);
            objectIds.push(item.classList.value);
        });
        counting.updateCounts();
        arrow.init();
    },
    updateCounts: function() {
        console.log(counts)
        for (i = 0; i < counters.length; i++) {
            counters[i].innerHTML = "("+ counts[i] +")"
        }
    }
};
var arrowsRotated = [];
var arrow = {
    init: function(){
        // var arrowsRotated[i] = false;
        console.log(inputCountainer)
        inputCountainer.forEach(function(input){
            input.addEventListener('change', function () {
                if(this.classList[this.classList.length -1] == "up"){
                    this.classList.add("down");
                    this.classList.remove("up");
                }
                else{
                    this.classList.add("up");
                    this.classList.remove("down");
                }
                arrow.toggleRotation(this.name, this.classList[this.classList.length-1]);
            });
        })
    },
    toggleRotation: function(item, className){
        console.log(className)
        var arrow = document.querySelector("label[for="+item +"] > .arrow");
            if (className == "up"){ deg = 180; }
            else { deg = 0 }
            arrow.style.webkitTransform = 'rotate('+deg+'deg)';
            arrow.style.mozTransform    = 'rotate('+deg+'deg)';
            arrow.style.msTransform     = 'rotate('+deg+'deg)';
            arrow.style.oTransform      = 'rotate('+deg+'deg)';
            arrow.style.transform       = 'rotate('+deg+'deg)';
    },
}

counting.init();
