export default class MaleChangesStrings {
  constructor(get) {
    
    var definitions = {
      infoText: "Different parts of the body are \"listening\" for hormone messages and waiting to change.\n\nDrag the hormones to each body part to trigger the changes of puberty.",
      voice: 'The voice deepens significantly.\n\nSometimes the voice cracks when it changes, which is perfectly normal.',
      genitals: 'The penis and testicles grow.\n\nErections and ejaculations (sperm leaving the body) begin.\n\nSometimes the first ejaculation happens during sleep (also known as a "wet dream").',
      hair: 'Thick hair starts to grow all around the body, like the arms, legs, and face.\n\nNew hair (called pubic hair) grows around the genitals, and in the armpits.',
      growth: 'There is a "growth spurt", or a time when you get taller pretty quickly.\n\nYou might notice that you need to get new clothes.',
      shoulders: 'Males develop wider shoulders.',
      sweat: 'Sweat changes and gets more smelly. Many people wear deoderant to stop the smell.\n\nThe new sweat causes acne or pimples, another perfectly normal part of puberty.'
    };

    var questions = [
      [
        "Q: Is there an order to the changes of puberty?\n\nA: Everyone is different, but usually one of the first signs of puberty in males is the testicles growing and making sperm. Then you might notice pubic hair and a growth spurt. It is perfectly normal for these changes to happen 'out of order' though."
      ],
      [
        "\nQ: I thought only females have estrogen? Do males have it too?\n\nA: Both males and females make both estrogen and testosterone. They are both important for changes during puberty, as you can see in the activity. In fact, that is part of the reason it is normal for some boys to go through what usually get labeled as 'female' changes. For example, some boys grow a small amount of breast tissue during puberty. This usually goes away."
      ],
      [
        "\nQ: What happens if I get a 'wet dream'?\n\nA: A wet dream is when the body ejaculates, or releases semen. There isn't always a dream with the first ejaculation, but wet dreams are a normal part of puberty. They happen in your sleep, so you won't ejaculate without wanting to when you are awake. It might help to know that usually not a lot of semen comes out during the first ejaculation. You'll want to wash your PJs though."
      ],
      [
        "\nQ: What happens if I get an erection when I don't want to?\n\nA: Erections are a normal function of the body. Especially at the beginning of puberty, they can sometimes happen when you don't want them to. It will go away and usually no one else notices. Once your body gets used to making them erections will usually happen only when you want them to. They also happen naturally during sleep."
      ],
      [
        "\nQ: What is an 'Adam's apple'?\n\nA: During puberty, a lot of males get a bigger bump on their throat. This is because the voice box is growing to make the voice deeper."
      ],
      [
        "\nQ: When will I grow a beard?\n\nA: Facial hair is one of the 'later' changes of puberty, and even once you start growing it, it may take awhile for a full beard to grow. It is up to you if you want to shave or not, both choices are normal."
      ],
      [
        "\nQ: What is the purpose of the new sweat?\n\nA: It is mostly there to protect your skin. Many people like to wear deoderant to stop it from smelling. No reason to wait to get into the habit!"
      ]
    ];

    if (get === 'definitions') {
      return definitions;
    } else if (get === 'questions') {
      return questions;
    }
    
  }
}