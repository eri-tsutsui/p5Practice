let mover, attractor;

function setup() {
	// frameRate(1);
	colorMode(HSB);
	createCanvas(600, 400);
	mover = new Mover(10, 0, 1);
	attractor = new Attractor();
}

function draw() {
	background(255);
	let gravity = createVector(0, 0.1);
	
	mover.applyForce(gravity);
	mover.update();
	mover.render();
	mover.checkEdges();

	if(mouseIsPressed) {
		let wind = createVector(0.1, 0);
		mover.applyForce(wind);
	}

	attractor.render();

}
