$(document).ready(function(){
  $("#flavors form").submit(function(event){
    var flavors = ["flavor1", "flavor2", "flavor3"];

    flavors.forEach(function(flavor){
      var userInput = $("input#" + flavor).val();
      $("." + flavor).text(userInput);
    });


    event.preventDefault();

  });

});
