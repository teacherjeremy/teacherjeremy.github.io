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
    progressBox.fillRect(width / 2 - 160, height / 2 + 20, 320, 50);

    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "30px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "24px monospace",
        fill: "#ffffff",
      },
    });

    percentText.setOrigin(0.5, 0.5);

    this.load.on("progress", function (value) {
      percentText.setText(parseInt(value * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 150, height / 2 + 30, 300 * value, 30);
    });

    this.load.on("complete", function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });

    /* Some scenes may use images that were loaded for other scenes*/

    // common
    this.load.image("homeButton", "../../common/images/buttons/home.png");
    this.load.image("backButton", "../../common/images/buttons/back.png");
    this.load.image("resetButton", "../../common/images/buttons/reset.png");
    this.load.image("infoButton", "../../common/images/buttons/info.png");
    this.load.image(
      "questionButton",
      "../../common/images/buttons/question.png"
    );

    // backgrounds
    this.load.image(
      "background",
      "../../common/images/backgrounds/interactive.png"
    );
    this.load.image(
      "blueBackground",
      "../../common/images/backgrounds/blue.png"
    );
    this.load.image(
      "greenBackground",
      "../../common/images/backgrounds/green.png"
    );
    this.load.image(
      "yellowBackground",
      "../../common/images/backgrounds/yellow.png"
    );
    this.load.image(
      "purpleBackground",
      "../../common/images/backgrounds/purple.png"
    );

    this.load.image("titleText", "../../common/images/titleText.png");

    // femaleChanges
    this.load.image(
      "estrogenReceptor",
      "../../common/images/objects/estrogenReceptor.png"
    );
    this.load.image("estrogen", "../../common/images/objects/estrogen.png");
    this.load.image(
      "testosteroneReceptor",
      "../../common/images/objects/testosteroneReceptor.png"
    );
    this.load.image(
      "testosterone",
      "../../common/images/objects/testosterone.png"
    );
    this.load.image("girlChanges", "./Puberty/Changes/images/girl.png");

    // maleChanges
    this.load.image("boyChanges", "./Puberty/Changes/images/boy.png");

    // emotions
    this.load.image(
      "brainEmotions",
      "../../Puberty/Emotions/images/brainDown.png"
    );
    this.load.image(
      "brainDown",
      "../../Puberty/Emotions/images/brainDown2.png"
    );

    // femaleExternal
    this.load.image(
      "femaleExternal",
      "../../Puberty/External/images/femaleExternal.png"
    );

    // maleExternal
    this.load.image(
      "maleExternal",
      "../../Puberty/External/images/maleExternal.png"
    );
    this.load.image("foreskin", "../../Puberty/External/images/foreskin.png");

    // femaleInternal
    this.load.image(
      "femaleBackground",
      "../../Puberty/Female-Internal/images/background.png"
    );
    this.load.image(
      "femaleInternal",
      "../../Puberty/Female-Internal/images/FRS diagram.png"
    );
    this.load.image(
      "frsLabels",
      "../../Puberty/Female-Internal/images/FRS labels.png"
    );
    this.load.image(
      "frsLabelLines",
      "../../Puberty/Female-Internal/images/FRS label lines.png"
    );
    this.load.image(
      "ovaries",
      "../../Puberty/Female-Internal/images/ovaries.png"
    );
    this.load.image("fTubes", "../../Puberty/Female-Internal/images/FT.png");
    this.load.image(
      "uterus",
      "../../Puberty/Female-Internal/images/uterus.png"
    );
    this.load.image(
      "vagina",
      "../../Puberty/Female-Internal/images/vagina.png"
    );
    this.load.image(
      "cervix",
      "../../Puberty/Female-Internal/images/cervix.png"
    );

    // hormones

    this.load.image("boy", "../../Puberty/Hormones/images/boy.png");
    this.load.image("girl", "../../Puberty/Hormones/images/girl.png");
    this.load.image("brain", "../../Puberty/Hormones/images/brain.png");

    this.load.image(
      "receptorCell",
      "../../Puberty/Hormones/images/receptorCell.png"
    );
    this.load.image(
      "receptorCell2",
      "../../Puberty/Hormones/images/receptorCell2.png"
    );

    this.load.image(
      "signalCell",
      "../../Puberty/Hormones/images/signalCell.png"
    );
    this.load.image(
      "signalCell2",
      "../../Puberty/Hormones/images/signalCell2.png"
    );

    // maleInternal
    this.load.image(
      "bladder",
      "../../Puberty/Male-internal/images/bladder.png"
    );
    this.load.image("labels", "../../Puberty/Male-internal/images/labels.png");
    this.load.image(
      "labelLines",
      "../../Puberty/Male-internal/images/label lines.png"
    );
    this.load.image(
      "epididymis",
      "../../Puberty/Male-internal/images/epididymis.png"
    );
    this.load.image("MRS", "../../Puberty/Male-internal/images/MRS.png");
    this.load.image(
      "prostate",
      "../../Puberty/Male-internal/images/prostate.png"
    );
    this.load.image(
      "svesicle",
      "../../Puberty/Male-internal/images/svesicle.png"
    );
    this.load.image("teste", "../../Puberty/Male-internal/images/teste.png");
    this.load.image(
      "urethra",
      "../../Puberty/Male-internal/images/urethra.png"
    );
    this.load.image(
      "vasdeferens",
      "../../Puberty/Male-internal/images/vasdeferens.png"
    );

    this.load.image(
      "mrsBackground",
      "../../Puberty/Male-internal/images/MRSbackground.png"
    );
    this.load.image(
      "mrsInternal",
      "../../Puberty/Male-internal/images/MRSinternal.png"
    );

    // period
    this.load.spritesheet(
      "topSpritesheet",
      "../../Puberty/Menstruation/images/top4 sprite.png",
      { frameWidth: 300, frameHeight: 69, margin: 0, spacing: 0 }
    );
    this.load.spritesheet(
      "leftSpritesheet",
      "../../Puberty/Menstruation/images/left4 sprite.png",
      { frameWidth: 120, frameHeight: 214.5, margin: 0, spacing: 0 }
    );
    this.load.image(
      "uterusMask",
      "../../Puberty/Menstruation/images/uterus.png"
    );

    // pregnancy
    this.load.image("picture0", "../../Puberty/Pregnancy/images/embryo.png");
    this.load.image("picture1", "../../Puberty/Pregnancy/images/month 1.jpg");
    this.load.image("picture2", "../../Puberty/Pregnancy/images/month 2.jpg");
    this.load.spritesheet(
      "picture3",
      "../../Puberty/Pregnancy/images/fingers-spritesheet.png",
      { frameWidth: 600, frameHeight: 338, margin: 0, spacing: 0 }
    );
    this.load.image("picture4", "../../Puberty/Pregnancy/images/twins.jpg");
    this.load.spritesheet(
      "picture5",
      "../../Puberty/Pregnancy/images/yawn-spritesheet.png",
      { frameWidth: 316, frameHeight: 338, margin: 0, spacing: 0 }
    );
    this.load.spritesheet(
      "picture6",
      "../../Puberty/Pregnancy/images/heart-spritesheet.png",
      { frameWidth: 436, frameHeight: 503, margin: 0, spacing: 0 }
    );
    this.load.spritesheet(
      "picture7",
      "../../Puberty/Pregnancy/images/kick-spritesheet.png",
      { frameWidth: 600, frameHeight: 338, margin: 0, spacing: 0 }
    );
    this.load.spritesheet(
      "picture8",
      "../../Puberty/Pregnancy/images/breathe-spritesheet.png",
      { frameWidth: 600, frameHeight: 338, margin: 0, spacing: 0 }
    );
    this.load.image("picture9", "../../Puberty/Pregnancy/images/term.png");

    this.load.image(
      "buttonUp",
      "../../common/images/buttons/grey_button_up.png"
    );
    this.load.image(
      "buttonDown",
      "../../common/images/buttons/grey_button_down.png"
    );

    this.load.image("monitor", "../../Puberty/Pregnancy/images/monitor2.png");
    this.load.image(
      "ultrasound",
      "../../Puberty/Pregnancy/images/ultrasound2.png"
    );

    // rsGame male
    this.load.spritesheet(
      "spermSpritesheet",
      "../../Puberty/rsGame/images/sperm4_spritesheet.png",
      { frameWidth: 28, frameHeight: 215, margin: 10, spacing: 20 }
    );

    // rsGame female
    this.load.image("egg", "../../Puberty/rsGame/images/egg.png");
    this.load.image("egg2", "../../Puberty/rsGame/images/egg2.png");
  }

  create() {
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
