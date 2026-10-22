let puddlesY = [];
let puddlesX = [];
let puddlesD = [];
let puddles = 0;
let puddleOpacity = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#173a75");
  
  for(let i = 0; i <puddles; i++){
    if (puddleOpacity[i] <= 0){
         puddlesX.splice(i, 1);
         puddlesY.splice(i, 1);
         puddlesD.splice(i, 1);
         puddleOpacity.splice(i, 1);
         puddles--;
  } else{
    stroke(107, 143, 205, puddleOpacity[i]);
    noFill();
    ellipse(puddlesX[i], puddlesY[i], puddlesD[i]);
    puddlesD[i]++;
    puddleOpacity[i] -= random(1, 2);

  }

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {  //add a new puddle
    puddlesX[puddles] = mouseX;
    puddlesY[puddles] = mouseY;
    puddlesD[puddles] = 0;
    puddleOpacity[puddles] = 255;

    puddles++;
}
