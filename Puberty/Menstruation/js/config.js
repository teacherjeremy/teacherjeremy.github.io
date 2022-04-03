import Period from './period.js';

var config = {
  type: Phaser.AUTO,
  transparent: true,
  scene: [Period],
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 609
  }
};

var game = new Phaser.Game(config);


