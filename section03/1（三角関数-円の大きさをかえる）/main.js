let deg = 0;

function setup() {
	frameRate(300);
	createCanvas(600, 400);
	colorMode(HSB);
	angleMode(DEGREES);	
}

function draw() {
	background('#fff');
	noStroke();
	fill(200, 100, 100, 1);
	ellipse(width / 2 , height / 2, sin(deg) * 100);

	deg ++;

}