let eye;

function setup() {
  createCanvas(720, 400);
  noStroke();
  eye = new Eye(250, 160, 120);
}

function draw() {
  background(102);
  eye.update(mouseX, mouseY);
  eye.display();
}

class Eye {

	constructor(tx, ty, ts) {
		this.x = tx;
		this.y = ty;
		this.size = ts;
		this.angle = 0;
	}

	update(mx, my) {
		this.angle = atan2(my - this.y, mx - this.x);		
	}

	display() {
		push();
		translate(this.x, this.y);
		fill(255);
		ellipse(0, 0, this.size, this.size);
		rotate(this.angle);
		fill(153, 204, 0);
		ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
		pop();
	}


}
