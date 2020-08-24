function correctRandomColor() {
  //Correct Hex
  var correctRandomHex =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  //Incorrect Hexes
  var incorrectRandomHex1 =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  var incorrectRandomHex2 =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.getElementById("hexCode").innerHTML = correctRandomHex;
  let correctColor = Math.floor(Math.random() * 3);

  if (correctColor === 1) {
    assignColors(
      "first",
      "second",
      "third",
      correctRandomHex,
      incorrectRandomHex1,
      incorrectRandomHex2
    );
  } else if (correctColor == 2) {
    assignColors(
      "second",
      "first",
      "third",
      correctRandomHex,
      incorrectRandomHex1,
      incorrectRandomHex2
    );
  } else {
    assignColors(
      "third",
      "first",
      "second",
      correctRandomHex,
      incorrectRandomHex1,
      incorrectRandomHex2
    );
  }
}

function assignColors(
  correct,
  incorrect1,
  incorrect2,
  correctRandomHex,
  incorrectRandomHex1,
  incorrectRandomHex2
) {
  document.getElementById(correct).style.backgroundColor = correctRandomHex;
  document.getElementById(
    incorrect1
  ).style.backgroundColor = incorrectRandomHex1;

  document.getElementById(
    incorrect2
  ).style.backgroundColor = incorrectRandomHex2;
  document.getElementById(correct).addEventListener("click", function () {
    document.getElementById("result").innerHTML="Voila, You guess is correct! Click restart for new game!";
    x=document.getElementById("result");
      x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  });
  document.getElementById(incorrect1).addEventListener("click", function (e) {
    
    document.getElementById("result").innerHTML="Aw, try again!";
    x=document.getElementById("result");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
  });
  document.getElementById(incorrect2).addEventListener("click", function () {
    document.getElementById("result").innerHTML="Aw, try again!";
    x=document.getElementById("result");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
  });
}

correctRandomColor();

document.getElementById("restart").addEventListener("click", function () {
  document.getElementById("result").innerHTML="";
  correctRandomColor();
});