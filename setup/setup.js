/* 
This scene is called only on the initial start of the app.
It preloads resources and sets up the url router.
*/

export default class Setup extends Phaser.Scene {
  constructor() {
    super({ key: "setup" });
  }

  preload() {
    /*Loading progress bar. From Zenva.*/
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;

    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(
      width / 3.333,
      height / 2.222,
      width / 2.5,
      height / 12
    );

    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - height / 10,
      text: "Loading...",
      style: {
        fontFamily: "Assistant",
        fontSize: 60 * (width / 2560),
        fill: "#ffffff",
        shadow: {
          offsetX: 0,
          offsetY: 0,
          color: "#000",
          blur: 6,
          fill: true,
        },
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - height / 120,
      text: "0%",
      style: {
        fontSize: 38 * (width / 2560),
        fill: "#ffffff",
      },
    });

    percentText.setOrigin(0.5, 0.5);

    this.load.on("progress", function (value) {
      percentText.setText(parseInt(value * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(
        width / 3.2,
        height / 2.143,
        (width / 2.666) * value,
        height / 20
      );
    });

    this.load.on("complete", function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });

    /* Some scenes may use images that were loaded for other scenes*/

    // common

    this.load.image(
      "homeButton",
      "../../../img/common/images/buttons/home.png"
    );
    this.load.image(
      "backButton",
      "../../../img/common/images/buttons/back.png"
    );
    this.load.image("upButton", "../../../img/common/images/buttons/up.png");
    this.load.image(
      "downButton",
      "../../../img/common/images/buttons/down.png"
    );
    this.load.image(
      "resetButton",
      "../../../img/common/images/buttons/reset.png"
    );
    this.load.image(
      "infoButton",
      "../../../img/common/images/buttons/info.png"
    );
    this.load.image(
      "questionButton",
      "../../../img/common/images/buttons/question.png"
    );

    // backgrounds
    this.load.image(
      "background",
      "../../../img/common/images/backgrounds/interactive.png"
    );
    this.load.image(
      "blueBackground",
      "../../../img/common/images/backgrounds/blue.png"
    );
    this.load.image(
      "greenBackground",
      "../../../img/common/images/backgrounds/green.png"
    );
    this.load.image(
      "yellowBackground",
      "../../../img/common/images/backgrounds/yellow.png"
    );
    this.load.image(
      "purpleBackground",
      "../../../img/common/images/backgrounds/purple.png"
    );

    this.load.image("titleText", "../../../img/common/images/titleText.png");

    // femaleChanges
    this.load.image(
      "estrogenReceptor",
      "../../../img/common/images/objects/estrogenReceptor.png"
    );
    this.load.image(
      "estrogen",
      "../../../img/common/images/objects/estrogen.png"
    );
    this.load.image(
      "testosteroneReceptor",
      "../../../img/common/images/objects/testosteroneReceptor.png"
    );
    this.load.image(
      "testosterone",
      "../../../img/common/images/objects/testosterone.png"
    );
    this.load.image(
      "girlChanges",
      "../../../img/Puberty/Changes/images/girl.png"
    );

    // maleChanges
    this.load.image(
      "boyChanges",
      "../../../img/Puberty/Changes/images/boy.png"
    );

    // emotions
    this.load.image(
      "brainEmotions",
      "../../../img/Puberty/Emotions/images/brain.png"
    );
    this.load.image(
      "brainDown",
      "../../../img/Puberty/Emotions/images/brainDown.png"
    );

    // femaleExternal
    this.load.image(
      "femaleExternal",
      "../../../img/Puberty/External/images/femaleExternal.png"
    );

    // maleExternal
    this.load.image(
      "maleExternal",
      "../../../img/Puberty/External/images/maleExternal.png"
    );
    this.load.image(
      "foreskin",
      "../../../img/Puberty/External/images/foreskin.png"
    );

    // femaleInternal
    this.load.image(
      "femaleBackground",
      "../../../img/Puberty/Female-Internal/images/background.png"
    );
    this.load.image(
      "femaleInternal",
      "../../../img/Puberty/Female-Internal/images/FRS diagram.png"
    );
    this.load.image(
      "frsLabels",
      "../../../img/Puberty/Female-Internal/images/FRS labels.png"
    );
    this.load.image(
      "frsLabelLines",
      "../../../img/Puberty/Female-Internal/images/FRS label lines.png"
    );
    this.load.image(
      "ovaries",
      "../../../img/Puberty/Female-Internal/images/ovaries.png"
    );
    this.load.image(
      "fTubes",
      "../../../img/Puberty/Female-Internal/images/FT.png"
    );
    this.load.image(
      "uterus",
      "../../../img/Puberty/Female-Internal/images/uterus.png"
    );
    this.load.image(
      "vagina",
      "../../../img/Puberty/Female-Internal/images/vagina.png"
    );
    this.load.image(
      "cervix",
      "../../../img/Puberty/Female-Internal/images/cervix.png"
    );

    // hormones
    this.load.image("boy", "../../../img/Puberty/Hormones/images/boy.png");
    this.load.image("girl", "../../../img/Puberty/Hormones/images/girl.png");
    this.load.image("brain", "../../../img/Puberty/Hormones/images/brain.png");
    this.load.image(
      "baseHormone",
      "../../../img/common/images/objects/baseHormone.png"
    );

    this.load.image(
      "receptorCell",
      "../../../img/Puberty/Hormones/images/receptorCell.png"
    );
    this.load.image(
      "receptorCell2",
      "../../../img/Puberty/Hormones/images/receptorCell2.png"
    );

    this.load.image(
      "signalCell",
      "../../../img/Puberty/Hormones/images/signalCell.png"
    );
    this.load.image(
      "signalCell2",
      "../../../img/Puberty/Hormones/images/signalCell2.png"
    );

    this.load.image("backButton", "../../common/images/buttons/back.png");
    this.load.image("infoButton", "../../common/images/buttons/info.png");

    // maleInternal
    this.load.image(
      "bladder",
      "../../../img/Puberty/Male-internal/images/bladder.png"
    );
    this.load.image(
      "labels",
      "../../../img/Puberty/Male-internal/images/labels.png"
    );
    this.load.image(
      "labelLines",
      "../../../img/Puberty/Male-internal/images/label lines.png"
    );
    this.load.image(
      "epididymis",
      "../../../img/Puberty/Male-internal/images/epididymis.png"
    );
    this.load.image("MRS", "../../../img/Puberty/Male-internal/images/MRS.png");
    this.load.image(
      "prostate",
      "../../../img/Puberty/Male-internal/images/prostate.png"
    );
    this.load.image(
      "svesicle",
      "../../../img/Puberty/Male-internal/images/svesicle.png"
    );
    this.load.image(
      "teste",
      "../../../img/Puberty/Male-internal/images/teste.png"
    );
    this.load.image(
      "urethra",
      "../../../img/Puberty/Male-internal/images/urethra.png"
    );
    this.load.image(
      "vasdeferens",
      "../../../img/Puberty/Male-internal/images/vasdeferens.png"
    );

    this.load.image(
      "mrsBackground",
      "../../../img/Puberty/Male-internal/images/MRSbackground.png"
    );
    this.load.image(
      "mrsInternal",
      "../../../img/Puberty/Male-internal/images/MRSinternal.png"
    );

    // period
    this.load.spritesheet(
      "topSpritesheet",
      "../../../img/Puberty/Menstruation/images/top4 sprite.png",
      { frameWidth: 300, frameHeight: 69, margin: 0, spacing: 0 }
    );
    this.load.spritesheet(
      "leftSpritesheet",
      "../../../img/Puberty/Menstruation/images/left4 sprite.png",
      { frameWidth: 120, frameHeight: 214.5, margin: 0, spacing: 0 }
    );
    this.load.image(
      "uterusMask",
      "../../../img/Puberty/Menstruation/images/uterus.png"
    );

    // pregnancy
    this.load.image(
      "picture0",
      "../../../img/Puberty/Pregnancy/images/embryo.png"
    );
    this.load.image(
      "picture1",
      "../../../img/Puberty/Pregnancy/images/month 1.jpg"
    );
    this.load.image(
      "picture2",
      "../../../img/Puberty/Pregnancy/images/month 2.jpg"
    );
    this.load.spritesheet(
      "picture3",
      "../../../img/Puberty/Pregnancy/images/fingers-spritesheet.png",
      { frameWidth: 600, frameHeight: 338, margin: 0, spacing: 0 }
    );
    this.load.image(
      "picture4",
      "../../../img/Puberty/Pregnancy/images/twins.jpg"
    );
    this.load.spritesheet(
      "picture5",
      "../../../img/Puberty/Pregnancy/images/yawn-spritesheet.png",
      { frameWidth: 316, frameHeight: 338, margin: 0, spacing: 0 }
    );
    this.load.spritesheet(
      "picture6",
      "../../../img/Puberty/Pregnancy/images/heart-spritesheet.png",
      { frameWidth: 436, frameHeight: 503, margin: 0, spacing: 0 }
    );
    this.load.spritesheet(
      "picture7",
      "../../../img/Puberty/Pregnancy/images/kick-spritesheet.png",
      { frameWidth: 600, frameHeight: 338, margin: 0, spacing: 0 }
    );
    this.load.spritesheet(
      "picture8",
      "../../../img/Puberty/Pregnancy/images/breathe-spritesheet.png",
      { frameWidth: 600, frameHeight: 338, margin: 0, spacing: 0 }
    );
    this.load.image(
      "picture9",
      "../../../img/Puberty/Pregnancy/images/term.png"
    );

    this.load.image(
      "buttonUp",
      "../../../img/common/images/buttons/grey_button_up.png"
    );
    this.load.image(
      "buttonDown",
      "../../../img/common/images/buttons/grey_button_down.png"
    );

    this.load.image(
      "monitor",
      "../../../img/Puberty/Pregnancy/images/monitor2.png"
    );
    this.load.image(
      "ultrasound",
      "../../../img/Puberty/Pregnancy/images/ultrasound2.png"
    );

    // rsGame male
    this.load.spritesheet(
      "spermSpritesheet",
      "../../../img/Puberty/rsGame/images/sperm4_spritesheet.png",
      { frameWidth: 28, frameHeight: 215, margin: 10, spacing: 20 }
    );
    this.load.image(
      "maleBackgroundGame",
      "../../../img/Puberty/rsGame/images/maleBackgroundGame.png"
    );
    this.load.image(
      "mrsGame",
      "../../../img/Puberty/rsGame/images/mrsGame.png"
    );
    this.load.image(
      "maleLabelLinesGame",
      "../../../img/Puberty/rsGame/images/male label lines game.png"
    );
    // rsGame female
    this.load.image("egg", "../../../img/Puberty/rsGame/images/egg.png");
    this.load.image("egg2", "../../../img/Puberty/rsGame/images/egg2.png");
  }

