let x = 0;
let y = 0;
let vx = 6;
let vy = 6;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(255);
	noStroke();
	fill(0, 0, 200);
	ellipse(x, y, 100, 100);

	x += vx;
	y += vy;
}