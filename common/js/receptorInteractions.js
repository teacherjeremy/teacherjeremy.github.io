
export default class ReceptorInteractions {
  constructor(shapes, textbox, textContent, pixelPerfect, button) {
    for (let shape of shapes) {
      shape.receptor.setInteractive({pixelPerfect: pixelPerfect})
        .on('pointerover', function() {
          this.setBlendMode(Phaser.BlendModes.SCREEN);
        })
        .on('pointerout', function() {
          this.setBlendMode(Phaser.BlendModes.NORMAL);
        })
        .on('pointerup', function() {
          if (button) {
            button.visible = true; 
          }
          if (shape.receptor.isBound){
            shape.displayText();
          }
          
      });

      if (textbox) {
        shape.receptor.textbox = textbox;
        shape.receptor.textContent = textContent;
      }

    }
  }
}
