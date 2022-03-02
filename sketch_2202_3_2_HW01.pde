int x = 400;
int y = 200;
int xspeed = 20;
int yspeed = 20;
int life = 3;
int score = 0;
float speed = 12;
boolean alive = true;


void keyPressed(){ // Play Again
  x = 400;
  y = 200;
  float theta = random(-55,55) * PI/180;
  xspeed = ( int )( speed * cos(theta));
  yspeed = ( int ) (speed * sin(theta));
  alive = true;
}


void setup()
{
  size(800,400); //interface
  float theta = random(-55,55) * PI/180;
  xspeed = ( int )( speed * cos(theta));
  yspeed = ( int ) (speed * sin(theta));
}


void draw(){
  background(125); //background color
  fill(255,120,10); //RGB
  circle(x,y,55); //ball
  
  fill(111,0,255);
  rect(800-40 , mouseY-50, 20,120);
  
  fill(255,255,255);
  rect(22, y-50, 20,120);
  x = x + xspeed; // ball + xspeed
  y = y + yspeed; // ball + yspeed
  
  
if ( x < 55 ){
  xspeed =- xspeed;
}

 
if ( x > 780){ // END Game
 xspeed = 0;
 yspeed = 0;
 
 if(alive){
   life = life -1;
   }
   
   alive = false;
}



 
if (x > 760 && y > (mouseY -50) && y < (mouseY +50)){
 xspeed =- xspeed; 
 if(alive){
   score = score+3;  
 }
}

 
 
if (y > 400 || y< 0 ){
  yspeed =- yspeed;
}
  
  
textSize(40);
fill(112,244,244);
text("Score:"+score+ " Life:" +life , 244, 40); 


if ( life <= 0)
  {
  textSize(50);
  fill(255,0,0);
  text("Try Again", 300, 244); 
  }
  
}
