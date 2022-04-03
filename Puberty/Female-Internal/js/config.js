import FRS from './FRS.js';

var config = {
  type: Phaser.AUTO,
  transparent: true,
 // backgroundColor: 0xfffef1,
  scene: [FRS],
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 609
  }
};

var game = new Phaser.Game(config);


