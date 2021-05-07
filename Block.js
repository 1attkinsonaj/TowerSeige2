class Block{
  constructor(x, y, width, height) {
      var options = {
           
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("block.png");
      this.Visiblity = 255;
    }
    display(){
      if (this.body.speed < 3) {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

 //     else{
    //  }
    else {
      push();
      World.remove(world, this.body);
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
        // var angle = this.body.angle;
        // var pos= this.body.position;
        // push();
        // World.remove(world, this.body);
        // this.Visiblity = this.Visiblity - 5;
        // tint(255, this.Visiblity);
        // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        // translate(pos.x, pos.y);
        // rotate(angle);
        // rectMode(CENTER);
        // rect(0,0,this.width, this.height);
        // pop();
      
      //var angle = this.body.angle;
      //var pos= this.body.position;

    }
}
