class Background {

    constructor(ctx, backgroundWidth, backgroundHeight, imgSource) {

        this.ctx = ctx;

        this.backgroundSize = {
            w: backgroundWidth,
            h: backgroundHeight
        }

        this.image = new Image();
        this.image.src = imgSource;

        this.posX = 0;
        this.posY = 0;

        this.velX = 10;
    }

  draw() {
    
    this.ctx.drawImage(this.image, this.posX, this.posY, this.backgroundSize.w, this.backgroundSize.h);
    this.ctx.drawImage(this.image, this.posX + this.backgroundSize.w, this.posY, this.backgroundSize.w, this.backgroundSize.h);
  
    this.move()
}
    
      move() {
        if (this.posX <= -this.backgroundSize.w) {
          this.posX = 0;
        }
        this.posX -= this.velX;
      }

}