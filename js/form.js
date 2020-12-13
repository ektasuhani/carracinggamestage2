class Form{
    constructor(){
        this.title = createElement('h2')
        this.input = createInput("name")
        this.button = createButton("play");
        this.greeting = createElement('h3');
    }
    display(){
      
       this.title.html("car racing game ")
        this.title.position(displayWidth/2-50,0);
      
        this.input.position(displayWidth/2-40,displayHeight/2-30);
       
        this.button.position(displayWidth/2+30,displayHeight/2+40);
      
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             player.name = this.input.value();
            playercount= playercount+1
            player.index=playercount
            player.update();
            player.updatecount(playercount);
            this.greeting.html("hello"+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/2-60);
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}