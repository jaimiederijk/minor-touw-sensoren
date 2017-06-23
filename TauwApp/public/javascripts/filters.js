var htmlElements = {
  openMenu : document.querySelector('#open-menu'),
  closeMenu : document.querySelector('#close-menu'),
  menu : document.querySelector('#menu'),
  form : document.querySelector('#filter form'),
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
      e.preventDefault();
      var currentHref = window.location.href;
      var currenActionArr = currentHref.split("?");
      var currenAction = currenActionArr[1];
      var newAction = e.target.name + "=" + e.target.value;
      debugger
      // htmlElements.form.action = currenAction + "&" + newAction ;
      //
      if (currenAction !== undefined) {
          window.location.href = currentHref + "&" + newAction;
      } else {
        document.filter.submit();
      }
    }
}

events.init();
