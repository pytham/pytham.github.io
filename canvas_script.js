function OnCanvasClick(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
<<<<<<< HEAD
	$( "#canvas" ).mousedown(function(evt){
		var offset = $( "#canvas" ).offset();
=======
		$( '#canvas' ).mousedown(function(evt){
>>>>>>> 515ece66edf9fe86b7e02ce88e5bae72825c8569
		
		var offset = $( '#canvas' ).offset();
		context.beginPath();
		context.moveTo(evt.pageX - offset.left, evt.pageY - offset.top );
		
		$( document ).mousemove(function(evt){
<<<<<<< HEAD
			var offset = $( "#canvas" ).offset();
			
			context.lineTo(evt.pageX - offset.left , evt.pageY - offset.top );
=======
			var offset = $( '#canvas' ).offset();
			context.lineTo(evt.pageX - offset.left, evt.pageY - offset.top);
>>>>>>> 515ece66edf9fe86b7e02ce88e5bae72825c8569
			context.lineWidth = 1;
			context.strokeStyle = 'blue';
			context.stroke();
		});
		$( document ).mouseup(function()
				{
					$( document ).unbind('mousemove');
					$( document ).unbind('mouseup');
				});
	});
	
}
