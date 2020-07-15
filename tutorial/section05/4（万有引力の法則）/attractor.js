class Attractor { // 引力

	constructor() {
		this.location = createVector(width / 2, height / 2);
		this.mass = 10;
	}

	render() {
		noStroke();
		fill(100, 100, 100, 1);
		ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
	}

	attract(mover) {
		// 
		return attractionl
	}
}