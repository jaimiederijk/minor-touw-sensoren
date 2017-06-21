var htmlElements = {
  openMenu : document.querySelector('#open-menu'),
  closeMenu : document.querySelector('#close-menu'),
  menu : document.querySelector('#menu'),
  filters : document.querySelectorAll('#filter ul input')
}



var events = {
    init: function(){
        htmlElements.openMenu.style.display = "block";
        htmlElements.openMenu.addEventListener('click', function(e){events.open(e);});
        htmlElements.closeMenu.addEventListener('click', function(e){events.close(e);});
        for (var i = 0; i < htmlElements.filters.length; i++) {
          htmlElements.filters[i].addEventListener('click', function(e){events.handleCheckboxClick(e);})
        }
    },
    open: function (e) {
        e.preventDefault();
        htmlElements.closeMenu.style.display = "block";
        htmlElements.openMenu.style.display = "none";
        htmlElements.menu.style.display = "block";
    },
    close: function (e) {
        e.preventDefault();
        htmlElements.closeMenu.style.display = "none";
        htmlElements.openMenu.style.display = "block";
        htmlElements.menu.style.display = "none";
    },
    handleCheckboxClick(e) {
      document.filter.submit();
    }
}

events.init();
