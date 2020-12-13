var  database;
var gameState=0;
var playercount,form,player,game,distance=0,allplayers;
var car1,car2,car3,car4,cars 

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
game = new Game()
game.getstate()
game.start()
    
}

function draw(){
  background("white");
  if(playercount==4){
    game.update(1)
  }
  if(gameState==1){
    clear ()
    game.play ()
  }
    
    drawSprites();
  
}

