export default class Hormone extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, scale) {
    super(scene, x, y, key);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setInteractive({useHandCursor: true, draggable: true});

    this.body.setCircle(36);
    this.setScale(scale);

    Hormone.prototype.isBound = false;

    Hormone.prototype.bindReceptor = function (hormone, receptor, cell, resources) {
      var boundsR = new Phaser.Geom.Circle( receptor.body.center.x, receptor.body.center.y, receptor.body.radius);
      var boundsH = new Phaser.Geom.Circle( hormone.body.center.x, hormone.body.center.y, hormone.body.radius);
      var overlap = Phaser.Geom.Intersects.CircleToCircle(boundsR, boundsH);
      var bindSite = receptor.body.center;
      
      if (overlap) {
        this.setX(bindSite.x);
        this.setY(bindSite.y);
        hormone.isBound = true;

        hormone.angle = receptor.receptor.angle;
      } 

      if (hormone.isBound) {
        if (cell) {
          cell.setTint(0xffffff);
        }
        hormone.hormoneType = receptor.receptor.receptorType;
        hormone.input.draggable = false;
        hormone.body.setImmovable(true);
        receptor.receptor.isBound = true;
        receptor.displayText();

        this.on('pointerover', () => {
          if (this.hormoneType === receptor.receptor.receptorType) {
            receptor.receptor.setBlendMode(Phaser.BlendModes.SCREEN);
          } 
        });
          
        this.on('pointerout', () => {receptor.receptor.setBlendMode(Phaser.BlendModes.NORMAL)});
        
        if (resources) {
          scene.tweens.add({
            targets: hormone,
            alpha: 0,
            delay: 6000,
            duration: 4000,
            onComplete: () => {
              hormone.unbindReceptor(hormone, receptor, cell);
              hormone.destroy();
              delete resources[hormone.texture.key];
              if (hormone.texture.key === 'estrogen') {
                resources.signalTween.restart();
              } else {
                resources.signalTween2.restart();
              }
              
            }
          });
        }
      }
    }

    Hormone.prototype.unbindReceptor = function(hormone, receptor, cell) {
      if (hormone.isBound) {
        cell.setTint(0x999999);
        hormone.isBound = false;
        receptor.receptor.isBound = false;
      
      }

    }
  }
}