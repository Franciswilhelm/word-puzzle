$(document).ready(function() {
  $("#puzzle").submit(function(event) {
    event.preventDefault();


    var removeArray = ["a", "e", "i", "o", "u"];
    var puzzleString = $("#puzzle_input1").val();

    for (var i = 0; i < removeArray.length; i++){
      var lowerLetter = removeArray[i];
      var upperLetter = removeArray[i].toUpperCase();

      while (puzzleString.match(lowerLetter) || puzzleString.match(upperLetter)){
        puzzleString = puzzleString.replace(removeArray[i], "-");
        puzzleString = puzzleString.replace(removeArray[i].toUpperCase(), "-");
      }
    }
    $("#puzzle_form").hide();
    $("#puzzle_output").text(puzzleString);
    $("#puzzle_output").fadeIn();
  });
});
