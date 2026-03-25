
function drawAntennaeLeft(){
  push()
  beginShape()
  strokeWeight(2)
  stroke("rgb(139,95,95)")
  fill("rgba(255,255,255,0)") // transparent fill
  antennea = vertex(width/3-100, height/2-110)
  
  // wingrshape = bezierVertex(342, 314, 408, -143,236, 149)
  antenneashape = bezierVertex(80, 110, 101, 53, 190, 149)
  // (80, 100, 101, 43,190, 139)
  endShape()
  pop()

}

function drawAntennaeRight(){
  push()
  beginShape()
  strokeWeight(2)
  stroke("rgb(139,95,95)")
  fill("rgba(255,255,255,0)") // transparent fill
  antenneaR = vertex(width/3+90, height/2-110)
  
  //antenneashapeR = bezierVertex(80, 100, 101, 43,190, 139)
  antenneashapeR = bezierVertex(270, 100, 321, 43,204, 139)
  // (270, 100, 321, 43,204, 139)
  endShape()
  pop()

}