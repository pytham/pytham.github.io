function onCanvas(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
	var docToCanv = Math.min(myCanvas.width / $('body').width(), myCanvas.height/$('body').height());
	
	$("#canvas").mousedown(function(evt){
		var offset = $("#canvas").offset();
		
		context.beginPath();
		context.moveTo(evt.pageX*docToCanv - offset.left, evt.pageY*docToCanv - offset.top );
		
		$(document).mousemove(function(evt){
			var offset = $("#canvas").offset();
			
			context.lineTo(evt.pageX*docToCanv - offset.left, evt.pageY*docToCanv - offset.top);
			context.lineWidth = 1;
			context.strokeStyle ='black';
			context.stroke();
		}).mouseup(function(){
					$( document ).unbind('mousemove');
					$( document ).unbind('mouseup');
		});
	});
}

function moveCanvas(){
	$( document ).mousemove(function(evt){
			//document.style.cursor='move';
			$( '#postit' ).offset({ top: evt.pageY, left: evt.pageX})
		}).mousedown(function(evt){
			$( document ).unbind('mousemove');
			$( document ).unbind('mousedown');
			//document.style.cursor='default';
		});	
}

function clearCanvas(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	context.clearRect(0,0,myCanvas.width,myCanvas.height);
}
