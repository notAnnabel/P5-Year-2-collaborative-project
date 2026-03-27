wingrclip = loadImage('assets/greentestimage.jpg'); // testing wing clipping



function drawLeftWing(flap){
  push()
  beginShape()
  translate(290, 150);
  rotate(-flap-90)
  wingl = vertex(0, 0)
  
  fill("rgb(212,199,156)")
  
  //winglshape = bezierVertex(-42, -14, 198, 43,196, 149)
  winglshape = bezierVertex(-237, -264, 3, -293,1, -101)
  endShape(CLOSE)
  pop()
}

function drawRightWing(flap){
  push()
  beginShape()
  // wingr = vertex(205, 250)
  translate(300, 150)
  rotate(flap+90)
  wingr = vertex(0,0)
  fill("rgb(212,199,156)")
  
  
  wingrshape = bezierVertex(227.5, -264, -24, -293,1, -101)

  //endClip()
  endShape(CLOSE)
  pop()
}

function drawLowerLeftWing(flap){
  push()
  beginShape()
  translate(290, 160);
  rotate(-flap*2-100)
  wingl = vertex(0, 0)
  
  fill("rgb(212,199,156)")
  
  //winglshape = bezierVertex(-237, -264, 3, -293, 1, -101)
  winglshape = bezierVertex(-237, -234, 3, -263,1, -71)
  endShape(CLOSE)
  pop()

  /* code to add
    wingmaskL = loadImage('wing mask directory goes here')
    use clip(wingmaskL) to clip wing colour to moth wing
    the moth mask image needs to line up with the moth wing size!

    translate()
    rotate(-flap*2)
    wingmaskLVertex = vertex(0,0)

  */
}


function drawLowerRightWing(flap){
  push()
  beginShape()
  translate(300, 160);
  rotate(flap*2+100)
  wingl = vertex(0, 0)
  
  fill("rgb(212,199,156)")
  
  //winglshape = bezierVertex(-237, -264, 3, -293, 1, -101)
  wingrshape = bezierVertex(227.5, -234, -24, -263,1, -71)

  endShape(CLOSE)
  pop()
}





