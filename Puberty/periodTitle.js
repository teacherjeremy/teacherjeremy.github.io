import TitleScreen from '../../../common/js/titleScreen.js';
import SceneButton from '../../../common/js/sceneButton.js';
import BaseScene from './base.js';


export default class PeriodTitle extends BaseScene {
  constructor() {
    super('periodTitle')
  }

  preload () {
    super.preload();

  }

  create () {
    super.create('yellowBackground');

    var sceneButtons = {
      pregnancyButton: {
        color: '0x00cc34',
        text: 'Pregnancy:\nHow a Baby\nGets Built',
        nextScene: 'pregnancy'
      },
      periodButton: {
        color: '0x3a86ff',
        text: 'Periods:\nAll About The Menstrual Cycle',
        nextScene: 'period'
      }
    }
    
    new TitleScreen(this, sceneButtons, 450, 250);
    this.homeButton = new SceneButton(this, 1200, 567, 0.1, 'mainTitle', 'homeButton');
  }
}
