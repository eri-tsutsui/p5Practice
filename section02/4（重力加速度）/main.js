let locationX;
let velocityX;
let locationY;
let velocityY;
let accelX;
let gravity; 


function setup() {
	// frameRate(20);
	// frameRate(30);
	createCanvas(600, 400);
	colorMode(HSB);

	locationX = width / 2;
	locationY = height / 2;
	velocityX = 10;
	velocityY = 5;
	accelX = -1;
	gravity = 0.15;
}

function draw() {
	background('#fff');
	noStroke();
	fill(200, 100, 100, 1);
	ellipse(locationX, locationY, 80, 80);

	// velocityX += accelX;
	velocityY += gravity;

	// locationX += velocityX;
	locationY += velocityY;

	// if(locationX > width || locationX < 0) {
	// 	velocityX  *= -1;
	// } 

	if(locationY > height || locationY < 0) {
		velocityY  *= -1;
	} 

	

}