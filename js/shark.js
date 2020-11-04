/*jshint esversion: 6 */

class Shark {

    constructor(ctx, sharkPosX, sharkPosY, canvasSize, speed) {
        
        this.ctx = ctx;

        this.sharkPos = {
            x: sharkPosX,
            y: sharkPosY
        };

        this.width = 220;
        this.height = 150;

        this.canvasSize = canvasSize;

        this.sharkSpeed = speed;

        this.sharkImage = new Image();
        this.sharkImage.src = './images/SHARK.png';

        this.sharkImage.frames = 3;
        this.sharkImage.framesIndex = 0;

    }


    draw(framesCounter) {

        this.moveShark();

        this.ctx.drawImage(

            this.sharkImage,
            this.sharkImage.framesIndex * Math.floor(this.sharkImage.width / this.sharkImage.frames),
            0,
            Math.floor(this.sharkImage.width / this.sharkImage.frames),
            this.sharkImage.height,
            this.sharkPos.x,
            this.sharkPos.y,
            this.width,
            this.height
        );

        this.animate(framesCounter);
    }


    animate(framesCounter) {

        if (framesCounter % 3 == 0) {
            this.sharkImage.framesIndex++;
        }
        
        if (this.sharkImage.framesIndex > this.sharkImage.frames - 1) {
            this.sharkImage.framesIndex = 0;

          }
    }

    
    moveShark() {

        this.sharkPos.x -= this.sharkSpeed;
    }

}