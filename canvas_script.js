function OnCanvasClick(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
	myCanvas.onmousedown = mousedwn;
	
	function mousedwn(evt){
		context.font = "12px sans-serif";
		context.fillText("This is the text entered by the user", 10, 20);
	}
	
}