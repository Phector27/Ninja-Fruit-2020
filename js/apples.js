/*jshint esversion: 6 */

class Apple {

    constructor(ctx, fruitPosX, fruitPosY, fruitSizeW, fruitSizeH, canvasSize, speed) {
        
        this.ctx = ctx;

        this.fruitPos = {
            x: fruitPosX,
            y: fruitPosY
        };

        this.fruitSize = {
            w: fruitSizeW,
            h: fruitSizeH
        };

        this.canvasSize = canvasSize;

        this.fruitSpeed = speed;

        this.fruitImage = new Image();
        this.fruitImage.src = './images/apple.png';

        this.drawApple();
    }



    /* APPLES DRAW */

    drawApple() {
        
        this.moveApples();
        this.ctx.drawImage(this.fruitImage, this.fruitPos.x, this.fruitPos.y, this.fruitSize.w, this.fruitSize.h);
    
    }


    
    /* APPLES DRAW */

    moveApples() {

        this.fruitPos.y += this.fruitSpeed;
    }
}