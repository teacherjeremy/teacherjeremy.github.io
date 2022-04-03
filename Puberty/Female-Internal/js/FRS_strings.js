export default class FRSStrings {
  constructor(get) {
    
    var definitions = {
      fTubes: 'The Fallopian tubes are a passage from the ovary to the uterus.',
      ovaries: 'The ovaries make eggs and hormones (like estrogen).',
      uterus: 'The uterus is where the growing baby develops.',
      vagina: 'The vagina is a passage for period flow and the baby.',
      cervix: 'The cervix is a gateway to the uterus.'
    } 

    var explanations = {
      fTubes: definitions.fTubes + '\n\nThey are where egg and sperm meet and the egg is fertilized.',
      ovaries: definitions.ovaries + '\n\nOne egg is released each menstrual cycle (about once per month).',
      uterus: definitions.uterus + '\n\nEach cycle, a lining builds up. If the egg is fertilized, the baby develops here. Otherwise, the lining gets shed and leaves the body during the period.',
      vagina: definitions.vagina + '\n\nThis is where sperm enters the body.',
      cervix: definitions.cervix
    }

    var questions = [
      [
        "Q: What is the womb?\n\nA: The 'womb' is another name for uterus. Ususally womb is used when talking about where a baby develops during pregnancy."
      ],
      [
        "\nQ: Does it hurt when the egg leaves the ovary?\n\nA: No, you cannot feel when the egg leaves the ovary."
      ],
      [
        "\nQ: I thought the vagina was on the outside.\n\nA: The outside part of the female genitals does often get called the vagina. But it also has another name: the vulva."
      ]
    ]

    if (get === 'definitions') {
      return definitions;
    } else if (get === 'explanations') {
      return explanations;
    } else if (get === 'questions') {
      return questions;
    }
  }
}