(function(){
  var htmlElements = {
    form : document.querySelector('#filter form'),
    filters : document.querySelectorAll('#filter ul input'),
    results : document.querySelector('main')
  }

  var events = {
      init: function(){
          for (var i = 0; i < htmlElements.filters.length; i++) {
            htmlElements.filters[i].addEventListener('click', function(e){events.handleCheckboxClick(e);})
          }
      },
      handleCheckboxClick(e) {
        var currentHref = window.location.href;

        if(typeof document.createRange().createContextualFragment === "function") {

          actions.getResultsClientside(currentHref);

        } else {
          var currenActionArr = currentHref.split("?");
          var currenAction = currenActionArr[1];
          var newAction = e.target.name + "=" + e.target.value;

          if (currenAction !== undefined) {
              window.location.href = currentHref + "&" + newAction;
          } else {
            document.filter.submit();
          }
        }


      }
  }

  var actions = {
    getResultsClientside : function (currentHref) {
      var url = "";
      var hrefArray = currentHref.split("details/")
      var dbCurrentHref = hrefArray[0] + "details/db/" + hrefArray[1];
      var checkedArray = actions.checkCheckboxes();

      if (checkedArray.length === 1) {

        url = dbCurrentHref + "?" + checkedArray[0].name + "=" + checkedArray[0].value;

      } else if (checkedArray.length > 1) {

        url = dbCurrentHref + actions.createCheckboxUrl(checkedArray);

      } else {

        var noFilterUrl = dbCurrentHref.split("?");
        url = noFilterUrl[0];
      }

      actions.getNewResults(url);

    },
    getNewResults : function (url) {
      console.log(url);
      promise.get(url).then(function(error, doc, xhr) {
          if (error) {
              alert('Error ' + xhr.status);
              return;
          }

          var newResults = document.createRange().createContextualFragment(doc);

          document.querySelector('body').replaceChild(newResults, document.querySelector('main'));
          animate.results();
      });
    },
    checkCheckboxes : function () {
      var filterArray = [];
      for (var i = 0; i < htmlElements.filters.length; i++) {
        if (htmlElements.filters[i].checked) {

          filterArray.push({
            name:htmlElements.filters[i].name,
            value:htmlElements.filters[i].value
          });
        }
      }
      return filterArray;
    },
    createCheckboxUrl : function (checkedArray) {
      var checkedArray = checkedArray;
      var url = "?"
      for (var i = 0; i < checkedArray.length; i++) {
        checkedArray[i]
        url = url + checkedArray[i].name + "=" + checkedArray[i].value;
        if (i !== checkedArray.length-1) {
          url = url + "&";
        }
      }
      return url
    }
  }

  events.init();
})();
