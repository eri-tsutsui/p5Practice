let locationX = 0;
let velocityX = 30;

function setup() {
	createCanvas(400, 300);
	frameRate(10); // 1秒間に1回更新
	colorMode(HSB);
}

function draw() {

	// background(0);
	noStroke();
	fill(random(180, 200), 100, 100, 0.3);
	ellipse(random(0, width), random(0, height), 100, 100);

	locationX += velocityX;

	if(locationX > width) {
		locationX = 0;
	} 
}