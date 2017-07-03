(function(){

    // var inputProfilePhoto = document.querySelectorAll('input-profile-photo');
    // var outputProfilePhoto = document.querySelectorAll('output-profile-photo');

    var inputContactPf = document.querySelector('.input-contact-pf');
    var outputContactPf = document.querySelector('.output-contact-pf');

    var inputSensorImg = document.querySelector('.input-sensor-img');
    var outputSensorImg = document.querySelector('.output-sensor-img');

    var inputReferenceImage = document.querySelector('.input-reference-image');
    var outputReferenceImage = document.querySelector('.output-reference-image');

    // var inputContactPf = document.querySelector('.input-contact-pf');
    // var outputContactPf = document.querySelector('.output-contact-pf');



    var loadFile = {
        init: function () {
          inputSensorImg.addEventListener("keyup", function(){
              // loadFile.showPreview();
              outputSensorImg.src += inputSensorImg.value;

          });
          inputContactPf.addEventListener("keyup", function(){
              // loadFile.showPreview();
              outputContactPf.src += inputContactPf.value;

          });
          inputReferenceImage.addEventListener("keyup", function(){
              // loadFile.showPreview();
              outputReferenceImage.src += inputReferenceImage.value;

          });
        },
        // showPreview: function () {
        //     outputSensorImg.src = inputSensorImg.value;
        // },
    };

    loadFile.init();

})();
