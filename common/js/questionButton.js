import ScrollBox from '../../../common/js/scrollBox.js';

export default class QuestionButton {
  constructor(scene, x, y, scale, text, key, key2) {

    const button = scene.add.image(x, y, key).setInteractive({useHandCursor: true}).setScale(scale);

    button.on('pointerdown', () => {
      if (key2) {
        button.setTexture(key2);
      }
    });

    button.on('pointerup', () => {
      button.setTexture(key);
      
      if (!this.scrollBox || !this.scrollBox.isVisible()) {
        scene.tweens._active.forEach((tween) => {
          tween.pause();
        })

        this.scrollBox = new ScrollBox(scene, text, true);
      }
    });
  }
}

