function OnCanvasClick(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
	myCanvas.onmousedown = mousedwn;
	document.onmousemove = mousemv;
	document.onmouseup = mouseup;
	
	function mousedwn(evt){
		context.beginPath();
		context.moveTo(evt.pageX - myCanvas.offsetLeft, evt.pageY - myCanvas.offsetTop);
	}

	function mousemv(evt){
		context.lineTo(evt.pageX - myCanvas.offsetLeft, evt.pageY - myCanvas.offsetTop);
		context.stroke();
	}
	
	function mouseup(evt){
		document.unbind('mousemove');
		document.unbind('mouseup');
	}
}