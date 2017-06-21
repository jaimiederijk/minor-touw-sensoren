(function(){

    var counter = document.getElementById("count");
    var list = document.querySelectorAll("main section ul li");

    var counting = {
        init: function() {
            var itemCount = list.length;
            counter.innerHTML = "("+ itemCount +")"
        }
    };

    counting.init();

})();
