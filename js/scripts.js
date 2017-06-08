$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    var input = $("#userInput").val();

    var enteredValues = input.split(" ");

    var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    var output = [];

    enteredValues.forEach(function(enteredValue) {
      if (vowels.includes(enteredValue[0])) {
        var final = enteredValue + "ay";

        output.push(final);
      } else {
        output.push(enteredValue);
      }
    });
    var finalOutput = output.join(" ");
    alert(finalOutput);
  });
});
