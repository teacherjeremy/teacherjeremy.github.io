export default class hormonesStrings {
  constructor(get) {

    var instructions = {
      startText: "How does the body know when to start puberty?\n\nIt all starts in the brain. The brain tells the body to start puberty by making a tiny messenger called a hormone.\n\nClick the brain to make a hormone messenger!",
      hormoneText: "Now click on the hormones to send the message to the body to start puberty.",
      genitalsText: "The hormones travel from the brain to the genitals: ovaries in females and testicles in males.\n\nThe genitals then send a message to the rest of the body to start the changes of puberty. How do the genitals send the message? By making hormones of their own!\n\nClick anywhere on the body to send out more hormone messengers.",
      endText: "You're all ready for puberty!\n\nYou'll learn a lot more as you explore the app. Navigate using the buttons below:"
    };
    
    var questions = [
      [
        "Q: When does puberty start?\n\nA: Puberty usually begins between ages 9-16. It is perfectly normal for one person to start puberty before 10, and their friend or classmate to start in their teens. Everyone ends up going through the changes at some point and comes out a normal adult."
      ],
      [
        "\nQ: How long does puberty last?\n\nA: Puberty can last anywhere from 2-5 years. That is for all the changes to happen. That might seem like a long time, but it won't 'feel' the same for that entire time. Some of the changes are slow, and others are fast. Things that might sound scary now will feel normal soon."
      ],
      [
        "\nQ: Why is going through puberty different for everyone?\n\nA: The important thing to know is that everyone's puberty is normal for them. Even though everyone is different, that is totally normal when it comes to puberty. It is important to remember that you and other people your age are going through the same things, and to be nice to each other. There's a lot that's the same for everyone going through puberty (getting taller, feeling new feelings), and a lot that is different (when the changes happen or exactly how tall you get). Some of it is genetics: humans all look different, and puberty is just one of those things that can be different."
      ],
      [
        "\nQ: What if I am intersex?\n\nA: That's a cool thing to know about yourself! Intersex people are born with characteristics that aren't exclusively male or female. There are a lot of ways someone can be intersex. If you are intersex, you may go through some changes and not others. A doctor may be help you to direct puberty the way you want it to go. But being intersex is healthy, and only you get to decide what happens to your body."
      ]
    ];

    if (get === 'instructions') {
      return instructions;
    } else if (get === 'questions') {
      return questions;
    }
  }
}