export default class PeriodStrings {
  constructor(get) {
    var infoText = ['Click on a day of the menstrual cycle on the right and watch what happens on the left.\n\nThe menstrual cycle is a set of changes in the female reproductive system. Each cycle, a lining builds up on the uterus. If there is no pregnancy, the lining is shed, and some of it leaves the body during the period.\n\nJust like a day, week, or year, when one menstrual cycle ends another begins.'];

    var questions = [
      [
        "Q: When will I get my first period?\n\nA: It's hard to know exactly when your first period will come. It may happen around the same age that your mom or sisters first got theirs. When it does happen, you can talk to a trusted adult like a parent, teacher, or school nurse to get a hygiene product like a pad. You can also keep a pad in your backpack so you are prepared no matter when it comes. Friends are usually supportive and willing to share period products."      
      ],
      [
        "\nQ: Is there a lot of blood?\n\nA: Every person is different, and some people have heavier period flows than others. It may be helpful to know that the blood doesn't come out all at once, usually less than a teaspoon (3-5 milliliters) at a time. You may notice the blood seems a bit 'chunky', which is normal."
      ],
      [
      "\nQ: How often will I get my period?\n\nA: It can vary. Every 28 days is just the average (in fact, only around 15% of women actually have cycles that are exactly that long). 'Normal' periods means normal for your body. Especially at the beginning, each cycle may be different and can be anywhere from 20-45 days apart. Later they will become more regular. You can keep track of your periods in your calendar to help know when the next one is coming."
      ],
      [
        "\nQ: How long is each period?\n\nA: Again, everyone is different, but they can be anywhere from 2-7 days."
      ],
      [
        "\nQ: What is a tampon? A pad?\n\nA: There are a lot of period products to stop the blood from getting on your clothes. Pads go in the underwear and catch the blood, and tampons go in the vagina and soak up the blood."
      ],
      [
        "\nQ: Does the egg leave the body with the period?\n\nA: No. If there is no sperm present, the egg disintegrates after 24 hours. The egg leaves the ovary halfway through the cycle, at the opposite time that the period happens."
      ]
    ];

    if (get === 'infoText') {
      return infoText;
    } else if (get === 'questions') {
      return questions;
    }  
  }
}