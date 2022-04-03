import SceneButton from '../../../common/js/sceneButton.js';
import Hormone from '../../../common/js/hormone.js';
import Receptor from '../../../common/js/receptor.js';
import ReceptorInteractions from '../../../common/js/receptorInteractions.js';
import Textbox from '../../../common/js/textbox.js';
import ResetButton from '../../../common/js/resetButton.js';
import InfoButton from '../../../common/js/infoButton.js';
import FemaleChangesStrings from './femaleChangesStrings.js';
import QuestionButton from '../../../common/js/questionButton.js';
import BaseScene from '../../base.js';

export default class FemaleChanges extends BaseScene {
  constructor() {
    super('femaleChanges')
  }

  preload () {
    resources.definitions = new FemaleChangesStrings('definitions');
    resources.questions = new FemaleChangesStrings('questions');
  }

  create () {
    super.create();
    
    new Textbox(this, 810, 75, 430, 390);
    
    resources.definitionDisplay = this.add.text(830, 95, resources.definitions.infoText,
      {
        fontFamily: 'Assistant',
        fontSize: '30px',
        fill: '0x2E343B',
        wordWrap: { width: 400, useAdvancedWrap: false }
      }
    );

    // Hormone boxes.
    new Textbox(this, 45.5, 141, 230, 164, '0xff9085', '0xfe7266', 4);
    new Textbox(this, 45.5, 346, 230, 164, '0x7ac7a5', '0x13c576', 4);

    this.add.text(55, 148, 'Testosterone', {
      fontFamily: 'Assistant',
      fontSize: '30px',
      fill: '#fff'
    });

    this.add.text(55, 353, 'Estrogen', {
      fontFamily: 'Assistant',
      fontSize: '30px',
      fill: '#fff'
    });

    resources.girl = this.add.image(552.85, 310.25, 'girlChanges');
    
    resources.breasts2 = new Receptor(this, 630.75, 251.7, 'estrogenReceptor', 0.8, 12, 'breasts');
    resources.genitals2 = new Receptor(this, 600.75, 384.45, 'estrogenReceptor', 0.8, 33, 'genitals');
    resources.hair2 = new Receptor(this, 631, 467, 'testosteroneReceptor', 0.8, 0, 'hair');
    resources.growth2 = new Receptor(this, 422.55, 460.75, 'estrogenReceptor', 0.8, 180, 'growth');
    resources.hips2 = new Receptor(this, 414.95, 362.9, 'estrogenReceptor', 0.8, 151, 'hips');
    resources.sweat2 = new Receptor(this, 420.65, 275.05, 'testosteroneReceptor', 0.8, 145, 'sweat');

    resources.breasts = new Receptor(this, 630.75, 251.7, 'estrogenReceptor', 0.8, 12, 'breasts');
    resources.genitals = new Receptor(this, 600.75, 384.45, 'estrogenReceptor', 0.8, 33, 'genitals');
    resources.hair = new Receptor(this, 631, 467, 'testosteroneReceptor', 0.8, 0, 'hair');
    resources.growth = new Receptor(this, 422.55, 460.75, 'estrogenReceptor', 0.8, 180, 'growth');
    resources.hips = new Receptor(this, 414.95, 362.9, 'estrogenReceptor', 0.8, 151, 'hips');
    resources.sweat = new Receptor(this, 420.65, 275.05, 'testosteroneReceptor', 0.8, 145, 'sweat');

    resources.estrogen = new Hormone(this, 122.65, 460.8, 'estrogen', 0.8);
    resources.estrogen2 = new Hormone(this, 161.35, 421.6, 'estrogen', 0.8);
    resources.estrogen3 = new Hormone(this, 175.65, 477.3, 'estrogen', 0.8);
    resources.estrogen4 = new Hormone(this, 218.15, 437.3, 'estrogen', 0.8);

    resources.testosterone = new Hormone(this, 120.05, 256.95, 'testosterone', 0.8);
    resources.testosterone2 = new Hormone(this, 171.45, 235.05, 'testosterone', 0.8);

    resources.changes = [resources.breasts, resources.genitals, resources.hair, resources.growth, resources.hips, resources.sweat];
    resources.changes2 = [resources.breasts2, resources.genitals2, resources.hair2, resources.growth2, resources.hips2, resources.sweat2];

    resources.estrogenReceptors = this.physics.add.staticGroup([resources.breasts, resources.genitals, resources.growth, resources.hips]);
    resources.estrogenGroup = this.physics.add.group({collideWorldBounds:true});
    resources.estrogens = [resources.estrogen, resources.estrogen2, resources.estrogen3, resources.estrogen4];

    resources.estrogenGroup.add(resources.estrogen);
    resources.estrogenGroup.add(resources.estrogen2);
    resources.estrogenGroup.add(resources.estrogen3);
    resources.estrogenGroup.add(resources.estrogen4);

    /*
    for (let estrogen in resources.estrogens) {
      resources.estrogenGroup.add(estrogen);
    }
*/
    resources.testosteroneReceptors = this.physics.add.staticGroup([resources.hair, resources.sweat]);
    resources.testosteroneGroup = this.physics.add.group({collideWorldBounds:true});
    resources.testosterones = [resources.testosterone, resources.testosterone2];

    resources.testosteroneGroup.add(resources.testosterone);
    resources.testosteroneGroup.add(resources.testosterone2);
  
    this.physics.add.collider(resources.testosteroneGroup, resources.testosteroneGroup);
    this.physics.add.collider(resources.testosteroneGroup, resources.estrogenGroup);
    this.physics.add.collider(resources.estrogenGroup, resources.estrogenGroup);
    this.physics.add.overlap(resources.estrogenReceptors, resources.estrogenGroup, (receptor, hormone) => {hormone.on('pointerup', () => {hormone.bindReceptor(hormone, receptor)})});
    this.physics.add.overlap(resources.testosteroneReceptors, resources.testosteroneGroup, (receptor, hormone) => {hormone.on('pointerup', () => {hormone.bindReceptor(hormone, receptor)})});

    this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

  new ReceptorInteractions(resources.changes, resources.definitionDisplay, resources.definitions, false);

  resources.backButton = new SceneButton(this, 1200, 567, 0.1, 'changesTitle', 'backButton');
  resources.resetButton = new ResetButton(this, 1140, 567, 0.1, 'resetButton');
  resources.infoButton = new InfoButton(this, 1200, 507, 0.1, infoText, resources, 'infoButton');
  resources.questionButton = new QuestionButton(this, 1140, 507, 0.1, resources.questions, 'questionButton');
  }
}

var resources = {
  change: ''
};

function infoText (resources) {
  resources.definitionDisplay.setText(resources.definitions.infoText);
}


