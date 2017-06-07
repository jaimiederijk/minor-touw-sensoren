// var currentDiv = 0;
// var formDivs = document.querySelectorAll("form > div");
//
// // var nextButton = document.querySelector(".next");
// // var previousButton = document.querySelector(".previous");
// var controlButtons = document.querySelector(".controlButtons");
// var nextButton;
// var previousButton;
// var submitButton = document.querySelector('input[type="submit"]');
// console.log(submitButton)
//
// var progressbar = document.querySelector(".progressbar");
// var progressbarDetails = document.querySelector(".progressbarDetails");
//
// var progress = {
//     init: function(){
//         progress.showProgress();
//         progress.readProgress();
//     },
//     showProgress: function(){
//         progressbar.style.height = "1.5em";
//         progressbar.style.width = ((((currentDiv+1) / (formDivs.length))*100) + "%");
//     },
//     readProgress: function(){
//         progressbarDetails.innerHTML = "Step " + (currentDiv+1) + " out of " + formDivs.length;
//     }
// }
//
// var navigation = {
//     nextPage: function(){
//         display.hideCurrent();
//         currentDiv++
//         display.showNext();
//     },
//     previousPage: function(){
//         display.hideCurrent();
//         currentDiv--
//         display.showNext();
//     },
// };
//
// var display ={
//     init: function(){
//         buttons.init();
//         display.hideAll();
//         display.showNext();
//     },
//     hideAll: function(){
//         for (i = 0; i < (formDivs.length) ; i++) {
//             formDivs[i].classList.add("hideForm");
//         }
//     },
//     hideCurrent: function(){
//         formDivs[currentDiv].classList.add("hideForm");
//     },
//     showNext: function(){
//         formDivs[currentDiv].classList.remove("hideForm");
//         buttons.checkButtons();
//     },
// };
//
// var buttons = {
//     init: function(){
//         buttons.createButtons();
//         buttons.addEventListeners();
//     },
//     createButtons: function(){
//         var text1 = document.createTextNode("Volgende");
//         var text2 = document.createTextNode("Vorigen");
//
//         nextButton = document.createElement("button");
//         previousButton = document.createElement("button");
//         nextButton.appendChild(text1);
//         previousButton.appendChild(text2);
//
//         controlButtons.appendChild(previousButton).classList.add("previous");
//         controlButtons.appendChild(nextButton).classList.add("next");
//     },
//     checkButtons: function(){
//         if (currentDiv >=3){nextButton.classList.add("hideForm");}
//         else{nextButton.classList.remove("hideForm");}
//
//         if (currentDiv <= 0){previousButton.classList.add("hideForm")}
//         else{previousButton.classList.remove("hideForm")}
//
//         if (currentDiv <3){console.log(submitButton)
//             submitButton.classList.add("hideForm");}
//         else{submitButton.classList.remove("hideForm");}
//
//         progress.init()
//     },
//     addEventListeners: function(){
//         nextButton.addEventListener("click", function() { navigation.nextPage();});
//         previousButton.addEventListener("click",function() { navigation.previousPage();});
//     }
// }
//
// display.init();



var currentDiv = 0;
var submitButton = document.querySelector('input[type="submit"]');
var controlButtons = document.querySelector(".controlButtons");
var stepCounters = document.querySelectorAll(".stepCounter > a");

var navigation = {
    nextPage: function(){
        currentDiv++
        console.log(stepCounters.length)
        buttons.checkButtons();
    },
    previousPage: function(){
        currentDiv--
        console.log(currentDiv)
        buttons.checkButtons();
    },
};

var buttons = {
    init: function(){
        console.log(stepCounters.length)
        buttons.createButtons();
        buttons.addEventListeners();
        buttons.checkButtons();
    },
    createButtons: function(){
        var text1 = document.createTextNode("Volgende");
        var text2 = document.createTextNode("Vorigen");

        nextButton = document.createElement("button");
        previousButton = document.createElement("button");
        nextButton.appendChild(text1);
        previousButton.appendChild(text2);

        controlButtons.appendChild(previousButton).classList.add("previous");
        controlButtons.appendChild(nextButton).classList.add("next");
    },
    checkButtons: function(){
        if (currentDiv >= stepCounters.length-1){nextButton.classList.add("hideForm");}
        else{nextButton.classList.remove("hideForm");}

        if (currentDiv <= 0){previousButton.classList.add("hideForm")}
        else{previousButton.classList.remove("hideForm")}

        if (currentDiv <stepCounters.length-1){console.log(submitButton)
            submitButton.classList.add("hideForm");}
        else{ submitButton.classList.remove("hideForm");}
    },
    addEventListeners: function(){
        nextButton.addEventListener("click", function() { navigation.nextPage();});
        previousButton.addEventListener("click",function() { navigation.previousPage();});
    }
}



buttons.init();
