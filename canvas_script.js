function OnCanvasClick(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
	$("#canvas").mousedown(function(evt){
		var offset = $("#canvas").offset();
		
		context.beginPath();
		context.moveTo(evt.pageX - offset.left , evt.pageY - offset.top );
		
		$(document).mousemove(function(evt){
			var offset = $("#canvas").offset();
			
			context.lineTo(evt.pageX - offset.left , evt.pageY - offset.top );
			context.lineWidth = 1;
			context.strokeStyle = red;
			context.stroke();
		}).mouseup(function(){
					$( document ).unbind('mousemove');
					$( document ).unbind('mouseup');
		});
	});
	
}