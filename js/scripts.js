$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var userText = $("input#textbox").val();
    var textArray = (userText).split("");
    var outputArray = []
    for (var i = 0; i < textArray.length; i++) {
      textArray[i]
      if (textArray[i] === ("a")) {
        outputArray.push("-");
      } else if (textArray[i] === ("e")) {
        outputArray.push("-");
      } else if (textArray[i] === ("i")) {
        outputArray.push("-");
      } else if (textArray[i] === ("o")) {
        outputArray.push("-");
      } else if (textArray[i] === ("u")) {
        outputArray.push("-");
      } else {
        outputArray.push(textArray[i]);
      }
    }
    var joinArray = outputArray.join("");
    $(".result").text(joinArray);


    event.preventDefault();
  })
})
