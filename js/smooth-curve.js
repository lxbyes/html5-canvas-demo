'use strict';

var x = 0, y = 0;
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 800;

var p0 = {x: 10, y: 10},
    p1 = {x: 900, y: 80},
    p2 = {x: 800, y: 800};

// bezier
(function() {
	c.strokeStyle = '#f00';
	c.beginPath();
	c.moveTo(p0.x, p0.y);
	for(var t = 0;t<=1; t+=0.01) {
		x = (1-t)*(1-t)*p0.x + 2*t*(1-t)*p1.x + t*t*p2.x;
		y = (1-t)*(1-t)*p0.y + 2*t*(1-t)*p1.y + t*t*p2.y;
		c.lineTo(x, y);
	}
	c.stroke();
})();

var p3 = p2;
p1 = {x: 100, y: -100};
p2 = {x: 500, y: 1000};
(function() {
	c.strokeStyle = '#0f0';
	c.beginPath();
	c.moveTo(p0.x, p0.y);
	for(var t = 0;t<=1; t+=0.01) {
		x = Math.pow(1-t, 3)*p0.x + 3*t*Math.pow(1-t, 2)*p1.x + 3*Math.pow(t, 2)*(1-t)*p2.x + p3.x*Math.pow(t,3);
		y = Math.pow(1-t, 3)*p0.y + 3*t*Math.pow(1-t, 2)*p1.y + 3*Math.pow(t, 2)*(1-t)*p2.y + p3.y*Math.pow(t,3);
		c.lineTo(x, y);
	}
	c.stroke();
})();
