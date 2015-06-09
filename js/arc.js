'use strict';

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var x = 20, y = 20;
var vx = 5, ax = 0.4;
var vy = 5, ay = 0.7;
var i = 0;
canvas.width = 1000;
canvas.height = 800;
var draw = function() {
	ctx.strokeStyle = '#fff';
	ctx.beginPath();
	ctx.moveTo(x, y);
	while(i < 10000) {
		i ++;
		if(i % 5 == 0) {
			vx = vx*ax;
			vy = vy*ay;
		}
		x += vx;
		y += vy;
		if(vx < 0.5) {
			vx = 5;
		}
		if(vy < 0.5) {
			vy = 5;
		}
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}

draw();

var draw2 = function() {
	x = 20;
	y = 20;
	vx = 5;
	vy = 2;
	ctx.strokeStyle = '#6789fe';
	ctx.beginPath();
	ctx.moveTo(x, y);
	while(vx > -5) {
		vx -= 0.05;
		x += vx;
		y += vy;
		if(y<1000 && vx < -4.5) {
			vx = 6;
		}
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}

draw2();

var draw3 = function() {
	x = 200;
	y = 200;

	ctx.strokeStyle = '#fe4543';
	ctx.beginPath();
	ctx.moveTo(x, y);

	while(x<200+200*Math.PI) {
		x += 0.1;
		y = 200 + 25*Math.sin(0.2*x);
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}

draw3();
