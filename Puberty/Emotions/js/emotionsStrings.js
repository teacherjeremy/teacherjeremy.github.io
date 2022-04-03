export default class EmotionsStrings {
  constructor(get) {
    
    var emotions = [
      'New ways of thinking',
      'New hobbies',
      'Crushes',
      'Changing friendships',
      'Being sad sometimes',
      'Discovering who you are',
      'New likes and dislikes',
      'Sexuality',
      'Expressing yourself',
      'More self confident',
      'More unsure of yourself',
      'Making your own choices'
    ];

    var questions = [
      [
        "Q: I'm feeling overwhelmed. What should I do?\n\nA: It makes sense to feel overwhelmed sometimes, and it's okay not to be okay some of the time. Try reaching out to a trusted adult like a parent, relative, or teacher for advice. Sometimes even just sharing what is going on inside helps. Social workers are also great resources. You might have one at your school, or your guardian can put you in touch with one. You can also take time to do things you like to do, like sports or hanging with friends."
      ],
      [
        "\nQ: What do I do about a crush?\n\nA: Crushes can be intense. You might find yourself constantly thinking about a person. It could be about someone you know, like a classmate, or someone you don't know, like a celebrity. It could even be an adult. If it's someone like a celebrity or adult, it is totally okay to feel a crush, but recognize that it is just that -- a feeling. Actual intimate relationships between kids and adults are inappropriate. If it is someone you know, you can tell them you have a crush on them if you want. Just remember, you can't control how another person feels, and if they don't feel the same way, it isn't personal."
      ],
      [
        "\nQ: How do I figure out my sexuality?\n\nA: Sexuality is the feelings of sexual attraction you have towards other people. Some people find themselves attracted to the same sex, others the opposite sex, and some to both. You don't really get to decide, it's something fun you just sort of discover about yourself during puberty. How you decide to express your sexuality is totally up to you. Other people in your life should be supportive of you and your sexuality, and if they aren't, you will find people in life who are."
      ],
      [
        "\nQ: Some of my old friends aren't my friends anymore.\n\nA: Changing friendship is one of the biggest challenges of puberty. As you discover your identity (what you like and don't like), it will change who you want to be friends with, which is okay. You will find the group of people you like to hang out with, and if you haven't yet, you will as life continues to grow and change."
      ],
      [
        "\nQ: Aren't some of these emotions opposites of each other, like 'being confident' and 'being unsure'?\n\nA: Definitely! Humans are complex, and you will feel different things at different times. That is okay, and just another part of being an adult."
      ]
    ];

    if (get === 'emotions') {
      return emotions;
    } else if (get === 'questions') {
      return questions;
    }
  }
}
