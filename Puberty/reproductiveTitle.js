import TitleScreen from '../../../common/js/titleScreen.js';
import SceneButton from '../../../common/js/sceneButton.js';
import BaseScene from './base.js';

export default class ReproductiveTitle extends BaseScene {
  constructor() {
    super('reproductiveTitle');
  }

  preload () {

  }

  create () {

    super.create('greenBackground');
    
    var sceneButtons = {
      femaleButton: {
        color: '0x3a86ff',
        text: 'Female Internal',
        nextScene: 'FRS'
      },

      maleButton: {
        color: '0xff8736',
        text: 'Male Internal',
        nextScene: 'MRS'
      },

      gameButton: {
        color: '0xff4e3e',
        text: 'Game',
        nextScene: 'rsGame'
      },

      femaleExternalButton: {
        color: '0x9a79ff',
        text: 'Female External',
        nextScene: 'femaleExternal'
      },

      maleExternalButton: {
        color: '0xffa70f',
        text: 'Male External',
        nextScene: 'maleExternal'
      },
      
    }
    
    new TitleScreen(this, sceneButtons, 375, 250);
    this.homeButton = new SceneButton(this, 1200, 567, 0.1, 'mainTitle', 'homeButton');
  }
}
