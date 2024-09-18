window.alert(5 + 6);

function sliders(){
	red = document.getElementById("red").value
	green = document.getElementById("green").value
	blue = document.getElementById("blue").value
	box1 = document.getElementById("rectangle")
	box1.style.backgroundColor = "RGB("  + red + "," + green + ","+ blue + ")";
	var RGB = rgbToHex(red, green, blue);
	document.getElementById("rectangle").innerHTML = RGB;
}

function rgbToHex(red, green, blue) {
  const rgb = (red << 16) | (green << 8) | (blue << 0);
  return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

function Button(){
	RED = Math.floor(Math.random() * 226); 
	GREEN = Math.floor(Math.random() * 226);
	BLUE = Math.floor(Math.random() * 226);
	box2 = document.getElementById("random");
	box2.style.backgroundColor = "RGB("  + RED + "," + GREEN + ","+ BLUE + ")"; 
	var RGB = rgbToHex(RED, GREEN, BLUE); 
	document.getElementById("random").innerText = RGB;
}