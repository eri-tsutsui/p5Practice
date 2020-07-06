
class Mover {

	constructor(x, y, m) {
		// 加速度→速度→位置（加速度を速度に足して、それを位置に足す）
		this.location = createVector(x, y);
		this.velocity = createVector(0, 0);
		this.accel = createVector(0, 0);
		this.mass = m; //質量 
		this.radius = m * 10; //質量 
	}

	// 計算
	update() {
		this.velocity.add(this.accel);
		this.location.add(this.velocity);
		this.accel.mult(0); // 加速度を常に0.1にするための計算
	}

	//描画
	render() {
		noStroke();
		fill(200, 100, 100, 1);
		ellipse(this.location.x, this.location.y, this.radius, this.radius);
	}

	applyForce(force) {
		// 運動方程式 F = ma;
		let a = force.div(this.mass);
		this.accel.add(a); // 加速度をaccelに入れる
	}

	checkEdges() {
		if(this.location.x > width || this.location.x < 0) {
			this.velocity.x *= -1;
		}
		if(this.location.y > height || this.location.y < 0) {
			this.velocity.y *= -1;
		}
	}

}

// 重力（y軸）と風（x軸）の力がforce
