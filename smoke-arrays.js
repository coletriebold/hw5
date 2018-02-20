var x = [];
var y = [];
var r = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
	for (var i = 0;i<100;i+=1) {
		x[i] = 210;
		y[i] = 290;
		r[i] = 0;
		xSpeed[i] = random(-1,1);
		ySpeed[i] = random(2,4);
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // save graphics state
  // darker as it gets closer to 0
	for (var i = 0;i<100;i+=1) {
		push();
		fill(y[i]);
		translate(x[i],y[i]);
  	rotate(r[i]);
		rect(-10, -10, 20, 20);
		pop();
	}
  for (var j = 0;j<100;j+=1) {
		x[j] = x[j]+xSpeed[j];
		y[j] = y[j]-ySpeed[j];
		r[j] = r[j]+0.05;
	}
  // if reach past the top a bunch
  if (y[99]<0) {
		for (j=99;j>0;j-=1) {
			y[j] = y[j-1];
			x[j] = x[j-1];
			ySpeed[j] = ySpeed[j-1];
			xSpeed[j] = xSpeed[j-1];
		}
		
		y[0] = 290;
		x[0] = 210;
		xSpeed[0] = random(-1,1);
		ySpeed[0] = random(2,4);
	}
}
