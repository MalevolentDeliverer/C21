var Thickness,wall;

var bullet,Speed,Weight;


var damage;







function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 25);
  wall = createSprite(1200,200,Thickness,height/2);
  Thickness = random(22,83);
  Speed = random(223,321);
Weight = random(30,52);

//fill("red");
//text("Deformation = "+deformation,600,200);

}



function draw() 
{
  background("black");  


 
bullet.velocityX=Speed;
 
  if(wall.x-bullet.x < bullet.width/2+wall.width/2)
    {
      bullet.velocityX = 0;
      bullet.x=1130;
    }
      var damage = (0.5*Weight*Speed*Speed)/(Thickness*Thickness*Thickness);

     
     if(damage>10){
bullet.shapeColor="red";
     }
     else{
       bullet.shapeColor="green";
     }
    
  drawSprites();
}