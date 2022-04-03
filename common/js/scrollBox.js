import Textbox from '../../../common/js/textbox.js';

// Modified from Phaser examples.
export default class ScrollBox {
  constructor(scene, content, popup, width, height, x, y) {
   
    if (popup) {
      this.screen = scene.add.rectangle(scene.cameras.main.width/2, scene.cameras.main.height/2, scene.cameras.main.width, scene.cameras.main.height, 0x000000, 0.85).setInteractive();
    }

    var widthBuffer = 500;
    var heightBuffer = 150;
    
    !width ? width =  scene.cameras.main.width - widthBuffer : width = width;
    !height ? height =  scene.cameras.main.height - heightBuffer : height = height;

    !x ? x = scene.cameras.main.width / 2 - width / 2 : x = x;
    !y ? y = scene.cameras.main.height / 2 - height / 2 : y = y;


    this.textbox = new Textbox(scene, x, y, width, height);

    var graphics = scene.make.graphics();

    graphics.fillRect(x, y + 10, width, height - 20);

    var mask = new Phaser.Display.Masks.GeometryMask(scene, graphics);

    var text = scene.add.text(x + 20, y + 20, content, { 
      fontFamily: 'Assistant', 
      fontSize: '28px', 
      color: '#000000', 
      wordWrap: { width: width - 20 } 
    }).setOrigin(0);

    text.setMask(mask);

    var minY = height - text.height - 20;
    if (text.height <= height - 20) {
      minY = y + 20;
    }

    //  The rectangle they can 'drag' within
    var zone = scene.add.zone(x, y - 3, width, height + 6).setOrigin(0).setInteractive({useHandCursor: true, draggable: true});
    scene.input.dragDistanceThreshold = 100;

    zone.on('drag', function (pointer) {
     
      if (pointer.isDown) {
        text.y += pointer.velocity.y / 10;
        text.y = Phaser.Math.Clamp(text.y, minY, y + 20);
      }
    })
      .on('dragend', () => {
        zone.x = x;
        zone.y = y - 3;
      });

    var downKey = scene.input.keyboard.addKey('DOWN'); 
    var upKey = scene.input.keyboard.addKey('UP'); 
    var spaceKey = scene.input.keyboard.addKey('SPACE'); 

    downKey.on('down', function() {
      text.y = Phaser.Math.Clamp(text.y - 50, minY, y + 20);
    });

    spaceKey.on('down', function() {
      text.y = Phaser.Math.Clamp(text.y - 50, minY, y + 20);
    });

    upKey.on('down', function() {
      text.y = Phaser.Math.Clamp(text.y + 50, minY, y + 20);
    });

    scene.input.on('wheel', function(pointer, currentlyOver, dx, dy){
      if (dy < 0) {
        text.y = Phaser.Math.Clamp(text.y + 50, minY, y + 20);
      } else {
        text.y = Phaser.Math.Clamp(text.y - 50, minY, y + 20);
      }
    });


    if (popup) {
      this.exitCircle = scene.add.circle(0, 0, 20, 0xffffff).setInteractive({useHandCursor: true});
      this.exitCircleText = scene.add.text(0, 0, 'X', {fontFamily: 'Arial', fontSize: 16, color:'#000000', fontStyle: 'bold'}).setOrigin(0.5);
  
      this.exit = scene.add.container(x + width, y, [this.exitCircle, this.exitCircleText]);
      scene.add.existing(this.exit);
  
      this.exitCircle.on('pointerup', () => {
        this.destroyOverlay();
      })
    }

    ScrollBox.prototype.isVisible = function() {
      return this.textbox.visible;
    }

    ScrollBox.prototype.destroyOverlay = function() {
      scene.input.dragDistanceThreshold = 0;
      
      this.exit.destroy();
      this.textbox.destroy();
      this.screen.destroy();
      text.destroy();
      mask.destroy();
      zone.destroy();
      graphics.destroy();
      scene.tweens._active.forEach((tween) => {
        tween.resume();
      })
    }
  }
}
