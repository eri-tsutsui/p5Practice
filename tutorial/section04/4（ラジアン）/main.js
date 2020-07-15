let deg = 0;
let vecLocation;
let vecVelocity;
let hue;

function setup() {
	// frameRate(300);
	createCanvas(600, 400);
	colorMode(HSB);
	// angleMode(DEGREES);	
	vecLocation = createVector(width / 2, height / 3);
}

function draw() {
	background('#fff');

	vecVelocity = createVector(cos(radians(deg)) * 2, sin(radians(deg)) * 2);
	vecLocation.add(vecVelocity);

	hue = ceil(abs(sin(radians(deg)) * 360));

	deg++;

	noStroke();
	fill(hue, 100, 100, 1);

	ellipse(vecLocation.x, vecLocation.y, 80);


}