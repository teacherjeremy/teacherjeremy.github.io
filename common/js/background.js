export default class Background {
  constructor(scene) {

    scene.background = scene.add.image(scene.cameras.main.width/2, scene.cameras.main.height/2, 'background');

    scene.background.setScale(scene.cameras.main.width/scene.background.width, scene.cameras.main.height/scene.background.height);
  
    return scene.background;
  }
}
