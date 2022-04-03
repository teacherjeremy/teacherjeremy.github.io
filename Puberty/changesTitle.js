import TitleScreen from "../../../common/js/titleScreen.js";
import SceneButton from "../../../common/js/sceneButton.js";
import BaseScene from "./base.js";

export default class ChangesTitle extends BaseScene {
  constructor() {
    super("changesTitle");
  }

  preload() {
    super.preload();
  }

  create() {
    super.create("purpleBackground");

    var sceneButtons = {
      hormone2Button: {
        color: "0xffa70f",
        text: "What is\na hormone?",
        nextScene: "hormoneFunction",
      },
      hormoneButton: {
        color: "0x3a86ff",
        text: "How does puberty begin?",
        nextScene: "hormones",
      },
      /*
      femaleButton: {
        color: "0x11887d",
        text: "What are the female changes?",
        nextScene: "femaleChanges",
      },

      maleButton: {
        color: "0xfb5607",
        text: "What are the male changes?",
        nextScene: "maleChanges",
      },
*/
      emotionsButton: {
        color: "0xefa929",
        text: "Why all these new feelings?",
        nextScene: "emotions",
      },
    };

    new TitleScreen(this, sceneButtons, 400, 250);

    this.homeButton = new SceneButton(
      this,
      1200,
      567,
      0.1,
      "mainTitle",
      "homeButton"
    );
  }
}
