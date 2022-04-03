
export default class DiagramInteractions {
  constructor(shapes, textbox, textContent, clickObject, clickProperty, pixelPerfect, button) {
    for (let shape of shapes) {
      shape.setInteractive({useHandCursor: true, pixelPerfect: pixelPerfect})
        .on('pointerover', function() {
          this.setBlendMode(Phaser.BlendModes.SCREEN);
        })
        .on('pointerout', function() {
          this.setBlendMode(Phaser.BlendModes.NORMAL);
        })
        .on('pointerup', function() {
          textbox.setText(textContent[shape.texture.key]);
          clickObject[clickProperty] = shape.texture.key;
          if (button) {
            button.visible = true; 
          }  
      });
    }
  }
}
