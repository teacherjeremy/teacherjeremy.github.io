// This scene is called on the initial start of the application and any manual url change.

import TitleButton from "../../../common/js/titleButton.js";
import BaseScene from "./base.js";

export default class MainTitle extends BaseScene {
  constructor() {
    super("mainTitle");
  }

  preload() {
    super.preload();
  }

  create() {
    super.create("blueBackground");

    var sceneButtons = {
      changesButton: {
        color: "0x9a79ff",
        text: "New You:\nChanges, Thoughts, and Feelings",
        nextScene: "changesTitle",
      },

      reproductiveButton: {
        color: "0x00cc34",
        text: "The Reproductive System",
        nextScene: "reproductiveTitle",
      },

      periodButton: {
        color: "0xffa70f",
        text: "All About Pregnancy & Periods",
        nextScene: "periodTitle",
      },

      
    };

    var spacing = 30;
    var width = 450;
    var height = 250;

    this.add.image(194.5, 165.25, "titleText");

    new TitleButton(
      this,
      this.cameras.main.width / 2 - width / 2,
      this.cameras.main.height / 2 - height - spacing,
      width,
      height + 30,
      sceneButtons.changesButton.color,
      sceneButtons.changesButton.text,
      sceneButtons.changesButton.nextScene
    );
/*
    new TitleButton(
      this,
      this.cameras.main.width / 2 - width - spacing,
      this.cameras.main.height / 2 + spacing,
      width,
      height,
      sceneButtons.reproductiveButton.color,
      sceneButtons.reproductiveButton.text,
      sceneButtons.reproductiveButton.nextScene
    );

    new TitleButton(
      this,
      this.cameras.main.width / 2 + spacing,
      this.cameras.main.height / 2 + spacing,
      width,
      height,
      sceneButtons.periodButton.color,
      sceneButtons.periodButton.text,
      sceneButtons.periodButton.nextScene
    );
 */   
  }
  
}
