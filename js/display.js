//controls what's being displayed

$(document).on("click", "#player", function (e) {
    document.getElementById("select").style.display = "none";
    $("#card").fadeIn(1000);
    $("#menu1").fadeIn(1000);
    submitted();
});

$(document).on("click", "#host", function (e) {
  document.getElementById("select").style.display = "none";
  $("#numgen").fadeIn(1000);
  $("#menu2").fadeIn(1000);
  document.body.style.background = "#bbbfc2";
});

$(document).on("click", "#menu1", function (e) {
    document.getElementById("card").style.display = "none";
    $("#select").fadeIn(1000);
});

$(document).on("click", "#menu2", function (e) {
    document.getElementById("numgen").style.display = "none";
    $("#select").fadeIn(1000);
    resetBoard('menu');
    document.body.style.background = "linear-gradient(to right, #fbc0c0, #ace7f9)";
});
