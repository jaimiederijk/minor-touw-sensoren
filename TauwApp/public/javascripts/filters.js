(function(){
  var htmlElements = {
    form : document.querySelector('#filter form'),
    filters : document.querySelectorAll('#filter ul input'),
    results : document.querySelector('main'),
    formSubmit : document.querySelector('#filtersubmit')
  }

  var events = {
      init: function(){
          for (var i = 0; i < htmlElements.filters.length; i++) {
            htmlElements.filters[i].addEventListener('click', function(e){events.handleCheckboxClick(e);})
          }
          htmlElements.formSubmit.classList.add('hide');

      },
      handleCheckboxClick: function(e) {
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
      var resultsUrl = "";
      var filtersUrl = "";
      var hrefArray = currentHref.split("details/");
      var dbCurrentHref = hrefArray[0] + "details/db/r/" + hrefArray[1].replace(/[?=]/g, "");
      var dbCurrentFilterHref = hrefArray[0] + "details/db/f/" + hrefArray[1].replace(/[?=]/g, "");
      var checkedArray = actions.checkCheckboxes();

      // one filter checked
      if (checkedArray.length === 1) {
        filtersUrl = dbCurrentFilterHref + "?" + checkedArray[0].name + "=" + checkedArray[0].value;
        resultsUrl = dbCurrentHref + "?" + checkedArray[0].name + "=" + checkedArray[0].value;

      } else if (checkedArray.length > 1) {
        filtersUrl = dbCurrentFilterHref + actions.createCheckboxUrl(checkedArray);
        resultsUrl = dbCurrentHref + actions.createCheckboxUrl(checkedArray);

      } else {
        var noFilterFUrl = dbCurrentFilterHref.split("?");
        var noFilterRUrl = dbCurrentHref.split("?");
        filtersUrl = noFilterFUrl[0];
        resultsUrl = noFilterRUrl[0];
      }

      actions.getNewFilters(filtersUrl);
      actions.getNewResults(resultsUrl);

    },
    getNewResults : function (url) {
      console.log(url);
      promise.get(url).then(function(error, doc, xhr) {
          if (error) {
              alert('Sorry. Filtering went wrong: ' + xhr.status);
              return;
          }

          var newResults = document.createRange().createContextualFragment(doc);

          document.querySelector('body').replaceChild(newResults, document.querySelector('main'));
          animate.results();
      });
    },
    getNewFilters : function (url) {
      console.log(url);
      promise.get(url).then(function(error, doc, xhr) {
        if (error) {
          alert('Sorry. Filtering went wrong: ' + xhr.status)
          return
        }

        var newFilters = document.createRange().createContextualFragment(doc);

        document.querySelector('aside .content').replaceChild(newFilters, document.querySelector('#filter'));

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
