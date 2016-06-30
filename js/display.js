//hides player/host buttons and shows player card
function playerMode(){
    var btns = document.getElementById("select");
    btns.parentNode.removeChild(btns);

    document.getElementById("card").style.display = "block";
    submitted();
}

function hostMode(){
    var btns = document.getElementById("select");
    btns.parentNode.removeChild(btns);

    document.getElementById("numgen").style.display = "block";	
}