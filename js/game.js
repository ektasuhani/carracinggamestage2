class Game{
    constructor(){

    }
    getstate(){
        var gameStateref=database.ref('gameState').on("value",(data)=>{
           gameState=data.val()
        })
    }
    update(State){
        database.ref('/').update({
           gameState:State 
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getcount()
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200)
            car4=createSprite(700,200)
            cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide()
        textSize(30)
        text("gameStart",120,100);
        Player.getplayerinfo()
        if(allplayers!==undefined){
        //    var displaypos=130
        var index=0,x=0,y
            for(var i in allplayers){
                index=index+1
                x=x+200
                y=displayHeight-allplayers[i].distance
                cars[index-1].x=x
                cars[index-1].y=y
                
                if(index===player.index){
                    cars [index-1].shapeColor="red"
                    camera .position.x=displayWidth/2
                    camera .position.y=cars[index-1].y
                }
                else{
                    cars[index-1].shapeColor="black"
                }
               
              
    
            }
        }
        if(keyDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50
            player.update()
        }
        drawSprites();
    }
}