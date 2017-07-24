function continental(){
	document.getElementById('map').className=("continental");
}
function regional(){
	document.getElementById('map').className=("regional");
}
function local(){
	document.getElementById('map').className=("local");
}

//Build
function build(){
	document.getElementById("build_dropdown").classList.toggle("show");
}


function move(event){
	//Up
	if (event.keyCode==(87||38)){
		alert('1');
		document.getElementById('map').translate(10,0);
	}
	//Right
	if (event.keyCode==(68||39)){
		alert('2');
		document.getElementById('map').translate(key);
	}
	//Down
	if (event.keyCode==(83||40)){
		alert('3');
		document.getElementById('map').translate(key);
	}
	//Left
	if (event.keyCode==(65||37)){
		alert('4');
		document.getElementById('map').translate(key);
	}
}


function addListeners(){
	window.addEventListener("keydown",move,false);
	document.getElementById('map').addEventListener("click",hello,false);
	document.getElementById('test').addEventListener("keydown",hello,false);
}
function hello(){
	alert("Hello");
}

window.onload=addListeners;
