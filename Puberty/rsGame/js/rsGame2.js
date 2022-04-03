import SceneButton from '../../../common/js/sceneButton.js';
import Textbox from '../../../common/js/textbox.js';
import ResetButton from '../../../common/js/resetButton.js';
import BaseScene from '../../base.js';

    
export default class RSGame extends BaseScene {
  constructor() {
    super('rsGame2');
  }

  preload () {

  }

  create () {
    super.create();
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    resources.scene = this;

    new Textbox(this, 790, 75, 430, 210);
    resources.guide = this.add.text(810, 95, resources.infoText,
      {
        fontFamily: 'Assistant',
        fontSize: '30px',
        fill: '#000',
        wordWrap: {width: 400}
      }
    );

    resources.background = this.add.image(454.25, 310.35, 'femaleBackground').setAlpha(0.3);
    resources.femaleInternal = this.add.image(454.25, 290.55, 'femaleInternal'); 
    resources.labelLines = this.add.image(377.6, 299.2, 'frsLabelLines');
    resources.egg = this.add.image (249, 224, 'egg2');

  //Initial egg tween.
    var ovaryTween = this.tweens.add({
      targets: resources.egg,
      x: 260,
      y: 215,
      ease: 'Quad.easeInOut',      
      duration: 1500,
      yoyo: true,
      repeat: -1
    });
  
   //Create swimming animation for sperm.
    this.anims.create({
      key: 'swim',
      frames: this.anims.generateFrameNumbers('spermSpritesheet', { frames: [0, 1] }),
      frameRate: 8,
      repeat: -1
    });

    resources.sperm = this.add.sprite(454.2, 505, 'spermSpritesheet');
    resources.sperm.setScale(0.25).setAlpha(0);
    resources.sperm.play('swim');

    resources.uterus = this.add.image(454.65, 248.6, 'uterusMask');

    // Create labels for user to add to diagram.
    resources.labels = this.physics.add.group({collideWorldBounds:true});

    resources.femaleOrgans = ['Ovary', 'Fallopian Tube', 'Uterus', 'Cervix', 'Vagina'];

    // This will randomize the order the labels appear on screen.
    shuffle(resources.femaleOrgans);

    // Initial x y for labels.
    var labelX = 920;
    var labelY = 350;
    var labelCount = 1;

    // Create label containers.
    for (let organ in resources.femaleOrgans) {
      var width = 140;

      if (resources.femaleOrgans[organ].includes(' ')) {
        width = 190;
      }

      var rect = this.add.rectangle(0, 0, width, 45, 0xf4bda8);
      var text = this.add.text(0, 0, resources.femaleOrgans[organ], {
        fontFamily: 'Open Sans', 
        fontStyle: '', 
        fontSize: '25px', 
        color: '#050709'
      }).setOrigin(0.5);
  
      var container = this.add.container(labelX, labelY, [rect, text]);
  
      container.setSize(rect.width, rect.height);
      container.setInteractive({draggable: true, useHandCursor:true, setCollideWorldBounds: true});
      resources.labels.add(container);

      if (labelCount === Math.ceil(resources.femaleOrgans.length / 2)) {
        labelX = labelX + 190 + 20;
        labelY = 350;
      } else {
        labelY += 65;
      }

      labelCount++; 
    }


    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    for (let organ in organs) {
      resources[organ] = organs[organ];
    }

    resources.currentOrgan = resources.ovary;

    // Sets hit area where user must drop the current label.
    resources.hitBox = this.add.rectangle(resources.currentOrgan.x, resources.currentOrgan.y, 35, 25);

    // Create physics group to see hitBox for debugging. Can remove for production.
    resources.hitBoxGroup = this.physics.add.staticGroup();
    resources.hitBoxGroup.add(resources.hitBox);

    this.input.on('dragend', (pointer, gameObject) => {
      if (gameObject.list[1].text === resources.currentOrgan.name) {
        var bounds = gameObject.getBounds();
        var boundsHitBox = resources.hitBox.getBounds();
        var overlap = Phaser.Geom.Intersects.RectangleToRectangle(bounds, boundsHitBox);

        if (overlap) {
          gameObject.x = resources.hitBox.x;
          gameObject.y = resources.hitBox.y;
          gameObject.input.draggable = false;
  
          nextOrgan(this);
        }
      }
    });
    
    resources.backButton = new SceneButton(this, 1200, 567, 0.1, 'reproductiveTitle', 'backButton');
    resources.resetButton = new ResetButton(this, 1140, 567, 0.1, 'resetButton');

   }
}

var resources = {
  infoText: 'Good job! Now it is time to guide the egg.\n\nWhere do eggs get made?',
  organText: {
    fTube: 'This is where the egg and sperm meet.',
    uterus: 'The egg has been fertilized!\n\nWhere will the baby develop?',
    cervix: 'Next is the gateway to the uterus.',
    vagina: 'Now guide the sperm to the egg.\n\nThis is where sperm enter the body.',
    end: 'Nice work!\n\nThe baby will grow in the uterus for the next 9 months until it is ready to be born.'
  }
};

