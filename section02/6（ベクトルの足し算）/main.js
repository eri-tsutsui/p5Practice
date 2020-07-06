// let locationX;
// let locationY;
let vecLocation;
// let velocityX;
// let velocityY;
let vecVelocity;
// let accelX;
// let gravity; 
let vecAccel;

function setup() {
	createCanvas(600, 400);
	colorMode(HSB);

	// locationX = width / 2;
	// locationY = height / 2;
	vecLocation = createVector(width / 2, height / 2);

	// velocityX = 10;
	// velocityY = 5;
	vecVelocity = createVector(10, 10);

	// accelX = -1;
	// gravity = 0.15;
	vecAccel = createVector(0.1, 0.5);
}

function draw() {
	background('#fff');
	noStroke();
	fill(200, 100, 100, 1);
	ellipse(vecLocation.x, vecLocation.y, 80, 80);

	// velocityX += accelX;
	// locationX += velocityX;
	// vecVelocity.y += vecAccel.y;
	// vecLocation.y += vecVelocity.y;

	vecVelocity.add(vecAccel);
	vecLocation.add(vecVelocity);

	if(vecLocation.x > width || vecLocation.x < 0) {
		vecVelocity.x  *= -1;
	} 

	if(vecLocation.y > height || vecLocation.y < 0) {
		vecVelocity.y  *= -1;
	} 

}