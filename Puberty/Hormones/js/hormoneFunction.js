import SceneButton from "../../../common/js/sceneButton.js";
import Hormone from "../../../common/js/hormone.js";
import Receptor from "../../../common/js/receptor.js";
import InfoButton from "../../../common/js/infoButton.js";
import Popup from "../../../common/js/popup.js";
import BaseScene from "../../base.js";

export default class HormoneFunction extends BaseScene {
  constructor() {
    super("hormoneFunction");
  }

  create() {
    super.create();
    resources.cells = this.physics.add.staticGroup();
    resources.scaleFactor = this.registry.get("scaleFactor");

    resources.estrogenReceptor = new Receptor(
      this,
      850.1,
      180.65,
      "estrogenReceptor",
      1,
      155
    );
    resources.testosteroneReceptor = new Receptor(
      this,
      850.5,
      388.1,
      "testosteroneReceptor",
      1,
      200
    );

    resources.cells
      .create(1057.7, 131.5, "receptorCell")
      .setCircle(125)
      .setTint(0x999999);
    resources.cells
      .create(1052.25, 462.15, "receptorCell2")
      .setCircle(115)
      .setTint(0x999999);
    resources.cells
      .create(161.45, 136.2, "signalCell")
      .setCircle(105)
      .setInteractive({ useHandCursor: true });
    resources.cells
      .create(162.3, 453.4, "signalCell2")
      .setCircle(105)
      .setInteractive({ useHandCursor: true });

    // Tween and create-hormone-on-click for estrogen signal cell.
    resources.signalTween = this.tweens.add({
      targets: resources.cells.getChildren()[2],
      alpha: 0.65,
      duration: 1500,
      yoyo: true,
      delay: Math.random() * 1000,
      repeat: -1,
    });

    resources.cells.getChildren()[2].on("pointerup", () => {
      resources.signalTween.stop();
      resources.cells.getChildren()[2].setAlpha(1);

      if (!resources.estrogen) {
        resources.estrogen = new Hormone(
          this,
          238.9,
          117,
          "estrogen",
          1
        ).setAlpha(0);
        this.physics.add.overlap(
          resources.estrogenReceptor,
          resources.estrogen,
          (receptor, hormone) => {
            hormone.on("pointerup", () => {
              hormone.bindReceptor(
                hormone,
                receptor,
                resources.cells.children.entries[0],
                resources
              );
            });
          }
        );
        this.tweens.add({
          targets: resources.estrogen,
          x: resources.estrogen.x + 140,
          alpha: 1,
          duration: 1000,
          onComplete: () => {
            resources.hormones.add(resources.estrogen);
          },
        });
      }
    });

    // Tween and create-hormone-on-click for testosterone signal cell.
    resources.signalTween2 = this.tweens.add({
      targets: resources.cells.getChildren()[3],
      alpha: 0.65,
      duration: 1500,
      yoyo: true,
      delay: Math.random() * 500,
      repeat: -1,
    });

    resources.cells.getChildren()[3].on("pointerup", () => {
      resources.signalTween2.stop();
      resources.cells.getChildren()[3].setAlpha(1);

      if (!resources.testosterone) {
        resources.testosterone = new Hormone(
          this,
          252.6,
          455,
          "testosterone",
          1
        )
          .setAlpha(0)
          .setAngle(200);
        this.physics.add.overlap(
          resources.testosteroneReceptor,
          resources.testosterone,
          (receptor, hormone) => {
            hormone.on("pointerup", () => {
              hormone.bindReceptor(
                hormone,
                receptor,
                resources.cells.children.entries[1],
                resources
              );
            });
          }
        );

        this.tweens.add({
          targets: resources.testosterone,
          x: resources.testosterone.x + 150,
          alpha: 1,
          duration: 1000,
          onComplete: () => {
            resources.hormones.add(resources.testosterone);
          },
        });
      }
    });

    resources.hormones = this.physics.add.group({ collideWorldBounds: true });

    this.physics.add.collider(resources.hormones, resources.cells);

    this.input.on("drag", function (pointer, hormone, dragX, dragY) {
      hormone.x = dragX;
      hormone.y = dragY;
    });

    resources.backButton = new SceneButton(
      this,
      1200,
      567,
      0.1,
      "changesTitle",
      "backButton"
    );
    resources.infoButton = new InfoButton(
      this,
      1200,
      507,
      0.1,
      infoText,
      resources,
      "infoButton"
    );

    resources.scene = this;
  }
}

var resources = {
  infoText:
    'Parts of the body need to send messages to each other. They do it using hormones. Click a cell on the left to make a hormone, and drag it to a cell on the right to send a message. What needs to be true for the cell to "receive" the message? What happens if you try to send a message to the wrong cell?',
};

function infoText(resources) {
  new Popup(resources.scene, 300, 100, 500, 400, resources.infoText);
}
