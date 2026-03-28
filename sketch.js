let flap;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  flap = sin(frameCount * 8)*15; 
  // 8 is the flap speed, 5 controls the flap range extremes


  drawBody()
  drawLowerLeftWing(flap)
  drawLowerRightWing(flap)
  
  drawLeftWing(flap)
  drawRightWing(flap)
  
  
  drawAntennaeLeft()
  drawAntennaeRight()
  

}

function drawBody(){
  fill("rgb(134,101,101)")
  ellipse(width/2-3,height/2-5,30,120,220) // 5 args
}

