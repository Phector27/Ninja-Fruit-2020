const ninjaGame = {

    name: 'New Ninja Fruit Game 2020',
    description: ' Ninja fuit game made with Canvas',
    version: '1.0.0',
    license: undefined,
    authors: 'Heyling Marquez & Héctor Carramiñana',
    canvas: undefined,
    ctx: undefined,
    // FPS: 60,
    frames: 0,
    playerPoints: 0,
    framesCounter: 0,
    canvasSize: {
        w: window.innerWidth, // Esto lo hemos puesto así porque en setDimensions no nos tomaba las dimensiones totales de pantalla
        h: window.innerHeight
    },
    keys: {
        left: 37,
        right: 39,
        jump: 32,
    },
    background: [],
    player: undefined,
    apples: [], oranges: [], pears: [], watermelon: [], candy: [], cauliflowers: [],






    
    // INICIO:
    init(id) {

        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        this.setDimensions();
        this.start();
        this.setEventListeners();
    },

    // DIMENSIONES CANVAS
    setDimensions() {

        this.canvas.setAttribute('width', this.canvasSize.w)
        this.canvas.setAttribute('height', this.canvasSize.h)

        // this.canvasSize.w = this.canvasTag.width
        // this.canvasSize.h = this.canvasTag.height
    },

    // EJECUCIÓN DE FUNCIONES
    start() {

        this.reset()

        this.interval = setInterval(() => {


            this.clear()
            this.drawAll()
            this.isCollision()

            this.frames += 1
            this.frames % 120 === 0 ? this.createApples() : null
            this.frames % 90 === 0 ? this.createOranges() : null
            this.frames % 160 === 0 ? this.createPears() : null
            this.frames % 200 === 0 ? this.createWatermelon() : null
            this.frames % 250 === 0 ? this.createCandy() : null
            this.frames % 90 === 0 ? this.createCauliflower() : null

            this.pears.some(elm => elm.drawPears())
            this.apples.some(elm => elm.drawApple())
            this.oranges.some(elm => elm.drawOrange())
            this.watermelon.some(elm => elm.drawWatermelon())
            this.candy.some(elm => elm.drawCandy())
            this.cauliflowers.some(elm => elm.drawCauliflower())

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++;

        }, 70)


        // this.generateCauliflowers();
        // this.clearCauliflowers
    },

    // INICIO DEL JUEGO:
    reset() {

        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "./images/SALSA5.png")
        // this.player = new Player(this.ctx, 100, 200, this.canvasSize.w / 2 - 50, this.canvasSize.h - 250, this.keys, this.canvasSize)
        this.player = new Player(this.ctx, this.canvasSize.w / 2 - 50, this.canvasSize.h - 320, this.keys, this.canvasSize)

    },

    // CREATE FRUITS:
    createApples() {

        const apple = new Apple(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 60, 60, this.canvasSize, 15)
        this.apples.push(apple)
    },

    createOranges() {

        const orange = new Orange(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 60, 60, this.canvasSize, 15)
        this.oranges.push(orange)
    },

    createPears() {

        const pear = new Pear(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 60, 60, this.canvasSize, 15)
        this.pears.push(pear)
    },

    createWatermelon() {

        const watermelon = new Watermelon(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 60, 60, this.canvasSize, 22)
        this.watermelon.push(watermelon)
    },

    createCandy() {

        const candy = new Candy(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 60, 60, this.canvasSize, 20)
        this.candy.push(candy)
    },

    createCauliflower() {

        const cauliflower = new Cauliflower(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 80, 80, this.canvasSize, 25)
        this.cauliflowers.push(cauliflower)

    },

    // MOVE NINJA:
    setEventListeners() {

        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.player.movePlayer('left') : null
            e.keyCode === this.keys.right ? this.player.movePlayer('right') : null
        };
    },

    // DRAW ALL:
    drawAll() {

        this.background.draw()
        this.player.draw(this.framesCounter)
    },

    // COLLISIONS:
    isCollision() {

        this.apples.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.apples = this.apples.filter(elm => elm === 1)
                this.playerPoints += 50

                console.log(this.playerPoints)
            }
        })


        this.pears.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.pears = this.pears.filter(elm => elm === 1)
                this.playerPoints += 20

                console.log(this.playerPoints)
            }
        })

        this.oranges.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.oranges = this.oranges.filter(elm => elm === 1)
                this.playerPoints += 100

                console.log(this.playerPoints)
            }
        })

        this.watermelon.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.watermelon = this.watermelon.filter(elm => elm === 1)
                this.playerPoints += 35

                console.log(this.playerPoints)
            }
        })

        this.candy.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.candy = this.candy.filter(elm => elm === 1)
                this.player.playerLife += 1

                console.log(this.player.playerLife)
            }
        })

        this.cauliflowers.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.cauliflowers = this.cauliflowers.filter(elm => elm === 1)
                this.player.playerLife -= 2

                console.log(this.player.playerLife)
            }
        })

    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    gameOver() {
        clearInterval(this.interval);
    }

}