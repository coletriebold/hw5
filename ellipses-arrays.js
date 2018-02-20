var x = [];
var y = [];
var d = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for (i=0;i<50;i+=1) {
		x[i] = random(400);
		y[i] = random(400);
		d[i] = random(20,50);
	}
}

function draw() {
  background(255);
  noStroke();

  // draw two ellipses
  for (j=0;j<50;j+=1) {
		fill(x[j], y[j], d[j]+25);
		ellipse(x[j],y[j],d[j]);
	}
  
  // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    d[Math.floor(random(0,49))] = random(10, 400);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    // random diameter between 10 and 400
    d[Math.floor(random(0,49))] = random(10, 400);
  }
}
