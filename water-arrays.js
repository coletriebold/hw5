var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	x[0] = 220;
	y[0] = 200;
	xSpeed[0] = 0;
	ySpeed[0] = 3;
	for (var i = 1; i < 10; i += 1) {
		x[i] = 220+random(-10,10);
		y[i]= y[i-1] +random(10,25);
		xSpeed[i] = random(-1,1);
		ySpeed[i] = random(2,4);
	}
}

function draw() {
  background(0);
  noStroke();
  // draw pipe
  rect(0, 200, 220, 20);
  
	for (var i = 0; i < 10; i += 1) {
		ellipse(x[i],y[i],10);
		y[i]= y[i] + ySpeed[i];
		x[i] = x[i]+xSpeed[i]
	}
	if (y[9]>height) {
		for (var j=9;j>0;j-=1) {
			y[j] = y[j-1];
			x[j] = x[j-1];
		}
		
		y[0] = 200;
		x[0] = 220+random(-10,10);
	}
}
