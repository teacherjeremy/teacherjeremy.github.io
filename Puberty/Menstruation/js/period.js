import SceneButton from '../../../common/js/sceneButton.js';
import InfoButton from '../../../common/js/infoButton.js';
import Popup from '../../../common/js/popup.js';
import QuestionButton from '../../../common/js/questionButton.js';
import PeriodStrings from './periodStrings.js';
import BaseScene from '../../base.js';

export default class Period extends BaseScene {
  constructor() {
    super('period');
  }

  preload () {
    resources.questions = new PeriodStrings('questions');
    resources.infoText = new PeriodStrings('infoText');
  }

  create () {
    super.create();
    resources.scene = this;
    resources.femaleInternal = this.add.image(374.25, 295.55, 'femaleInternal').setScale(1.2);

    // Endometrium spritesheets
    resources.left = this.add.sprite(328.3, 229, 'leftSpritesheet', 0).setScale(0.6);
    resources.right = this.add.sprite(421.2, 229, 'leftSpritesheet', 0);
    resources.right.flipX = true;
    resources.right.setScale(0.6);
    resources.top = this.add.sprite(376, 167, 'topSpritesheet', 0).setScale(0.6);

    // This covers the endometrium animations so they appear to emerge from the uterus.
    resources.uterus = this.add.image(374.65, 245, 'uterusMask').setScale(1.22);
    
    // This sets up the interactive cycle calendar
    var circle = new Phaser.Geom.Circle(970, 300, 210);

    resources.backgroundCircle = this.add.circle(970, 300, 245, 0xcfcffa).setStrokeStyle(5, 0x8e4ab3, 0.7);
    
    resources.stage = this.add.text(circle.x, circle.y - 20, 'Period', 
    {
      fontFamily: 'Assistant',
      fontSize: '70px',
      fill: '#000',
      wordWrap: { width: 190 }
    }).setOrigin(0.5);
    
    resources.dayLabel = this.add.text(resources.backgroundCircle.x, 360, 'Day 1', 
    {
      fontFamily: 'Assistant',
      fontSize: '35px',
      fill: '#000'
    }).setOrigin(0.5, 0);

    resources.circleGroup = this.add.group(); 

    var fillColor = '0xff0000';
    
    for (var i = 1; i < 29; i++) {
      var dayCircle = this.add.circle(0, 0, 19, fillColor);

      var day = this.add.text(0, 0, i, {
        fontFamily: 'Arial',
        fontSize: '19px'
      }).setOrigin(0.5);

      var container = this.add.container(0, 0, [dayCircle, day]);
      container
        .setSize(dayCircle.width, dayCircle.height)
        .setInteractive({useHandCursor:true})
        .on('pointerup', function() {
          changeDay(Number(this.list[1].text));
        });

      resources.circleGroup.add(container);

      if (i === 5) {
        fillColor = '0x33cc33';
      } else if (i === 14) {
        fillColor = '0x0099ff';
      } else if (i === 15) {
        fillColor = '0x33cc33';
      } 
    }

   
    Phaser.Actions.PlaceOnCircle(resources.circleGroup.getChildren(), circle, Phaser.Math.DegToRad(-90), Phaser.Math.DegToRad(270));

    resources.infoButton = new InfoButton(this, 1220, 507, 0.1, infoText, resources, 'infoButton');
    resources.backButton = new SceneButton(this, 1220, 567, 0.1, 'periodTitle', 'backButton');
    resources.questionButton = new QuestionButton(this, 1160, 567, 0.1, resources.questions, 'questionButton');

    newEgg();
    changeDay(1);
  }
}

var resources = {
  currentDay: 1,
  previousDay: 1,
};

function infoText(resources) {
  const screenCenterX = resources.scene.cameras.main.worldView.x + resources.scene.cameras.main.width / 2;
  const screenCenterY = resources.scene.cameras.main.worldView.y + resources.scene.cameras.main.height / 2;
  var width = 600;
  var height = 410;

  if (!resources.popup || !resources.popup.isVisible()) {
    resources.popup = new Popup(resources.scene, screenCenterX - width/2, screenCenterY - height/2, width, height, resources.infoText);
  }
}

// Function to change the day when the user clicks on the cycle calendar.
function changeDay(day) {
  resources.previousDay = resources.currentDay;
  resources.currentDay = day;

  resources.dayLabel.setText('Day ' + day);

  resources.circleGroup.getChildren()[resources.previousDay-1].list[0].setStrokeStyle(0);
  resources.circleGroup.getChildren()[day - 1].list[0].setStrokeStyle(4.5, '0xF1F227');
  
  generateAnimation(resources.previousDay, resources.currentDay);

  // Only plays destroy animation on day 16.
  if (resources.egg) {
    if (day === 16) {
      resources.eggTimeline.play();
      resources.destroyEgg.play();
    } else if (day > 16 || resources.previousDay === 15) {
      resources.egg.destroy();
      delete resources.egg;
    }
  }
  
  // Creates a new egg for days <15 if there is no egg already.
  if (day <= 15 && !resources.egg) {
    newEgg();
  }

  if (day >= 1 && day <= 5) {
    resources.stage.setText('Period');
  } else if (day >= 6 && day <= 14) {
    resources.stage.setText('Lining builds');
  } else if (day === 15) {
    resources.stage.setText('Ovulation');
    resources.eggTimeline.play();
  } else {
    resources.stage.setText('Lining builds');
  }
}

// Function to run endometrium animations on a day change.
function generateAnimation(previousDay, currentDay) {
  var frames = [];

  if (currentDay < previousDay) {
    for (var i = (previousDay - 1); i < 28; i ++) {
      frames.push(i);
    }

    for (var j = 0; j < currentDay; j++) {
        frames.push(j);
    }
  } else {
    for (var i = (previousDay - 1); i < currentDay; i++) {
      frames.push(i);
    }
  }
  
  // Stops previous animation if user changes day before the end of the previous animation.
  if (resources.scene.anims.exists('leftClick')) {
    resources.scene.anims.remove('leftClick');
    resources.scene.anims.remove('topClick');
  }

  resources.scene.anims.create({
    key: 'leftClick',
    frames: resources.scene.anims.generateFrameNumbers('leftSpritesheet', {frames: frames}),
    frameRate: 4
  });

  resources.scene.anims.create({
    key: 'topClick',
    frames: resources.scene.anims.generateFrameNumbers('topSpritesheet', {frames: frames}),
    frameRate: 4
  });

  resources.left.play('leftClick');
  resources.right.play('leftClick');
  resources.top.play('topClick');
}

// Function to create a new egg.
function newEgg() {
  resources.egg = resources.scene.add.image(130, 204, 'egg').setScale(1.5);

  resources.eggTimeline = resources.scene.tweens.createTimeline();

  resources.eggTimeline.add({
    targets: resources.egg,
    x: 70.5,
    y: 152,  
    duration: 500
  });

  resources.eggTimeline.add({
    targets: resources.egg,
    x: 55,
    y: 100,
    duration: 500
  });

  resources.destroyEgg = resources.scene.tweens.createTimeline();
  
  resources.destroyEgg.add({
    targets: resources.egg,
    alpha: 0,
    duration: 1100,
    onComplete: () => {
      if (resources.egg) {
        resources.egg.destroy();
        delete resources.egg;
      }

    }
  })
}