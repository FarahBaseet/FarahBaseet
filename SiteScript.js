let catX, catY;
let blink = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  catX = width * 0.78;
  catY = height * 0.78;
  noStroke();
}

function draw() {
  background("#080808");

  // A gentle floating animation
  let bob = sin(frameCount * 0.045) * 4;

  // Blink occasionally
  blink = (frameCount % 240 > 232) ? 1 : 0;

  // Follow the cursor just a little
  let targetX = width * 0.78 + (mouseX - width * 0.78) * 0.08;
  let targetY = height * 0.78 + (mouseY - height * 0.78) * 0.04;

  catX = lerp(catX, targetX, 0.025);
  catY = lerp(catY, targetY, 0.025);

  push();
  translate(catX, catY + bob);
  scale(1.15);

  // Soft glow
  for (let r = 100; r > 0; r -= 10) {
    fill(255, 220, 195, 1.2);
    ellipse(0, 8, r * 2, r * 2);
  }

  // Ground shadow
  fill("#211c1b");
  ellipse(0, 34, 65, 10);

  // Tail
  noFill();
  stroke("#e9d8c7");
  strokeWeight(7);
  strokeCap(ROUND);
  bezier(17, 14, 43, 12, 32, -20, 48, -20);

  stroke("#bda797");
  strokeWeight(2);
  bezier(17, 14, 43, 12, 32, -20, 48, -20);
  noStroke();

  // Body
  fill("#d8c3b0");
  ellipse(0, 17, 45, 28);

  fill("#fff0dd");
  ellipse(-2, 14, 40, 25);

  // Feet
  fill("#fff0dd");
  ellipse(-12, 29, 13, 8);
  ellipse(12, 29, 13, 8);

  // Head
  fill("#c6aa98");
  ellipse(0, -5, 49, 45);

  fill("#fff0dd");
  ellipse(0, -7, 46, 43);

  // Ears
  fill("#c6aa98");
  triangle(-22, -19, -19, -43, -4, -26);
  triangle(4, -26, 19, -43, 22, -19);

  fill("#e8aaa7");
  triangle(-18, -27, -18, -37, -9, -27);
  triangle(9, -27, 18, -37, 18, -27);

  // Eyes look toward your cursor
  let lookX = constrain((mouseX - catX) / 100, -2, 2);

  fill("#49362e");

  if (blink) {
    stroke("#49362e");
    strokeWeight(2);
    line(-10, -7, -5, -7);
    line(5, -7, 10, -7);
    noStroke();
  } else {
    ellipse(-8 + lookX, -8, 4, 6);
    ellipse(8 + lookX, -8, 4, 6);
  }

  // Nose and mouth
  fill("#bb817d");
  ellipse(0, 0, 4, 3);

  stroke("#80645a");
  strokeWeight(1.5);
  line(0, 1, -3, 4);
  line(0, 1, 3, 4);
  noStroke();

  // Blush
  fill(235, 155, 151, 100);
  ellipse(-14, 1, 8, 5);
  ellipse(14, 1, 8, 5);

  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
