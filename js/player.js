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

        // this.posY0 = this.playerPosY;

        this.playerKeys = keys;

        this.playerImage = new Image();
        this.playerImage.src = './images/ninja5.png';

        this.playerImage.frames = 3;
        this.playerImage.framesIndex = 0;

        this.playerLife = 5;

        // this.velY = 1;
        // this.gravity = 0.4;

        // this.setListeners()
    }

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
            this.height
        );

        this.animate(framesCounter)
    }

    animate(framesCounter) {

        if (framesCounter % 3 == 0) {
            this.playerImage.framesIndex++;
        }
        
        if (this.playerImage.framesIndex > this.playerImage.frames - 1) {
            this.playerImage.framesIndex = 0;

          }
    }

    movePlayer(direction) {

        if (this.playerPos.x > 50 && (this.playerPos.x + this.width) < (this.canvasSize.w - 50)) {

            direction === 'left' ? this.playerPos.x -= 30 : null
            direction === 'right' ? this.playerPos.x += 30 : null

        } else if (this.playerPos.x <= 50) {

            direction === 'left' ? this.playerPos.x -= 0 : null
            direction === 'right' ? this.playerPos.x += 30 : null

        } else if ((this.playerPos.x + this.width) >= (this.canvasSize.w - 50)) {

            direction === 'left' ? this.playerPos.x -= 30 : null
            direction === 'right' ? this.playerPos.x -= 0 : null
        
        }
        
        // else if (this.playerPos.y < this.posY0) {

        //     direction === 'jump' ? this.jump() : null
        
        // }
        // } else if (this.playerPos.y < this.posY0) {

        //     this.playerPos.y += this.velY;
        //     this.velY += this.gravity;
    
        // } else {
    
        //     this.playerPos.y = this.posY0;
        //     this.velY = 1;
        // }
        
    }
     
    // setListeners() {

    //     document.addEventListener("keydown", e => {
    //         switch (e.keyCode) {
    //             case this.keys.jump:
    //                 if (this.playerPos.y >= this.posY0) {
    //                     this.jump()
    //                 }
    //                 break;
    //         }
    //     });
    // }

    // jump() {
        
    //     this.playerPos.y -= 40;
    //     this.velY -= 8;
    //   }
}