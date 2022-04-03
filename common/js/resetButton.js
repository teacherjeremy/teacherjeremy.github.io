
export default class ResetButton {
  constructor(scene, x, y, scale, key, key2) {

    const button = scene.add.image(x, y, key).setInteractive({useHandCursor: true}).setScale(scale);

    button.on('pointerdown', () => {
      if (key2) {
        button.setTexture(key2);
      }
    });

    button.on('pointerup', () => {
      button.setTexture(key);
      scene.scene.restart();
    });
  }
}