export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontFamily, fontsize, fontColor, key, text) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    
    const button = this.scene.add.image(x, y, key).setInteractive({useHandCursor: true}).setScale(0.1);
    const buttonText = this.scene.add.text(x, y, text, { fontFamily: fontFamily, fontSize: fontsize, color: fontColor });
    

    Phaser.Display.Align.In.Center(button, buttonText);
    this.add(button);
    this.add(buttonText);
    this.scene.add.existing(this);

    return button;

  
  }
}
