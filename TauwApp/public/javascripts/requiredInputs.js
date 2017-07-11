// (function(){
//     var checkboxes = {
//         init: function() {
//             var requiredCheckboxes = document.querySelectorAll('input[type="checkbox"]');
//                 for (i = 0; i < requiredCheckboxes.length; i++) {
//                     requiredCheckboxes[i].required = true;
//                 }
//                 console.log(requiredCheckboxes)
//             checkboxes.addEventListeners(requiredCheckboxes);
//         },
//         addEventListeners: function(requiredCheckboxes) {
//             for (i = 0; i < requiredCheckboxes.length; i++) {
//                 var item = requiredCheckboxes[i];
//                 item.addEventListener("change", function(item){
//                     checkboxes.countCheckBoxes(this)
//                 });
//             };
//         },
//         countCheckBoxes: function (element){
//             console.log(element)
//             var checkboxGroup = document.querySelectorAll('input[name="'+element.name+'"]');
//             var checked = 0;
//             for (i = 0; i < checkboxGroup.length; i++) {
//                 if (checkboxGroup[i].checked == true){checked++}
//             }
//             checkboxes.handelRequiredFileds(checkboxGroup,checked);
//         },
//         handelRequiredFileds: function (checkboxGroup,checked){
//             console.log(checked)
//             if (checked > 0){
//                 for (i = 0; i < checkboxGroup.length; i++) {
//                     checkboxGroup[i].required = false;
//                 }
//             }
//             else {
//                 for (i = 0; i < checkboxGroup.length; i++) {
//                     // checkboxGroup[i].removeAttr('required');
//                     checkboxGroup[i].required = true;
//                 }
//             }
//         }
//     };
//     checkboxes.init();
// })();

// (function(){
//
//   var checkBoxesRequired = {
//     init: function() {
//       // this.fieldsetCheckbox();
//       this.setRequiredCheckBox();
//       // this.countCheckedBoxes();
//       // this.compareFieldsetInput();
//     },
//     setRequiredCheckBox: function() {
//       var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//       for (i = 0; i < checkboxes.length; i++) {
//         checkboxes[i].required = true;
//         checkBoxesRequired.checkboxEventListeners(checkboxes);
//       }
//       // var checkboxGroup = document.querySelectorAll('input[name="'+element.name+'"]');
//       // for (i = 0; i < checkboxGroup.length; i++) {
//       //     if (checkboxGroup[i].checked == true){
//       //       checkboxes.required = false;
//       //     }
//       // }
//     },
//     checkboxEventListeners: function(requiredCheckboxes) {
//       for (i = 0; i < requiredCheckboxes.length; i++) {
//           var item = requiredCheckboxes[i];
//           item.addEventListener("change", function(item){
//               checkBoxesRequired.countCheckedBoxes(this);
//           });
//       };
//     },
//     countCheckedBoxes: function(element) {
//         var checkboxGroup = document.querySelectorAll('input[name="'+element.name+'"]');
//         var checked = 0;
//         for (i = 0; i < checkboxGroup.length; i++) {
//             if (checkboxGroup[i].checked == true){checked++}
//         }
//         checkboxes.handelRequiredFileds(checkboxGroup,checked);
//         checkboxes.editCheckboxRequired(checkboxGroup,checked);
//     },
//     handelRequiredFileds: function (checkboxGroup,checked){
//       if (checked > 0) {
//         for (i = 0; i < checkboxGroup.length; i++) {
//             checkboxGroup[i].required = false;
//         }
//       }
//       else {
//         for (i = 0; i < checkboxGroup.length; i++) {
//             checkboxGroup[i].required = true;
//         }
//       }
//     },
//     editCheckboxRequired: function() {
//       if () {
//
//       }
//     }
//   };
//
//   checkBoxesRequired.init();
//
// })();

(function(){

  var checkboxes = {
    init: function() {
      this.collectCheckboxes();
      // this.newItem();
    },
    collectCheckboxes: function() {
      var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
      for (i = 0; i < allCheckboxes.length; i++) {
        if (allCheckboxes[i].name) {
          checkboxes.collectCheckboxesNames(allCheckboxes);
        }
      }
    },
    collectCheckboxesNames: function(allCheckboxes) {
      var checkboxNamesSet = [];
      var checkboxNamesSingle = [];

      for (var c = 0; c < allCheckboxes.length; c++) {
        checkboxNamesSet.push(allCheckboxes[c].name);
      }

      for (var i = 0, j = checkboxNamesSet.length; i < j; i++) {
        if (checkboxNamesSingle.indexOf(checkboxNamesSet[i]) === -1 && checkboxNamesSet.indexOf(checkboxNamesSet[i], i+1) !== -1) {
          checkboxNamesSingle.push(checkboxNamesSet[i]);
        }
      }
      checkboxes.setRequiredCheckbox(checkboxNamesSingle);

    },
    // setRequiredCheckbox: function(elementName) {
    //   for (var i = 0; i < elementName.length; i++) {
    //     var checkboxGroup = document.querySelectorAll('input[name="'+elementName[i]+'"]');
    //     // var counterCheckboxes = 0;
    //     var checkboxesChecked = [];
    //     for (var j = 0; j < checkboxGroup.length; j++) {
    //       if (checkboxGroup[j].checked) {
    //         checkboxesChecked.push(checkboxGroup[j]);
    //       }
    //   }
    //
    //     // for (var j = 0; j < checkboxGroup.length; j++) {
    //     //
    //     //   if (checkboxGroup[j].checked > 0) {
    //     //     counterCheckboxes++
    //     //   }
    //     //   if (counterCheckboxes > 0) {
    //     //     checkboxGroup[j].required = false;
    //     //   } else {
    //     //     checkboxGroup[j].required = true;
    //     //   }
    //     // }
    //   }
    // },
    setRequiredCheckbox: function(elementName) {
      for (var i = 0; i < elementName.length; i++) {
        var checkboxGroup = document.querySelectorAll('input[name="'+elementName[i]+'"]');
        var counterCheckboxes = 0;

        // This forloop loopt so the checkboxGroup and looks if something is checked and adds 1 if there are checkboxes checked.
        for (var j = 0; j < checkboxGroup.length; j++) {
            if (checkboxGroup[j].checked > 0 || ) {
                counterCheckboxes++
            }
        }

        // After the loop is finished and the counting is done.
        // Check if the count is bigger than 0.
        if (counterCheckboxes > 0) { // if true, required gets set to false.
            for (var k = 0; k < checkboxGroup.length; k++) {
                checkboxGroup[k].required = false;
            }
        }
        else { // required gets set to true.
            for (var l = 0; l < checkboxGroup.length; l++) {
                checkboxGroup[l].required = true;
            }
        }
      }
    },
  };

  checkboxes.init();

})();
