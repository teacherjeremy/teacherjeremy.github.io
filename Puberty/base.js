export default class BaseScene extends Phaser.Scene {
  constructor(scene) {
    super({key: scene})
  }

  preload () {


  }

  create (background) {    
    // Defaults to main interactive background
    if (!background) {
      this.background = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, 'background');
    } else {
      this.background = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, background);
    }

    this.background.setScale(this.cameras.main.width/this.background.width, this.cameras.main.height/this.background.height);
    
    // Initialize fonts. Covers a glitch where phaser only loads font on second use.
    var initialFont = this.add.text(0, 0, 'a', {
      fontFamily: 'Assistant',
      fontSize: '25px',
      fill: '#000'
    })

    initialFont.destroy();

  }
}
