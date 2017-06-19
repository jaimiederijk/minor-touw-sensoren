var openMenu = document.getElementById('open-menu');
var closeMenu = document.getElementById('close-menu');
var menu = document.getElementById('menu');

var events = {
    init: function(){
        openMenu.style.display = "block";
        openMenu.addEventListener('click', function(e){events.open(e);});
        closeMenu.addEventListener('click', function(e){events.close(e);});
    },
    open: function (e) {
        e.preventDefault();
        closeMenu.style.display = "block";
        openMenu.style.display = "none";
        menu.style.display = "block";
    },
    close: function (e) {
        e.preventDefault();
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
        menu.style.display = "none";
    }
}

events.init();
