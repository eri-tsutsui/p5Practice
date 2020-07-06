let mouse;
let origin;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(255);
	mouse = createVector(mouseX, mouseY);
	origin = createVector(width / 2, height / 2); // 機転変更
	mouse.sub(origin); // ベクトルの大きさ
	mouse.normalize(); // 正規化（大きさ1のベクトル）
	mouse.mult(100); // スカラー倍
	translate(width / 2, height / 2); // 回転の中心をキャンバスの中心に
	line(0, 0, mouse.x, mouse.y);
}

