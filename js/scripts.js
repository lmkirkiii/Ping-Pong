//Buisness Logic
var pingpong = function(number){
  if (number % 15 === 0) {
    return "pingpong"
  } else if (number % 5 === 0) {
    return "pong"
  } else if (number % 3 === 0) {
    return "ping"
  } else {
    return number;
  }
};
//User Logic
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#forminput").val());
    var result = pingpong(number);
    var count = [result];
    var input;
    var text = "";
    var total = 0;
    for(var input = 1; input <= number; input += 1){
      text += " " + pingpong(input) + "<br>" + "<br>";
    }
    document.getElementById("result").innerHTML = text;


  });
});
