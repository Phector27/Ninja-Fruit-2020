/*jshint esversion: 6 */

class Player {

    constructor(ctx, playerPosX, playerPosY, keys, canvasSize) {

        this.ctx = ctx;

        this.canvasSize = canvasSize;

        this.width = 168;
        this.height = 280;

        this.playerPos = {
            x: playerPosX,
            y: playerPosY
        };

        this.posY0 = this.playerPos.y;

        this.playerKeys = keys;

        this.playerImage = new Image();
        this.playerImage.src = './images/ninja.png';

        this.playerImage.frames = 3;
        this.playerImage.framesIndex = 0;

        this.playerLife = 5;

        this.velY = 1;
        this.gravity = 2;

    }



    /* DRAW PLAYER WITH FRAMES */
    
    draw(framesCounter) {
        
        this.ctx.drawImage(

            this.playerImage,
            this.playerImage.framesIndex * Math.floor(this.playerImage.width / this.playerImage.frames),
            0,
            Math.floor(this.playerImage.width / this.playerImage.frames),
            this.playerImage.height,
            this.playerPos.x,
            this.playerPos.y,
            this.width,
            this.height,
            this.updatePosition()
        );

        this.animate(framesCounter);
    }



    /* PLAYER ANIMATION / USE FRAMES */
    
    animate(framesCounter) {

        if (framesCounter % 3 == 0) {
            this.playerImage.framesIndex++;
        }
        
        if (this.playerImage.framesIndex > this.playerImage.frames - 1) {
            this.playerImage.framesIndex = 0;

          }
    }



    /* PLAYER MOVE BY PX */
    
    movePlayer(direction) {  

        if (this.playerPos.x > 50 && (this.playerPos.x + this.width) < (this.canvasSize.w - 50)) {

            direction === 'left' ? this.playerPos.x -= 30 : null; // jshint ignore:line
            direction === 'right' ? this.playerPos.x += 30 : null; // jshint ignore:line

        } else if (this.playerPos.x <= 50) {

            direction === 'left' ? this.playerPos.x -= 0 : null; // jshint ignore:line
            direction === 'right' ? this.playerPos.x += 30 : null; // jshint ignore:line
 
        } else if ((this.playerPos.x + this.width) >= (this.canvasSize.w - 50)) {

            direction === 'left' ? this.playerPos.x -= 30 : null; // jshint ignore:line
            direction === 'right' ? this.playerPos.x -= 0 : null; // jshint ignore:line
        

        } if (this.playerPos.y >= this.posY0) {

            if (direction === 'jump') {
                this.playerPos.y -= 150;
                this.velY -= 1;
            } 
        }
    }



    /* CORRECT PLAYER POSITION WITH GRAVITY */

    updatePosition() {

        if (this.playerPos.y < this.posY0) {

          this.playerPos.y += this.velY;
            this.velY += this.gravity;
            
        } else {

          this.playerPos.y = this.posY0;
          this.velY = 1.5;
        }
    }
}




/* EXTENDS PROPERTIES OF PLAYER */
class Player2 extends Player {

    constructor(ctx, playerPosX, playerPosY, keys, canvasSize, life) {

        super(ctx, playerPosX, playerPosY, keys, canvasSize);

        this.player.playerLife = life;
    }
}