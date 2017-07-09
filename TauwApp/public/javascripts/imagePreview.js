(function(){

    var loadFile = {
        retrieveImages: function() {
          var inputImg = document.querySelectorAll('.input-img');
          loadFile.showPreview(inputImg);
        },
        showPreview: function (inputImg) {
          for (i = 0; i < inputImg.length; i++) {
              inputImg[i].addEventListener("keyup", function(e) {
                e.target.parentElement.querySelector('.output-img').src = e.target.value;
              });
          }
        },
    };

    loadFile.retrieveImages();

})();
