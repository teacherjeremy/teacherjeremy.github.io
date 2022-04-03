import Textbox from '../../../common/js/textbox.js';

export default class Popup {
  constructor(scene, x, y, width, height, text) {
    this.screen = scene.add.rectangle(scene.cameras.main.width/2, scene.cameras.main.height/2, scene.cameras.main.width, scene.cameras.main.height, 0x000000, 0.4).setInteractive();
    this.textbox = new Textbox(scene, x, y, width, height);
    this.text = scene.add.text(x + 20, y + 20, text,
      {
        fontFamily: 'Assistant',
        fontSize: '30px',
        fill: '#000',
        wordWrap: { width: width - 20, useAdvancedWrap: false }
      }
    );

    this.exitCircle = scene.add.circle(0, 0, 20, 0xffffff).setInteractive({useHandCursor: true});
    this.exitCircleText = scene.add.text(0, 0, 'X', {fontFamily: 'Arial', fontSize: 16, color:'#000000', fontStyle: 'bold'}).setOrigin(0.5);

    this.exit = scene.add.container(x + width, y, [this.exitCircle, this.exitCircleText]);
    scene.add.existing(this.exit);
    this.exitCircle.on('pointerup', () => {
      this.exit.destroy();
      this.textbox.destroy();
      this.screen.destroy();
      this.text.destroy();
    })

    Popup.prototype.isVisible = function() {
      return this.textbox.visible;
    }
  }
}

