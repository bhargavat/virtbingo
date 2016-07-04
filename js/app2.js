var used = [];
var marked = "#f75757";
var currId = "";
var dispID = "numdisp";

function picker(){
	var rand = Math.floor((Math.random()*75)+1);

	while(isDuplicate(rand) == true){ rand = Math.floor((Math.random()*75)+1); }
	var rnumStr = rand.toString();
	//if(used.length > 0) document.getElementById('reset').disabled = false;
	if(rand < 16){
		document.getElementById(dispID).innerHTML = "B-"+rnumStr;
		currId = "b".concat(rnumStr);
		document.getElementById(currId).style.backgroundColor = marked;
	}
	else if(rand < 31){
		document.getElementById(dispID).innerHTML = "I-"+rnumStr;
		currId = "i".concat(rnumStr);
		document.getElementById(currId).style.backgroundColor = marked;
	}
	else if(rand < 46 ){
		document.getElementById(dispID).innerHTML = "N-"+rnumStr;
		currId = "n".concat(rnumStr);
		document.getElementById(currId).style.backgroundColor = marked;
	}
	else if(rand < 61){
		document.getElementById(dispID).innerHTML = "G-"+rnumStr;
		currId = "g".concat(rnumStr);
		document.getElementById(currId).style.backgroundColor = marked;
	}
	else if(rand >= 61){
		document.getElementById(dispID).innerHTML = "O-"+rnumStr;
		currId = "o".concat(rnumStr);
		document.getElementById(currId).style.backgroundColor = marked;
	}
	used.push(rand);

	if(used.length >= 75){
		document.getElementById('submit1').disabled = true;
	}
}

function resetBoard(type){
	var confirmed = false;
	if(used.length == 0) return;

	if(type == 'menu'){
		confirmed = true;
	}else{
			if (confirm("Are you sure you want to reset the board?") == true)
			confirmed = true;
		}
	if(confirmed == true){
	var table = document.getElementById("board1");
        for (var i = 1, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if(table.rows[i].cells[j].style.background != "white")
                table.rows[i].cells[j].style.background = "white"; //just an example
            }
        }
        used = [];
        document.getElementById("numdisp").innerHTML = "...";
        document.getElementById('submit1').disabled = false;
    }
}

function isDuplicate(num){
	var i = 0;
	for(var i =0; i < used.length; i++){
		if(used[i] == num) return true;
	}
	return false;
}
