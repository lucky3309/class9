var box;






function setup() {
  createCanvas(900,900);
box=createSprite(200,400,30,100)




}

function draw() 
{
  background("yellow");
if(keyIsDown(RIGHT_ARROW)){
box.position.x=box.position.x+6
}
if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-5
}



drawSprites();
}




