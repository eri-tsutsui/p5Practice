let spots;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB);
	frameRate(5);

	spots = new Spots();
}

function draw() {
	spots.show();
}

class Spots {
	constructor() {
		this.h = random(180, 220);
		this.x = random(0, width);
		this.y = random(0, height);
		this.r = random(50, 130);
	}

	show() {
		fill(this.h, 50, 90, 0.4);
		noStroke();
		ellipse(this.x, this.y, this.r, this.r);
	}
}