function OnCanvasClick(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
	$( '#canvas' ).mousedown(function(evt){
		context.beginPath();
		context.moveTo(evt.pageX - myCanvas.offsetLeft, evt.pageY - myCanvas.offsetTop);
		
		$( document ).mousemove(function(evt){
			context.lineTo(evt.pageX - myCanvas.offsetLeft, evt.pageY - myCanvas.offsetTop);
			context.stroke();
		}).mouseup(function(evt){
			$( document ).unbind('mousemove');
			$( document ).unbind('mouseup');

	});
});
}
