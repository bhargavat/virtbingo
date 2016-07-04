var used = []; //array of values already used
var marked = "#f75757";
var clicked = false; //if board was clicked

$(document).on("click", "#player", function (e) { //after 'Generate' button is pressed
	var row = 1;
	var col = 1;
	var id = "r1-c1";
	var rand = 0;

var table = document.getElementById("vboard");
for (var i = 1, row; row = table.rows[i]; i++) {
		for (var j = 0, col; col = row.cells[j]; j++) {
						rand = randomNumber(j);
						var current = table.rows[i].cells[j];
						console.log(rand);
						while(isDuplicate(rand)) rand = randomNumber(j);
						$(current).html(rand.toString());
						used.push(rand);
						if(i==3 && j==2){
								$(current).html("FREE");
						}
						else if($(current).css("background-color") != "white")
							$(current).css("background-color","white");
			}
	}
	used = [];
});

// Alternates color for player board
$(document).on("click", "#vboard td", function (e) {
	if(this.id == "" || this.id == null) return; //ignores for first row (BINGO)

    var id = this.id;
		if(id=="r3-c3") return; // leave FREE space untouched
    if(((this.style.backgroundColor == "white")
		|| (this.style.backgroundColor == ""))){
		this.style.backgroundColor = marked;
	}else{
		this.style.backgroundColor = "white";
	}

});

function removeElement(e){
	var elem = document.getElementById(e);
    elem.parentNode.removeChild(elem);
}

function isDuplicate(num){
var i = 0;
for(var i =0; i < used.length; i++){
	if(used[i] == num) return true;
}
return false;
}

function randomNumber(col){
if(col == 0) return Math.floor((Math.random()*15)+1); //1-15 (B)
else if(col == 1) return Math.floor((Math.random()*15)+16); //16-30 (I)
else if(col == 2) return Math.floor((Math.random()*15)+31); //31-45 (N)
else if(col == 3) return Math.floor((Math.random()*15)+46); //46-60 (G)
else if(col == 4) return Math.floor((Math.random()*15)+61); //61-75 (O)
}
