class Player{
  constructor(){
    this.name=null
    this.index=null
    this.distance=0
  }
  getcount(){
      var playercountref=database.ref('playercount').on("value",(data)=>{
          playercount=data.val()
      })
  }
  updatecount(count){
      database.ref('/').update({
          playercount:count
      })
  }
  update(){
      var playerindex="players/player"+this.index
      database.ref(playerindex).set({
          name:this.name,
          distance:this.distance 
      })
  }
  static getplayerinfo(){
      var playerinfo=database.ref('players').on("value",(data)=>{
          allplayers=data.val()
       })
  }
}