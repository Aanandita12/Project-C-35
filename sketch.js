//Create variables here

function preload(){

  dogImg=loadImage("dogImg.png");
  dogImg1=loadImage("dogImg1.png")
	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

function draw() { 
  
    background("green");
  /*  if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }*/
   /* else */if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    /*else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    } */

  drawSprites();
  //add styles here

}
/*function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}*/

function readStock(){
  foodS=data.val();

}

function writeStrock(x){
  if(x<=0){
    x=0
  } else{
    x=x-1
  }
  database.ref("/").update({
    Food:x
  })
}
