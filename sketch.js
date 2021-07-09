let img;
function preload() {
  img = loadImage("download.png");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("#37000A ");
  translate(width / 2, height / 2);
  image(img, 0, 0);
  rotate(-90);
  let h = hour();
  let s = second();
  let m = minute();
  stroke(" #9CFFFA ");
  strokeWeight(6);
  noFill();
  ellipse(0, 0, 300, 300);

  stroke(" pink ");
  let secondangele = map(s, 0, 60, 0, 360);
  fill(255, 255, 255, 30);
  arc(0, 0, 270, 270, 0, secondangele, PIE);

  stroke("#AAFFE5 ");
  let minuteangele = map(m, 0, 60, 0, 360) + map(s, 0, 60, 0, 6);
  fill(255, 255, 255, 30);
  arc(0, 0, 240, 240, 0, minuteangele, PIE);

  stroke("#97D8B2 ");
  let hangele = map(h % 12, 0, 12, 0, 360);
  fill(255, 255, 255, 30);
  arc(0, 0, 210, 210, 0, hangele, PIE);

  push();
  noFill();
  strokeWeight(2);
  stroke(255);
  rotate(90);
  let W = 12;
  text(W, 0, -165);
  pop();

  push();
  noFill();
  strokeWeight(1);
  stroke(255);
  rotate(90);
  let t = 6;
  text(t, 0, 170);
  pop();

  push();
  noFill();
  strokeWeight(1);
  stroke(255);
  rotate(90);
  let g = 3;
  text(g, 160, 0);
  pop();

  push();
  noFill();
  strokeWeight(1);
  stroke(255);
  rotate(90);
  let A = 9;
  text(A, -170, 0);
  pop();

  push();
  noFill();
  strokeWeight(1);
  stroke(255);
  rotate(90);
  textSize(24);
  textFont("Pacifico");
  text(` ${h} :${m} : ${s}`, -50, 200);
  pop();
  strokeWeight(3);
  ellipse(160, 120, 50, 50);
  let sm = millis();
  arc(160, 120, 40, 40, 0, sm);
  fill("#97D8B2");
  ellipse(0, 0, 15, 15);

  push();
  strokeWeight(1);
  stroke(255);
  rotate(90);
  textSize(22);
  textFont("Qahiri");
  text(" BE YOU'R SELF", 50, -200);
  pop();
}
