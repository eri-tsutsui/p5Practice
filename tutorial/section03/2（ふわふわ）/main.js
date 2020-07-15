let deg1 = 0;
let deg2 = 0;
let vecLocation;
let vecVelocity;

function setup() {
	// frameRate(300);
	createCanvas(600, 400);
	colorMode(HSB);
	angleMode(DEGREES);	
	vecLocation = createVector(width / 2, height / 3);
}

function draw() {
	background('#fff');

	vecVelocity = createVector(cos(deg1) * 2, sin(deg2) * 2);
	vecLocation.add(vecVelocity);

	deg1++;
	deg2++;

	noStroke();
	fill(200, 100, 100, 1);

	ellipse(vecLocation.x, vecLocation.y, 80);


}