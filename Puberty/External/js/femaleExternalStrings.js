export default class femaleExternalStrings {
  constructor(get) {
    var definitions = {
      urethra: 'The urethra is where urine leaves the body.',
      clitoris: 'The clitoris is a small bump at the top of the vulva. Its purpose is for sexual pleasure, and it can be sensitive to touch.',
      outerLabia: 'The outer and inner labia protect the vagina and other parts of the vulva.',
      innerLabia: 'The outer and inner labia protect the vagina and other parts of the vulva.',
      anus: 'The anus is where feces leaves the body.',
      hymen: 'The hymen is a thin piece of skin that goes around the opening to the vagina.',
      vagina: 'The opening to the vagina allows for period flow, and also serves as the birth canal.\n\nThe vagina naturally makes a fluid discharge to clean itself.'
    } 

    var questions = [
      [
        "Q: Sometimes there's a milky liquid in my underwear. Is that normal?\n\nA: Totally! The vagina makes a fluid to clean itself. Sometimes it ends up in the underwear. The fluid is called discharge. It can look different at different times of the menstrual cycle."
      ],
      [
        "\nQ: Does the hymen block the vagina? How do periods get through?\n\nA: The hymen usually doesn't cover the entire entrance to the vagina. It is a circle of skin around the outside, and there is a hole in it that lets period flow out. In some women, the hymen is so small that it may be hard to recognize. In others it covers more of the entrance to the vagina. Sometimes it gets stretched during the first sexual intercourse, which can cause it to bleed. But a lot of times this does not happen. In fact, the hymen is being stretched throughout life just from moving around."
      ],
      [
        "\nQ: How many openings into the body are there?\n\nA: There are three openings: the urethra (for urine), the vagina (for periods), and the anus (for feces)."
      ]
    ]

    if (get === 'definitions') {
      return definitions;
    } else if (get === 'questions') {
      return questions;
    }
  }
}