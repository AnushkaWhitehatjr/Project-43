
var hr;
var mn;
var sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(700,700);
  angleMode(DEGREES);

  hr = hour();
  mn = minute();
  sc = second();

}

function draw() {
  background(0);  
  translate(200,200);

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);  
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(scAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  noFill();
  stroke(255,0,0);
  strokeWeight(7);
  arc(0,0,250,250,0,hrAngle);
  stroke(0,255,0);
  strokeWeight(7);
  arc(0,0,280,280,0,mnAngle);
  stroke(0,0,255);
  strokeWeight(7);
  arc(0,0,310,310,0,scAngle);


  drawSprites();
}