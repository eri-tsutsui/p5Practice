let locationX;
let velocityX;
let locationY;
let velocityY;
let accelX;


function setup() {
	// frameRate(20);
	frameRate(20);
	createCanvas(600, 400);
	colorMode(HSB);

	locationX = width / 2;
	locationY = height / 2;
	velocityX = 10;
	velocityY = 5;
	accelX = -1;
}

function draw() {
	background('#fff');
	noStroke();
	fill(200, 100, 100, 1);
	ellipse(locationX, locationY, 80, 80);


	// 速度が正のうちはlocationの値は増えていくが、加速度を加え続け結果速度が負の値になるとlocationは負の値になる
	velocityX += accelX;
	locationX += velocityX;
	// locationY += velocityY;

	if(locationX > width || locationX < 0) {
		velocityX  *= -1;
	} 

	if(locationY > height || locationY < 0) {
		velocityY  *= -1;
	} 

	

}