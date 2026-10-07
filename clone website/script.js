console.log("TechStore Website Loaded Successfully!");




window.onload = function () {
  console.log("Welcome to TechStore");
};




let buttons = document.querySelectorAll(".btn-custom");

buttons.forEach(function(button){

  button.addEventListener("click", function(){

    console.log("View Details button clicked");

  });

});