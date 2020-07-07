function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);

  push();
  translate(width / 2, height / 2);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints; // 360 / 5 = 72
  let halfAngle = angle / 2.0; // 72 / 2 = 36
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) { // 0, 72, 144, 288, 360

	// 極座標→直交座標に変換（五角形の作成　円の上に5つの点をとるイメージ）
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);

	// 極座標→直交座標に変換
    sx = x + cos(a + halfAngle) * radius1; // a + halfAngleで、５角形の頂点の間にもう一つ点をうつイメージ（それを内側に凹ませる）
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);
}
