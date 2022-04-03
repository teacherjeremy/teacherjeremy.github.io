
export default class Receptor extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key, scale, angle, receptorType) {
    super(scene, x, y);

		this.receptor = scene.add.image(x, y, key);
		this.receptor.setOrigin(0.9, 0.5);
    
		scene.physics.add.existing(this);

    this.receptor.setInteractive();

    this.receptor.setScale(scale);
    this.receptor.angle = angle;

    if (receptorType) {
      this.receptor.receptorType = receptorType;
    }

		const radius = this.receptor.height * 0.3 * scale;
		this.body.setCircle(radius);
		this.receptor.y += radius;
		this.receptor.x += radius;

    Receptor.prototype.getBindingSite = function () {
      var bindingSite = this.body.center;

      return bindingSite;
    }

    Receptor.prototype.changeAngle = function (angle) {
      this.receptor.angle = angle;
    }

    Receptor.prototype.returnBounds = function () {
      return this.receptor.getBounds();
    }

    Receptor.prototype.isBound = false;

    Receptor.prototype.displayText = function() {
      if (this.receptor.textbox) {
        this.receptor.textbox.setText(this.receptor.textContent[this.receptor.receptorType]);
      }
    }

   // Receptor.prototype.changeScale = function (scale) {
    //  this.receptor.setScale(scale);
    //  this.body.setCircle(radius*scale);

  //}
  }
}