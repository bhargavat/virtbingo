//controls what's being displayed

$(document).on("click", "#menu1", function (e) {
    $("#menu1").fadeOut(500);
    $("#card").fadeOut(500);
    $("#select").fadeIn(1500);
});

$(document).on("click", "#menu2", function (e) {
    $("#menu2").fadeOut(500);
    $("#numgen").fadeOut(500);
    $("#select").fadeIn(1500);
    resetBoard('menu');
});

$(document).on("click", "#player", function (e) {
    $("#select").fadeOut(200);
    $("#card").fadeIn(1000);
    submitted();
    $("#menu1").fadeIn(1000);
});

$(document).on("click", "#host", function (e) {
  // var btns = document.getElementById("select");
  // btns.parentNode.removeChild(btns);
  $("#select").fadeOut(100);
  $("#numgen").fadeIn(1000);
  $("#numgen").fadeIn(1000);
  $("#menu2").fadeIn(1000);
  document.body.style.background = "#bbbfc2";
});
// function hostMode(){
//     var btns = document.getElementById("select");
//     btns.parentNode.removeChild(btns);
//
//     document.getElementById("numgen").style.display = "block";
//     document.body.style.background = "#bbbfc2";
// }
