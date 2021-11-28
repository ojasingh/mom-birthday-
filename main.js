const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	
	
}

function playSound(){
	x.play();
}
fabric.Image.fromURL(get_image, function(img)