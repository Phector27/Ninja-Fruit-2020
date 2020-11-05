/*jshint esversion: 6 */

class Obstacle {

    constructor(ctx, obstaclePosX, obstaclePosY, obstacleW, obstacleH, canvasSize, speed) {
        
        this.ctx = ctx;

        this.obstaclePos = {
            x: obstaclePosX,
            y: obstaclePosY
        };

        this.obstacleSize = {
            w: obstacleW,
            h: obstacleH
        };

        this.canvasSize = canvasSize;

        this.obstacleSpeed = speed;

        this.obstacleImage = new Image();
        this.obstacleImage.src = './images/sawfloor.png';

        this.drawObstacle();
    }



    /* SAWS DRAW */
    
    drawObstacle() {

        this.moveObstacle();
        this.ctx.drawImage(this.obstacleImage, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h);

    }



    /* SAWS MOVE */
    
    moveObstacle() {

        this.obstaclePos.x -= this.obstacleSpeed;
    }

}