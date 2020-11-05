/*jshint esversion: 6 */

class Candy {

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
        this.fruitImage.src = './images/candy.png';

        this.drawCandy();
    }



    /* CANDIES DRAW */
    
    drawCandy() {
        
        this.moveCandy();
        this.ctx.drawImage(this.fruitImage, this.fruitPos.x, this.fruitPos.y, this.fruitSize.w, this.fruitSize.h);
    
    }



    /* CANDIES MOVE */
    
    moveCandy() {

        this.fruitPos.y += this.fruitSpeed;
    }
}