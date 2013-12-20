function OnCanvasClick(){
	var myCanvas = document.getElementByID('postit');
	var content = myCanvas.getContent("2d");
	
	$("#canvas").mousedown(function(evt){
		var offset = $("#canvas").offset();
		
		context.beginPath();
		context.moveTo(evt.pageX - offset.left , evt.pageY - offset.top );
		
		$(document).mousemove(function(evt){
			var offset = $("#canvas").offset();
			
			context.lineTo(evt.pageX - offset.left , evt.pageY - offset.top );
			content.lineWidth = 1;
			content.strokeStyle = red;
			content.stroke();
		}).mouseup(function(){
					$( document ).unbind('mousemove');
					$( document ).unbind('mouseup');
		});
	});
	
}