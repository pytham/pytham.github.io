function OnCanvasClick(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
	myCanvas.onmousedown(function(evt){
		var offset = myCanvas.offset();
		
		context.beginPath();
		context.moveTo(evt.pageX - offset.left , evt.pageY - offset.top );
		
		document.onmousemove(function(evt){
			var offset = myCanvas.offset();
			
			context.lineTo(evt.pageX - offset.left , evt.pageY - offset.top );
			context.lineWidth = 1;
			context.strokeStyle = red;
			context.stroke();
		}).onmouseup(function(){
					document.unbind('mousemove');
					document.unbind('mouseup');
		});
	});
	
}