export default class TitleButton extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, height, color, text, newScene) {
    super(scene);
    this.scene = scene;
    this.x = 0;
    this.y = 0;

    this.buttonWidth = width;
    this.buttonHeight = height;

    // Number added to x, y represent relative offset of text from top left of button box.

    var buttonText = this.scene.add.text(this.x, this.y, text, { 
      fontFamily: 'Calibri', 
      fontSize: 48, 
      color: '#ffffff', 
      align: "center",
      lineSpacing: 8,
      shadow: {
        offsetX: 0,
        offsetY: 0,
        color: '#000',
        blur: 6,
        fill: true
    }, 
      wordWrap: { 
        width: this.buttonWidth - 50
      }
    });

    buttonText.x += this.buttonWidth/2 - buttonText.width/2;
    buttonText.y += this.buttonHeight/2 - buttonText.height/2;

    var buttonBase = this.scene.add.graphics();
    buttonBase.fillStyle(color, 1);
    buttonBase.fillRoundedRect(this.x, this.y, this.buttonWidth, this.buttonHeight, 32);
    buttonBase.lineStyle(4, 0xffffff, 1);
    buttonBase.strokeRoundedRect(this.x, this.y, this.buttonWidth, this.buttonHeight, 32);
    
    var button = this.scene.add.graphics();
    button.fillStyle(color, 1);
    button.fillRoundedRect(this.x, this.y, this.buttonWidth, this.buttonHeight, 32);
    button.lineStyle(4, 0xffffff, 1);
    button.strokeRoundedRect(this.x, this.y, this.buttonWidth, this.buttonHeight, 32);
    


    var hitBox = this.scene.add.rectangle(this.x + this.buttonWidth/2, this.y + this.buttonHeight/2, this.buttonWidth, this.buttonHeight).setInteractive({useHandCursor: true});

    hitBox.on('pointerup', () => {
      window.location.hash = '/' + newScene;
    });

    hitBox.on('pointerover', () => {
      button.setBlendMode(3);
    });

    hitBox.on('pointerout', () => {
      button.setBlendMode(0);
    });

    this.add(buttonBase);
    this.add(button);
    this.add(buttonText);
    this.add(hitBox);
    var sceneButton = this.scene.add.existing(this);
    sceneButton.x = x;
    sceneButton.y = y;

    return this;

  }
}
