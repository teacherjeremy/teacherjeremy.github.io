// config

import Setup from '../setup/setup.js';

import MainTitle from './mainTitle.js';
import ReproductiveTitle from './reproductiveTitle.js';
import ChangesTitle from './changesTitle.js';
import PeriodTitle from './periodTitle.js';

import MRS from './Male-internal/js/MRS.js';
import FRS from './Female-Internal/js/FRS.js';
import Hormones from './Hormones/js/hormones.js';
import MaleChanges from './Changes/js/maleChanges.js';
import FemaleChanges from './Changes/js/femaleChanges.js';
import Period from './Menstruation/js/period.js';
import Pregnancy from './Pregnancy/js/pregnancy.js';
import RSGame from './rsGame/js/rsGame.js';
import RSGame2 from './rsGame/js/rsGame2.js';
import MaleExternal from './External/js/maleExternal.js';
import FemaleExternal from './External/js/femaleExternal.js';
import Emotions from './Emotions/js/emotions.js';

var setup = new Setup();

var title = new MainTitle();
var reproductiveTitle = new ReproductiveTitle();
var changesTitle = new ChangesTitle();
var periodTitle = new PeriodTitle();

var frs = new FRS();
var hormones = new Hormones();
var mrs = new MRS();
var maleChanges = new MaleChanges();
var femaleChanges = new FemaleChanges();
var period = new Period();
var pregnancy = new Pregnancy();
var rsGame = new RSGame();
var rsGame2 = new RSGame2();
var maleExternal = new MaleExternal();
var femaleExternal = new FemaleExternal();
var emotions = new Emotions();

var config = {
  type: Phaser.AUTO,
  transparent: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 609
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  }
};

var game = new Phaser.Game(config);

// load scenes
game.scene.add('setup', setup);

game.scene.add('mainTitle', title);
game.scene.add('changesTitle', changesTitle);
game.scene.add('reproductiveTitle', reproductiveTitle);
game.scene.add('periodTitle', periodTitle);

game.scene.add('FRS', frs);
game.scene.add('MRS', mrs);
game.scene.add('hormones', hormones);
game.scene.add('maleChanges', maleChanges);
game.scene.add('femaleChanges', femaleChanges);
game.scene.add('period', period);
game.scene.add('pregnancy', pregnancy);
game.scene.add('rsGame', rsGame);
game.scene.add('rsGame2', rsGame2);
game.scene.add('maleExternal', maleExternal);
game.scene.add('femaleExternal', femaleExternal);
game.scene.add('emotions', emotions);

// start setup scene
game.scene.start('setup');


