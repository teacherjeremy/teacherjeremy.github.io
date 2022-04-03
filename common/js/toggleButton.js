import Button from '../../../common/js/button.js';

export default class ToggleButton extends Button {
  constructor(scene, x, y, fontFamily, fontsize, fontColor, key1, key2, text, callback, toggleObjects) {
    var button = super(scene, x, y, fontFamily, fontsize, fontColor, key1, text);

    button.on('pointerdown', () => {
      button.setTexture(key2);
    });

    button.on('pointerup', () => {
      button.setTexture(key1);
      callback(toggleObjects);
    });
 
  }
}

