import SceneButton from '../../../common/js/sceneButton.js';
import Textbox from '../../../common/js/textbox.js';
import FemaleExternalStrings from './femaleExternalStrings.js';
import InfoButton from '../../../common/js/infoButton.js';
import QuestionButton from '../../../common/js/questionButton.js';
import BaseScene from '../../base.js';

    
export default class FemaleExternal extends BaseScene {
  constructor() {
    super('femaleExternal');
  }

  preload () {
    super.preload();
    resources.definitions = new FemaleExternalStrings('definitions');
    resources.questions = new FemaleExternalStrings('questions');
  }

  create () {
    super.create();
    new Textbox(this, 840, 60, 400, 270);

    resources.definitionDisplay = this.add.text(860, 80, resources.infoText,
      {
        fontFamily: 'Assistant',
        fontSize: '30px',
        fill: '#000',
        wordWrap: {width: 380}
      }
    );
    this.add.image(383.4, 300.05, 'femaleExternal');

    for (let organ in resources.organs) {
      var width = 140;
      if (resources.organs[organ].name.includes(' ')) {
        width = 180;
      }
      var rect = this.add.rectangle(0, 0, width, 45, 0xf4bda8);
      rect.setStrokeStyle(2, 0xf58b62);
      
      var text = this.add.text(0, 0, resources.organs[organ].name, {
        fontFamily: 'Open Sans', 
        fontStyle: 'bold', 
        fontSize: '28px', 
        color: '#050709'
      }).setOrigin(0.5);
  
      var container = this.add.container(resources.organs[organ].labelX, resources.organs[organ].labelY, [rect, text]);
  
      container.setSize(rect.width, rect.height)
        .setInteractive({useHandCursor:true})
        .on('pointerover', function() {
          this.list[0].setFillStyle(0xf4d9cf);
        })
        .on('pointerout', function() {
          this.list[0].setFillStyle(0xf4bda8);
        })
        .on('pointerup', () => {
          resources.definitionDisplay.setText(resources.definitions[organ]);
      });
      
      this.add.existing(container);
    }
    
    resources.backButton = new SceneButton(this, 1200, 567, 0.1, 'reproductiveTitle', 'backButton');
    resources.infoButton = new InfoButton(this, 1200, 507, 0.1, infoText, resources, 'infoButton');
    resources.questionButton = new QuestionButton(this, 1140, 507, 0.1, resources.questions, 'questionButton');
  }
}

var resources = {
  infoText: "Female reproductive system (vulva).\n\nClick on each label to learn what it does.",
  organs: {
    clitoris: {
      name: 'Clitoris',
      labelX: 92.55,
      labelY: 150.55
    },
    urethra: {
      name: 'Urethra',
      labelX: 111.05,
      labelY: 238.6
    },
    anus: {
      name: 'Anus',
      labelX: 124.9,
      labelY: 396
    },
    outerLabia: {
      name: 'Outer Labia',
      labelX: 708.95,
      labelY: 124.4
    },
    innerLabia: {
      name: 'Inner Labia',
      labelX: 703.8,
      labelY: 225.7
    },
    vagina: {
      name: 'Vagina',
      labelX: 656.1,
      labelY: 317.45
    },
    hymen: {
      name: 'Hymen',
      labelX: 111.05,
      labelY: 318.5
    }
  }
};

function infoText (resources) {
  resources.definitionDisplay.setText(resources.infoText);
}


