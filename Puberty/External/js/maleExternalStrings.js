export default class maleExternalStrings {
  constructor(get) {
    
    var definitions = {
      urethra: 'The urethra is where urine and semen leave the body.',
      glans: 'The glans is the top or head of the penis. It can be sensitive to touch.',
      shaft: 'The shaft holds up the glans of the penis. It can fill with blood and becomes erect, usually during sexual arousal.',
      scrotum: 'The scrotum holds the testicles. It changes size based on the temperature.',
      anus: 'The anus is where feces leaves the body.',
      foreskin: 'The foreskin is a sleeve of skin that covers the penis. It is present in uncircumcised males, and removed in circumcised males.'
    } 

    var questions = [
      [
        "Q: Is it healthier to be circumcised or uncircumcised?\n\nA: Either one is perfectly healthy and normal. If you are uncircumcised, you will need to start cleaning under your foreskin during puberty."
      ],
      [
        "\nQ: Is it normal for the scrotum to 'move' on its own?\n\nA: Absolutely! The scrotum moves on its own, especially in response to temperature. It brings the testicles close to the body when it is cold, and away from the body when it is warm."
      ],
      [
        "\nQ: How many openings are there in the penis?\n\nA: There is only one opening in the penis, the urethra. It lets out both urine and semen (but not at the same time)."
      ]
    ]

    if (get === 'definitions') {
      return definitions;
    } else if (get === 'questions') {
      return questions;
    }
    
  }
}