  create() {
    // Locks app in landcape mode. This must happen after initial load screen for ios.
    window.screen.orientation.lock("landscape");

    // Adds event listener to allow navigation by url. Defaults to remain on current scene.
    window.hashListener = window.addEventListener("hashchange", () => {
      var currentScene;

      for (var i = 0; i < this.scene.manager.scenes.length; i++) {
        if (this.scene.isActive(this.scene.manager.scenes[i])) {
          currentScene = this.scene.manager.scenes[i];
        }
      }

      for (var i = 0; i < this.scene.manager.scenes.length; i++) {
        if (
          this.scene.manager.scenes[i].scene.key ===
          window.location.hash.substring(2)
        ) {
          this.scene.stop(currentScene);
          this.scene.start(window.location.hash.substring(2));
        }
      }
    });

    // Checks if there is initially another scene name at the end of the url. If so, start that scene.
    var initialScene = false;
    for (var i = 0; i < this.scene.manager.scenes.length; i++) {
      if (
        this.scene.manager.scenes[i].scene.key ===
        window.location.hash.substring(2)
      ) {
        this.scene.switch(window.location.hash.substring(2));

        initialScene = true;
        break;
      }
    }

    // Default to mainTitle.
    if (!initialScene) {
      window.location.hash = "/mainTitle";
    }
  }
}
