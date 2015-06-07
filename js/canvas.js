function Ball() {
	var x, y, r, color;

	return {
		drawSelf: function(ctx) {
					ctx.beginPath();
					ctx.fillStyle = color;
					ctx.arc(x, y, r, 0, 2*Math.PI, true);
					ctx.fill();
				  }
	};
}
