(function(){
    var checkboxes = {
        init: function() {
            var requiredCheckboxes = document.querySelectorAll('input[type="checkbox"]');
                for (i = 0; i < requiredCheckboxes.length; i++) {
                    requiredCheckboxes[i].required = true;
                }
                console.log(requiredCheckboxes)
            checkboxes.addEventListeners(requiredCheckboxes);
        },
        addEventListeners: function(requiredCheckboxes) {
            for (i = 0; i < requiredCheckboxes.length; i++) {
                var item = requiredCheckboxes[i];
                item.addEventListener("change", function(item){
                    checkboxes.countCheckBoxes(this)
                });
            };
        },
        countCheckBoxes: function (element){
            console.log(element)
            var checkboxGroup = document.querySelectorAll('input[name="'+element.name+'"]');
            var checked = 0;
            for (i = 0; i < checkboxGroup.length; i++) {
                if (checkboxGroup[i].checked == true){checked++}
            }
            checkboxes.handelRequiredFileds(checkboxGroup,checked);
        },
        handelRequiredFileds: function (checkboxGroup,checked){
            console.log(checked)
            if (checked > 0){
                for (i = 0; i < checkboxGroup.length; i++) {
                    checkboxGroup[i].required = false;
                }
            }
            else {
                for (i = 0; i < checkboxGroup.length; i++) {
                    // checkboxGroup[i].removeAttr('required');
                    checkboxGroup[i].required = true;
                }
            }
        }
    };
    checkboxes.init();
})();
