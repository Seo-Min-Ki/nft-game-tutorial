const config = {
    type: Phaser.AUTO,
    backgroundColor: '#ffffff',
    scene: [GameStartScene, GameScene, GameOverScene],
    scale: {
        mode: Phaser.Scale.FIT,
        width: 700,
        height: 800,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    pixelArt: true,
};

const GAME = new Phaser.Game(config);
const WIDTH = GAME.config.width;
const HEIGHT = GAME.config.height;