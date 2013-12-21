function OnCanvasClick(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
	myCanvas.onmousedown = mousedwn;
	
	function mousedwn(evt){
		context.beginPath();
		context.moveTo(evt.pageX - myCanvas.offsetLeft, evt.pageY - myCanvas.offsetTop);
		
		document.onmousemove = mousemv;

		function mousemv(evt){
			context.lineTo(evt.pageX - myCanvas.offsetLeft, evt.pageY - myCanvas.offsetTop);
			context.stroke();
		}

		document.onmouseup = mouseup;
		
		function mouseup(evt){
			document.removeEventListener('mousemove');
			document.removeEventListener('mouseup');
		}
	}

}