class Train {
  
  constructor(){
    this.r = 75;
    this.x = width;
    this.y = height - this.r;
  }
  
  move(){
    this.x -= 8;
  }
  
  show(){
    image(tImg, this.x, this.y, this.r, this.r)
  }
}