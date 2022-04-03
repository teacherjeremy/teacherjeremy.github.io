export default class SceneButton {
  constructor(scene, x, y, scale, switchScene, key, key2) {

    const button = scene.add.image(x, y, key).setInteractive({useHandCursor: true}).setScale(scale);

    button.on('pointerdown', () => {
      if (key2) {
        button.setTexture(key2);
      }
    });

    button.on('pointerup', () => {
      button.setTexture(key);
      window.location.hash = '/' + switchScene;
   //   scene.scene.switch(switchScene);
      // scene.sys.scenePlugin.switch(switchScene);
    });
  }
}