import Button from './toggleButton.js';

export default class ToggleButton extends Button {
  
  constructor(scene, x, y, fontFamily, fontColor, key1, key2, text, toggleObjects){
    super(scene, x, y, fontFamily, fontColor, key1, key2, text); 
    
    this.button = new Button(scene, x, y, fontFamily, fontColor, key1, key2, text); 
    
      this.button.on('pointerup', function(){
        for (const object in toggleObjects) {
          toggleObjects[object].visible = !toggleObjects[object].visible;
        }
      });
  
    }
  
}
