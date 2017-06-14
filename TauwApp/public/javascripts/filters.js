var filterBtn = document.getElementById('filter-button');
var filterList = document.getElementById('filter');
// var filterClose = document.getElementById('close-filter');
var filterClose = document.querySelectorAll('.close-filter');

filterBtn.addEventListener('click', function(e){
  e.preventDefault();
  filterList.style.display = "block";
});

filterClose.forEach(function(e) {
  e.addEventListener('click', function(e){
    e.preventDefault();
    filterList.style.display = "none";
  });
});

// filterClose.addEventListener("click", function(e){
//   e.preventDefault();
//   filterList.style.display = "none";
// });
