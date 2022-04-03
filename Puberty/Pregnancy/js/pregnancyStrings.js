export default class PregnancyStrings {
  constructor(get) {
    
    var definitions = {
      infoText: "You can watch a baby grow during pregnancy using a device called an ultrasound.\n\nClick on each month to learn what is happening to the baby.",
      0: 'This is you! (Or at least, it was you.)\n\nThe sperm and egg came together three days ago, and already you have divided into 8 cells. You are on your way to the womb. You have a lot of growing to do!',
      1: "First month:\n\nYou are only the size of a grain of rice, but already you are starting to take shape.\n\nIs that a tail? Don't worry, it will go away.",
      2: 'Second month:\n\nHere come your eyes, mouth, and ears. During pregnancy your food comes from a special organ called the placenta. It connects you to your mother through the umbilical cord (which goes into your belly button!)',
      3: 'Third month:\n\nYou are starting to explore by moving your fingers. Moving in the womb is important to develop the muscles you will use the rest of your life.',
      4: "Fourth month:\n\nLooks like you're not alone! You live in a fluid, which keeps you from bouncing around too much. Sometimes twins have to share a liquid sac and sometimes they each get their own.",
      5: "Fifth month:\n\nYawn! Growing is tiring work, and you will spend a lot of time in the womb sleeping.\n\nYou are now the size of a sweet potato.",
      6: "Sixth month:\n\nYour heart started beating all the way back in the second month, but now it is really cooking. It beats about twice as fast now as it will after you are born.",
      7: 'Seventh month:\n\nBet mom felt that kick! You are moving around a lot. You can also hear what is going on outside and respond to sound and light.',
      8: 'Eighth month:\n\nThe lungs are the last part of you to develop. Your oxygen actually comes in through the umbilical cord, but you practice by breathing in the fluid you live in.',
      9: "Ninth month:\n\nYou are all grown and ready to be born! You'll flip upside down to be born head first.\n\nOnce you are ready there's no stopping you!"
    } 

    var questions = [
      [
        "Q: How old does someone have to be to get pregnant?\n\nA: Technically, a woman can get pregnant once she starts having periods, and a man can start a pregnancy once he produces sperm (although it is rare in the first couple years of puberty). But just because you can have a baby doesn't mean you are ready! It is a big emotional and personal commitment."
      ],
      [
        "\nQ: How do twins happen?\n\nA: One way twins happen is if both ovaries release an egg at the same time. Both eggs can be fertilized and become fraternal twins. Other times one egg is fertilized and then divide in two. That makes identical twins."
      ],
      [
        "\nQ: How does someone know if they are pregnant?\n\nA: When someone is pregnant they stop having periods. So missing a period is one sign of being pregnant. But missing a period can happen for a lot of reasons other than preganancy. Missing periods is especially common at the beginning of puberty. There are medical tests that can show if someone is pregnant."
      ],
      [
        "\nQ: Are there other ways to get a baby?\n\nA: People can have a baby without being pregnant by adopting a child. They can also use a surrogate, where another woman carries the baby."
      ]
    ];

    if (get === 'definitions') {
      return definitions;
    } else if (get === 'questions') {
      return questions;
    }
  }
}