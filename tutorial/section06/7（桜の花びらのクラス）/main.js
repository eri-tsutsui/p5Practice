// let n = 4;
let sakura = [];
let Num = 1;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  noStroke();

  for(let i = 0; i < Num; i ++) {
    sakura.push(new Sakura());
  }
}

function draw() {
  background(255);

  for(let i = 0; i < Num; i ++) {
    sakura[i].render();
  }
}

class Sakura {
  constructor() {
    this.n = 4;
    this.vecLocation = createVector(random(width), random(height));
  }

    // 計算
    update() {

    }

    // 描画
    render() {
      fill(350, 28, 100, 1);
      push();
      translate(this.vecLocation.x, this.vecLocation.y);
      beginShape();

      for(let theta = 0; theta < 360 / 4; theta++) {
        let A = this.n / PI * radians(theta); 
        let mod = floor(A) % 2; //floorは小数点の切り捨て、%は2で割った余り 

        let r0 = pow(-1, mod) * (A - floor(A)) + mod; //pow(-1. mod)で-1のmod乗
        let r = r0 + 2 * this.calculateH(r0);

        //極座標→直行座標
        let x = 100 * r * cos(radians(theta)); 
        let y = 100 * r * sin(radians(theta));

        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
    }

    calculateH(x) {
      if(x < 0.8) {
        return 0;
      } else {
        return 0.8 - x;
      }
    }
}