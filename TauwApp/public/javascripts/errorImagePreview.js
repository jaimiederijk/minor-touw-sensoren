(function(){

    var imgError = {
        fallback: function() {
          var outputImg = document.querySelectorAll('.output-img');
          var urlImageMistake = document.querySelectorAll('.url-img-failed');
          for (var i = 0; i < outputImg.length; i++) {
            outputImg[i].onerror = function(e) {
              // e.target.parentElement.querySelector('.output-img').src = "/images/tauw_logo_zonder.png";
              e.target.parentElement.querySelector('.output-img').classList.add('hide');
              e.target.parentElement.querySelector('.url-img-failed').classList.remove('hide');
            }
          }
          // for (var i = 0; i < outputImg.length; i++) {
          //
          // }
          // if (outputImg.onerror) {
          //   outputImg.src = "/images/tauw_logo_zonder.png";
          //   return true;
          // }

        },
    };

    imgError.fallback();

})();
