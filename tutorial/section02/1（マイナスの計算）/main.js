let locationX;
let velocityX;
let locationY;
let velocityY;


function setup() {
	// frameRate(10);
	// frameRate(30);
	createCanvas(600, 400);
	colorMode(HSB);

	locationX = width / 2;
	locationY = height / 2;
	velocityX = 2;
	velocityY = 5;
}

function draw() {
	background('#fff');
	noStroke();
	fill(200, 100, 100, 1);
	ellipse(locationX, locationY, 80, 80);

	locationX += velocityX;
	locationY += velocityY;

	if(locationX > width || locationX < 0) {
		velocityX  *= -1;
	} 

	if(locationY > height || locationY < 0) {
		velocityY  *= -1;
	} 

}