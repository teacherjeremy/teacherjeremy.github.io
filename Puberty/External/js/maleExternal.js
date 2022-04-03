import SceneButton from '../../../common/js/sceneButton.js';
import Textbox from '../../../common/js/textbox.js';
import MaleExternalStrings from './maleExternalStrings.js';
import InfoButton from '../../../common/js/infoButton.js';
import QuestionButton from '../../../common/js/questionButton.js';
import BaseScene from '../../base.js';

    
export default class MaleExternal extends BaseScene {
  constructor() {
    super('maleExternal')
  }

  preload () {
    resources.definitions = new MaleExternalStrings('definitions');
    resources.questions = new MaleExternalStrings('questions');
  }

  create () {
    super.create();
    new Textbox(this, 660, 60, 500, 200);

    resources.definitionDisplay = this.add.text(680, 80, resources.infoText,
      {
        fontFamily: 'Assistant',
        fontSize: '30px',
        fill: '#000',
        wordWrap: {width: 480}
      }
    );
    this.add.image(292.9, 293.15, 'maleExternal');
    this.add.image(678.7, 460.8, 'foreskin');

    for (let organ in resources.organs) {

      var rect = this.add.rectangle(0, 0, 140, 45, 0xf4bda8);
      rect.setStrokeStyle(2, 0xf58b62)
      
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
  infoText: "Male reproductive system.\n\nClick on each label to learn what it does.",
  organs: {
    urethra: {
      name: 'Urethra',
      labelX: 472.55,
      labelY: 57.4
    },
    glans: {
      name: 'Glans',
      labelX: 101.8,
      labelY: 86.05
    },
    shaft: {
      name: 'Shaft',
      labelX: 101.75,
      labelY: 154.85
    },
    scrotum: {
      name: 'Scrotum',
      labelX: 477.8,
      labelY: 281.45
    },
    anus: {
      name: 'Anus',
      labelX: 100.5,
      labelY: 447.5
    },
    foreskin: {
      name: 'Foreskin',
      labelX: 859.5,
      labelY: 442.8
    }
  }
};

function infoText (resources) {
  resources.definitionDisplay.setText(resources.infoText);
}


