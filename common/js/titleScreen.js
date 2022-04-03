import TitleButton from '../../../common/js/titleButton.js';

export default class TitleScreen {
  constructor(scene, sceneButtons, buttonWidth, buttonHeight) {
    
    var resources = {
      buttons: []
    };

    !buttonWidth ? resources.width = 300 : resources.width = buttonWidth;
    !buttonHeight ? resources.height = 200 : resources.height = buttonHeight;

    resources.spacing = 30;

    var i = 0;
    for (let button in sceneButtons) {
      resources.i = new TitleButton(scene, 0, 0, resources.width, resources.height, sceneButtons[button].color, sceneButtons[button].text, sceneButtons[button].nextScene);
      resources.buttons.push(resources.i);
      i++;
    }

    // If there are more than 3 title buttons, align to grid.
    if (resources.buttons.length > 2) {
      resources.gridWidth = Math.ceil(resources.buttons.length / 2);
      var x;
      if (resources.gridWidth <= 2) {
        x = (scene.cameras.main.width / Phaser.Math.Clamp(resources.gridWidth, 2, 100)) - resources.width - resources.spacing;
      } else {
        x = (scene.cameras.main.width / (resources.gridWidth + 1)) - resources.width/2 - resources.spacing*(resources.gridWidth);
      }

      Phaser.Actions.GridAlign(resources.buttons, {
        width: resources.gridWidth,
        height: 2,
        cellWidth: resources.width + resources.spacing,
        cellHeight: resources.height + resources.spacing,
        position: Phaser.Display.Align.CENTER,
        x: x,
        y: (scene.cameras.main.height / 2) - resources.height - resources.spacing / 2
      });
    } else if (resources.buttons.length === 2) {
      resources.buttons[0].x = scene.cameras.main.width/2 - resources.width - resources.spacing;
      resources.buttons[1].x = scene.cameras.main.width/2 + resources.spacing;
      resources.buttons[0].y = scene.cameras.main.height/2 - resources.height / 2;
      resources.buttons[1].y = resources.buttons[0].y;
    } else if (resources.buttons.length === 1) {
      resources.buttons[0].x = scene.cameras.main.width/2 - resources.width / 2;
      resources.buttons[0].y = scene.cameras.main.height/2 - resources.height / 2;
    }

    if (resources.buttons.length === 5) {
      resources.buttons[3].x += resources.width / 2;
      resources.buttons[4].x += resources.width / 2;
    } else if (resources.buttons.length === 3) {
      resources.buttons[2].x += resources.width / 2;
    }
  }
}