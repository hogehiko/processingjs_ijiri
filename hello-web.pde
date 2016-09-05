
void setup() {
  size(600, 300);
  background(0.0);
  stroke(255);
  ellipse(x, 50, 25, 25);
  //println("hello web!");
  frameRate(60)
}

void draw(){
	y = y+3;
	background(0.0);
	ellipse(x, y, 25, 25);
}