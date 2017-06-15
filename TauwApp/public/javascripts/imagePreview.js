(function(){

    var profilePhoto = document.getElementById('profilePhoto')
    var output = document.getElementById('output');

    var loadFile = {
        init: function () {
            profilePhoto.addEventListener("keyup", function(){
                loadFile.showPreview();
            });
        },
        showPreview: function () {
            output.src = profilePhoto.value;
        },
    };

    loadFile.init();

})();
