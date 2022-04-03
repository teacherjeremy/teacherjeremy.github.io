import SceneButton from '../../../common/js/sceneButton.js';
import PregnancyStrings from './pregnancyStrings.js';
import Textbox from '../../../common/js/textbox.js';
import InfoButton from '../../../common/js/infoButton.js';
import QuestionButton from '../../../common/js/questionButton.js';
import BaseScene from '../../base.js';
    
export default class Pregnancy extends BaseScene {
  constructor() {
    super('pregnancy');
  }

  preload () {
    resources.definitions = new PregnancyStrings('definitions');
    resources.questions = new PregnancyStrings('questions');

  }

  create () {
    super.create();
    resources.stages = this.add.group();
    resources.scene = this;

    resources.ultrasound = this.add.image(850, 480, 'ultrasound');
    resources.monitor = this.add.image(350, 300, 'monitor');

    this.anims.create({
      key: 'fingers',
      frames: this.anims.generateFrameNumbers('picture3'),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'yawn',
      frames: this.anims.generateFrameNumbers('picture5'),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'heart',
      frames: this.anims.generateFrameNumbers('picture6'),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'kick',
      frames: this.anims.generateFrameNumbers('picture7'),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'breathe',
      frames: this.anims.generateFrameNumbers('picture8'),
      frameRate: 10,
      repeat: -1
    });


    //resources.pregnancyPicture = this.add.sprite(350, 250, 'picture0');
   // resources.pregnancyPicture.setScale(400/resources.pregnancyPicture.height)

    resources.pregnancyPictureNames = {
      0: 'picture0',
      1: 'picture1',
      2: 'picture2',
      3: 'picture3',
      4: 'picture4',
      5: 'picture5',
      6: 'picture6',
      7: 'picture7',
      8: 'picture8',
      9: 'picture9'
    }
    
    new Textbox(this, 760, 65, 470, 360);

    resources.definitionDisplay = this.add.text(780, 85, '',
      {
        fontFamily: 'Assistant',
        fontSize: '30px',
        fill: '#000',
        wordWrap: { width: 440 }
      }
    );

    resources.definitionDisplay.setText(resources.definitions.infoText);

    var monthX = 90;
    for (var i = 0; i < 10; i++) {
      var monthText = this.add.text(0, 0, i, 
        {
          fontFamily: 'Assistant',
          fontSize: '47px',
          fill: '0x333333'
        }
      ).setOrigin(0.5);
      
      var monthBackgroundScale = 0.2
      var monthBackground = this.add.image(0, 0, 'buttonUp').setScale(monthBackgroundScale);

      var month = this.add.container(monthX, 515, [monthBackground, monthText]);
      monthX += 53;

      month.setSize(monthBackground.width * monthBackgroundScale, monthBackground.height * monthBackgroundScale);
      month.setInteractive({useHandCursor: true})
        .on('pointerdown', function () {
          this.list[0].setTexture('buttonDown');
          this.list[1].y = 2;
        })
        .on('pointerup', function() {
          resources.definitionDisplay.setText(resources.definitions[this.list[1]._text]);

          for (var j = 0; j < resources.stages.getChildren().length; j++) {
            var monthButton = resources.stages.getChildren()[j];
            monthButton.list[0].setTexture('buttonUp');
            monthButton.list[1].y = 0;
          }
          this.list[0].setTexture('buttonDown');
          this.list[1].y = 2;

          if (resources.pregnancyPicture) {
            resources.pregnancyPicture.destroy();
          }
         
          resources.pregnancyPicture = resources.scene.add.sprite(350, 250, resources.pregnancyPictureNames[this.list[1]._text]);
        
          var scale = 400/resources.pregnancyPicture.height;
          resources.pregnancyPicture.setScale(scale);

        if (this.list[1]._text === '3') {
          resources.pregnancyPicture.setCrop(50, 0, 500, 400)
            .play('fingers');
        } else if (this.list[1]._text === '5') {
          resources.pregnancyPicture.play('yawn');
        } else if (this.list[1]._text === '6') {
          resources.pregnancyPicture.play('heart');
        } else if (this.list[1]._text === '7') {
          resources.pregnancyPicture.setCrop(50, 0, 500, 400)
            .play('kick');
        } else if (this.list[1]._text === '8') {
          resources.pregnancyPicture.setCrop(50, 0, 500, 400)
            .play('breathe');
        }
      });
      
      resources.stages.add(month);
    }

    resources.infoButton = new InfoButton(this, 1200, 507, 0.1, infoText, resources, 'infoButton');
    resources.backButton = new SceneButton(this, 1200, 567, 0.1, 'periodTitle', 'backButton');
    resources.questionButton = new QuestionButton(this, 1140, 507, 0.1, resources.questions, 'questionButton');

  }
}

var resources = {
};

function infoText (resources) {
  resources.definitionDisplay.setText(resources.definitions.infoText);
}
