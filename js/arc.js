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
	var ax = -0.05;
	var ay = 0;
	var i = 0;
	ctx.strokeStyle = '#6789fe';
	ctx.beginPath();
	ctx.moveTo(x, y);
	while(++i < 10000) {
		vx += ax;
		vy += ay;
		x += vx;
		y += vy;
		if(y<1000 && (vx < -4.5 || vx > 6)) {
			vx = 3;
			ax = -ax;
			//ay = -0.08;
		}
		if(y<1000 && (vy < - 3.0 || vy > 3)) {
			vy = 3;
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

var draw4 = function() {
	x = 0;
	y = 400;

	ctx.strokeStyle = '#8907ab';
	ctx.beginPath();
	ctx.moveTo(x, y);

	while(x*x < 180000) {
		x += 0.1;
		y = Math.sqrt(180000 - Math.pow(x-1,2));
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}

draw4();
