function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  stroke(200);

  beginShape();
  for(let angle = 0; angle < TWO_PI * 8; angle += 0.01) {

      //バラ曲線（360度以上必要であれば、TWO_PIに分母の値をかける）
      let range = 100 * sin(angle * 7 / 8);

      //極座標->直座標
      let x = range * cos(angle);
      let y = range * sin(angle);

      vertex(x, y);
  }
  endShape(CLOSE);




}
