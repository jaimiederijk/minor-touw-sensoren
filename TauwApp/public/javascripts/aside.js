(function(){
  var htmlElements = {
    openMenu : document.querySelector('#open-menu'),
    closeMenu : document.querySelector('#close-menu'),
    menu : document.querySelector('#menu'),
  }



  var events = {
      init: function(){
          htmlElements.openMenu.style.display = "block";
          htmlElements.openMenu.addEventListener('click', function(e){events.open(e);});
          htmlElements.closeMenu.addEventListener('click', function(e){events.close(e);});
      },
      open: function (e) {
          e.preventDefault();
          htmlElements.closeMenu.style.display = "block";
          htmlElements.openMenu.style.display = "none";
          htmlElements.menu.style.display = "block";
          animate.filters(e);
      },
      close: function (e) {
          e.preventDefault();
          htmlElements.closeMenu.style.display = "none";
          htmlElements.openMenu.style.display = "block";
          htmlElements.menu.style.display = "none";
      },
  }

  events.init();
})();
