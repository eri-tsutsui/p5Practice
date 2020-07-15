function setup() {
	createCanvas(600, 600);
	colorMode(HSB);
	frameRate(5);
}

function draw() {

	let h;
	h = random(180, 220);

	fill(h, 50, 90, 0.4);
	noStroke();

	let x;
	let y;
	let r;

	x = random(0, width);
	y = random(0, height);
	r = random(50, 130);

	ellipse(x, y, r, r);

}