// The organ x and y are the coordinates for the label hitBox.
var organs = {
  ovary: {
    name: 'Ovary',
    x: 224,
    y: 345,
    next: 'Fallopian Tube',
    tweens: [
      {
        x: 200.5,
        y: 172,
        ease: 'Power1',      
        duration: 1000
      },
      {
        x: 190,
        y: 112,
        ease: 'Power1',      
        duration: 1000,
        offset: '-=100',
        onComplete: function () {
          addHitBox(resources.scene);
          resources.guide.setText(resources.organText.fTube);
        },
      },
    ]
  },
  fTube: {
    name: 'Fallopian Tube',
    x: 127.2,
    y: 245,
    next: 'Vagina',
    tweens: [
      {
        x: 243.5,
        y: 77,
        ease: 'Power1',      
        duration: 1500
      }
    ]
  },
  uterus: {
    name: 'Uterus',
    x: 639.7,
    y: 317,
    next: null,
    tweens: [
      {
        x: 286,
        y: 92,
        ease: 'Linear',      
        duration: 500
      },     
      
      {
        x: 327,
        y: 94,
        ease: 'Linear',      
        duration: 700
      },

      {
        x: 356,
        y: 154,
        ease: 'Linear',      
        duration: 700
      },
      
      {
        x: 410.5,
        y: 190.7,
        ease: 'Linear',      
        duration: 800,
        angle: -16,
        offset: '-=0'
      },
      
      {
        x: 437,
        y: 241,
        ease: 'Sine.easeInOut',      
        duration: 1000,
        angle: -16,
        offset: '-=50'
      },
      {
        x: 422,
        y: 257,
        ease: 'Sine.easeInOut',      
        duration: 1000,
        angle: -16,
        offset: '-=20',
        onComplete: () => {
          resources.guide.setText(resources.organText.end);
        }      
      },
    ]
  },
  cervix: {
    name: 'Cervix',
    x: 642.8,
    y: 390,
    next: 'Uterus',
    tweens: []
  },
  vagina: {
    name: 'Vagina',
    x: 639.7,
    y: 465,
    next: 'Cervix',
    tweens: []
  }
};


function nextOrgan(scene) {
  // Stops yoyo tween for ovary.
  if (resources.currentOrgan.name === 'Ovary') {
    var tweens = scene.tweens.getTweensOf(resources.egg);
    tweens[0].stop();
  }

  var timeline = scene.tweens.createTimeline({
    targets: resources.egg
  });

  resources.currentOrgan.tweens.forEach(function(tween) {
    tween.targets = resources.egg,
    timeline.add(tween);
  })

  timeline.play();

  if (resources.currentOrgan.name === 'Fallopian Tube') {
    scene.tweens.add({
      targets: resources.sperm,
      x: 454.2,
      y: 485,
      ease: 'Quad.easeInOut',      
      duration: 1500,
      alpha: 1,
      delay: 1000,
      onComplete: function () {
        addHitBox(resources.scene);
        resources.guide.setText(resources.organText.vagina);
      },
    });
  }

  if (resources.currentOrgan.name === 'Vagina') {
    scene.tweens.add({
      targets: resources.sperm,
      x: 454.2,
      y: 440,
      ease: 'Quad.easeOut',      
      duration: 1500,
        onComplete: function () {
          addHitBox(resources.scene);
          resources.guide.setText(resources.organText.cervix);
        },
    });
  }

  if (resources.currentOrgan.name === 'Cervix') {
    var spermTimeline = scene.tweens.createTimeline();

    spermTimeline.add({
      targets: resources.sperm,
      x: 454.2,
      y: 252,
      ease: 'Sine.easeInOut',      
      duration: 2000
    });
    spermTimeline.add({
      targets: resources.sperm,
      x: 403.2,
      y: 190,
      ease: 'Sine.easeInOut',      
      duration: 1000,
      angle: -48,
      offset: '-=400'
    });
    spermTimeline.add({
      targets: resources.sperm,
      x: 356,
      y: 154,
      ease: 'Sine.easeInOut',      
      duration: 600,
      angle: -40,
      offset: '-=200'
    });
    spermTimeline.add({
      targets: resources.sperm,
      x: 342,
      y: 119,
      ease: 'Sine.easeInOut',      
      duration: 600,
      angle: -30,
      offset: '-=200'
    });
    
    spermTimeline.add({
      targets: resources.sperm,
      x: 327,
      y: 99,
      ease: 'Sine.easeInOut',      
      duration: 400,
      angle: -80,
      offset: '-=20'
    });    
    spermTimeline.add({
      targets: resources.sperm,
      x: 264.5,
      y: 80,
      ease: 'Quad.easeOut',      
      duration: 1500,
      onComplete: function () {
        resources.egg.setTexture('egg');
      }
    });
    spermTimeline.add({
      targets: resources.sperm,
      alpha: 0,
      duration: 500,
      onComplete: function () {
        addHitBox(resources.scene);
        resources.guide.setText(resources.organText.uterus);
      },
    });
    spermTimeline.play();
  }

  if (resources.currentOrgan.next !== null) {
    for (let organ in organs) {
      if (organs[organ].name === resources.currentOrgan.next) {
        resources.currentOrgan = organs[organ]
        break;
      }
    }
  } 
}

// Function to shuffle arrays.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function addHitBox(scene) {
  resources.hitBox.destroy();
  resources.hitBox = scene.add.rectangle(resources.currentOrgan.x, resources.currentOrgan.y, 35, 25);
  // Add to physics group for debugging. Can remove for production.
  resources.hitBoxGroup.add(resources.hitBox);
}
