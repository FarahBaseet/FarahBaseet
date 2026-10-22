let puddlesY = [];
let puddlesX = [];
let puddlesD = [];
let puddles = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#173a75");

  for(let i = 0; i <puddles; i++){
    stroke("#6b8fcd");
    nofill();
    ellipse(puddlesX[i], puddlesY[i], puddlesD[i]);
    puddlesD[i]++;
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {  //add a new puddle
    puddles++;
    puddlesX[puddles] = mouseX;
    puddlesY[puddles] = mouseY;
    puddlesD[puddles] = 0;
}
