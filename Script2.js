function enableLengthA(){
	document.getElementById("lengthA").disabled = false;
	document.getElementById("lengthC").disabled = true;
}

function enableLengthC(){
	document.getElementById("lengthA").disabled = true;
	document.getElementById("lengthC").disabled = false;
}

function pythagoras(){
	if(document.getElementById("lengthC").disabled){
		var SideA = document.getElementById("lengthA").value;
		var SideB = document.getElementById("lengthB").value;
 		var SideCS = (SideA * SideA) + (SideB * SideB);
 		var answerBox = document.getElementById("pythagorasAnswer");
		answerBox.innerText = Math.sqrt(SideCS);
	}
	if(document.getElementById("lengthA").disabled){
		var SideC = document.getElementById("lengthC").value;
		var SideB = document.getElementById("lengthB").value;
 		var SideAS = (SideC * SideC) - (SideB * SideB);
 		var answerBox = document.getElementById("pythagorasAnswer");
		answerBox.innerText = Math.sqrt(SideAS);
	}
	if(!document.getElementById("lengthA").disabled && !document.getElementById("lengthC").disabled){
		var answerBox = document.getElementById("pythagorasAnswer");
		answerBox.innerText = "No side selected :)";
	}
}

function remainderDivision(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var ans = Math.floor(num1 / num2);
	var rem = num1 % num2;
	document.getElementById("divisionAns").innerHTML = ans;
	document.getElementById("remainder").innerHTML = rem;
}


function DenaryButtonClicked(){
	document.getElementById("userNum").placeholder="";
	document.getElementById("userNum").placeholder="Enter Binary Number...";
	document.getElementById("userNum").value="";
}

function BinaryButtonClicked(){
	document.getElementById("userNum").placeholder="";
	document.getElementById("userNum").placeholder="Enter Denary Number...";
	document.getElementById("userNum").value="";
	
}

function Conversion(){
	var placeholder = document.getElementById("userNum").getAttribute("placeholder");
	var userNum = document.getElementById("userNum").value;
	if(placeholder == "Enter Binary Number...")
	{
		var ans = parseInt(userNum, 2);
	}
	else if(placeholder == "Enter Denary Number...")
	{
		var ans = Number(userNum).toString(2);
	}
	document.getElementById("denaryAns").innerHTML = ans
	
}