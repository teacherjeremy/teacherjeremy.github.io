export default class Textbox extends Phaser.GameObjects.Graphics {
  constructor(scene, x, y, width, height, fillColor, lineColor, lineWeight) {
    super(scene);

    if (!fillColor) {
      fillColor = '0xfac6c3';
    }

    if (!lineColor) {
      lineColor = '0xffffff';
    }

    if (!lineWeight) {
      lineWeight = 6;
    }

    this.fillStyle(fillColor, 1);
    this.fillRoundedRect(x, y, width, height, 20);
    this.lineStyle(lineWeight, lineColor, 1);
    this.strokeRoundedRect(x, y, width, height, 20);

    scene.add.existing(this);

    return this;
    
  }
}
