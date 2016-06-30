var used = []; //array of values already used
var marked = "#f75757";

function submitted(){ //after 'Generate' button is pressed
	var row = 1;
	var col = 1;
	var id = "r1-c1";
	var rand = 0;
	for (var i = 0; i < 5; i++) {
		for(var j = 0; j < 5; j++){
			var c = parseInt(id.substring(4,5));
			rand = randomNumber(c);
			while(isDuplicate(rand)){
				rand = randomNumber(c);
			} 
			document.getElementById(id).innerHTML = rand.toString();
			used.push(rand);
			if(id=="r3-c3"){
			document.getElementById(id).innerHTML = "FREE";
			document.getElementById(id).style.backgroundColor = marked;	
			}
			id = nextId(id);
		}
	}
	used = [];
}

// Alternates color for player board
$(document).on("click", "#vboard td", function (e) {
	if(this.id == "" || this.id == null) return; //ignores for first row (BINGO)

    var id = this.id;
    if(((document.getElementById(id).style.backgroundColor == "white")
		|| (document.getElementById(id).style.backgroundColor == ""))
		&& (document.getElementById(id).innerHTML) != '?'){
		document.getElementById(id).style.backgroundColor = marked;	
	}else{
		document.getElementById(id).style.backgroundColor = "white";
	}
});

function removeElement(e){
	var elem = document.getElementById(e);
    elem.parentNode.removeChild(elem);
}

function resetColor(id){
	if(document.getElementById(id).style.backgroundColor != "white"){
		document.getElementById(id).style.backgroundColor == "white";
	}
}

function nextId(id){ //r1-c2 -> r1-c3
	var r = parseInt(id.substring(1,2));
	var c = parseInt(id.substring(4,5));
	if(c==5){ 
	r++;
	c=1;
	}else{
	c++;
	}
	return "r"+r+"-c"+c;
}

function isDuplicate(num){
var i = 0;
for(var i =0; i < used.length; i++){
	if(used[i] == num) return true;
}
return false;
}

function randomNumber(col){
if(col == 1) return Math.floor((Math.random()*15)+1); //1-15 (B)
else if(col == 2) return Math.floor((Math.random()*15)+16); //16-30 (I)
else if(col == 3) return Math.floor((Math.random()*15)+31); //31-45 (N)
else if(col == 4) return Math.floor((Math.random()*15)+46); //46-60 (G)
else if(col == 5) return Math.floor((Math.random()*15)+61); //61-75 (O)
}