// window.onload = () => ninjaGame.init('myCanvas')

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };



    function startGame() {
        ninjaGame.init('myCanvas');
    }
};