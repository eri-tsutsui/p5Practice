let mouse;
let origin;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(255);
	mouse = createVector(mouseX, mouseY);
	origin = createVector(0, 0);
	mouse.sub(origin);
	line(0, 0, mouse.x, mouse.y);
}

