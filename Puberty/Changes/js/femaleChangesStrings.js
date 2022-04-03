export default class FemaleChangesStrings {
  constructor(get) {
    
    var definitions =  {
      infoText: "Different parts of the body are \"listening\" for hormone messages and waiting to change.\n\nDrag the hormones to each body part to trigger the changes of puberty.",
      breasts: 'Often, one of the first signs of puberty is a “breast bud,” a small lump behind the nipple that leads to the development of breasts.',
      genitals: 'The vulva, or the outside part of the genitals (sometimes what gets called the vagina) gets bigger.\n\nThe vagina makes a fluid to clean itself.\n\nPeriods, or the menstrual cycle, also start.',
      hair: 'More hair starts to grow all around the body, like the arms and legs.\n\nNew hair (called pubic hair) grows around the genitals, and in the armpits.',
      growth: 'There is a "growth spurt", or a time when you get taller pretty quickly. You might notice that you need to get new clothes.',
      hips: 'Females develop wider hips.',
      sweat: 'Sweat changes and gets more smelly. Many people wear deoderant to stop the smell.\n\nThe new sweat causes acne or pimples, another perfectly normal part of puberty.'
    }; 

    var questions = [
      [
        "Q: Is there an order to the changes of puberty?\n\nA: Everyone is different, but usually one of the first signs of puberty in females is a breast bud, or a small lump behind the nipple that leads to the development of breasts. Then you might notice vaginal discharge, pubic hair and a growth spurt. It is perfectly normal for these changes to happen 'out of order' though."
      ],
      [
        "\nQ: I thought only males have testosterone? Do females have it too?\n\nA: Both females and males make both estrogen and testosterone. They are both important for changes during puberty, as you can see in the activity. In fact, that is part of the reason it is normal for some girls to go through what usually get labeled as 'male' changes. For example, some girls grow a small amount of hair on the face during puberty. It usually goes away."
      ],
      [
        "\nQ: Is it normal for my breasts to be different sizes?\n\nA: Yes, breasts can be different sizes, and can grow at different rates during puberty."
      ],
      [
        "\nQ: What is a bra?\n\nA: A bra is a piece of clothing that supports the breasts. Some people choose to wear one, and others don't. It is up to you if you choose to wear a bra, and when you decide to start."
      ],
      [
        "\nQ: Sometimes there's a milky liquid in my underwear. Is that normal?\n\nA: Totally! The vagina makes a fluid to clean itself. Sometimes it ends up in the underwear. The fluid is called discharge. It can look different at different times of the menstrual cycle."
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