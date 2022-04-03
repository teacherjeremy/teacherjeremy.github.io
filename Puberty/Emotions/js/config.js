import Emotions from './emotions.js';

var config = {
  type: Phaser.AUTO,
  transparent: true,
  scene: [Emotions],
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 609
  },
  debug: true
};

var game = new Phaser.Game(config);


