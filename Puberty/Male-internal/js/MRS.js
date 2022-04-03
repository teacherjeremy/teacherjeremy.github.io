import SceneButton from '../../../common/js/sceneButton.js';
import Textbox from '../../../common/js/textbox.js';
import MRSStrings from './MRS_strings.js';
import DiagramInteractions from '../../../common/js/diagramInteractions.js';
import InfoButton from '../../../common/js/infoButton.js';
import QuestionButton from '../../../common/js/questionButton.js';
import BaseScene from '../../base.js';
    
export default class MRS extends BaseScene {
  constructor() {
    super('MRS');
  }

  preload () { 
    resources.definitions = new MRSStrings('explanations');
    resources.questions = new MRSStrings('questions');
  }

  create () {
    super.create();
    new Textbox(this, 810, 75, 430, 350);

    resources.definitionDisplay = this.add.text(830, 95, resources.infoText,
      {
        fontFamily: 'Assistant',
        fontSize: '30px',
        fill: '#000',
        wordWrap: {width: 400}
      }
    );

    resources.maleInternalBackground = this.add.image(450.1, 289.45, 'mrsBackground').setAlpha(0.5);
    // Background image for masking.
    resources.maleInternal = this.add.image(408.75, 317.2, 'mrsInternal'); 
   
    resources.bladder = this.add.image(450.4, 205.45, 'bladder');
    resources.prostate = this.add.image(454.1, 279.8, 'prostate');
    resources.urethra = this.add.image(371, 361.05, 'urethra');
    resources.vasdeferens = this.add.image(419.7, 276.05, 'vasdeferens');
    resources.teste = this.add.image(348.9, 411.4, 'teste');
    resources.epididymis = this.add.image(353.55, 398.7, 'epididymis');
    resources.svesicle = this.add.image(510.4, 235.25, 'svesicle');

    resources.organs = [resources.bladder, resources.prostate, resources.vasdeferens, resources.teste, resources.epididymis, resources.svesicle, resources.urethra];

    resources.labels = this.add.image(416.05, 321.45, 'labels');
    resources.labelLines = this.add.image(435.05, 318.2, 'labelLines');

    new DiagramInteractions(resources.organs, resources.definitionDisplay, resources.definitions, resources, 'organ', true, resources.explanationButton);
    
    resources.backButton = new SceneButton(this, 1200, 567, 0.1, 'reproductiveTitle', 'backButton');
    resources.infoButton = new InfoButton(this, 1200, 507, 0.1, infoText, resources, 'infoButton');
    resources.questionButton = new QuestionButton(this, 1140, 507, 0.1, resources.questions, 'questionButton');

  }
}

var resources = {
  explanations: false,
  organ: '',
  infoText: "Male reproductive system.\n\nClick on each part to learn what it does."
};

function infoText (resources) {
  resources.definitionDisplay.setText(resources.infoText);
}


