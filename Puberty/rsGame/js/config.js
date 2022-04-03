import rsGame from './rsGame.js';
import rsGame2 from './rsGame2.js';

var config = {
  type: Phaser.AUTO,
  transparent: true,
  scene: [rsGame2],
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 609
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  }
};

var game = new Phaser.Game(config);


