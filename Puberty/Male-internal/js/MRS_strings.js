export default class MRSStrings {
  constructor(get) {
    
    var definitions = {
      bladder: 'The bladder holds urine.',
      epididymis: 'The epididymis stores sperm.',
      prostate: 'The prostate makes fluid to help the sperm swim.',
      svesicle: 'The seminal vesicles make fluid to feed and protect the sperm.',
      teste: 'The testicles make sperm and hormones (like testosterone).',
      urethra: 'The urethra transports sperm and urine.',
      vasdeferens: 'The vas deferens transports sperm.'
    } 

    var explanations = {
      bladder: definitions.bladder + ' Sperm do not go in here.',
      epididymis: definitions.epididymis + '\n\nThis is where sperm gain the ability to swim.',
      prostate: definitions.prostate + '\n\nSperm and fluid together is called semen.',
      svesicle: definitions.svesicle + '',
      teste: definitions.teste + '\n\nThey are outside the body because it is too warm inside for sperm to develop.',
      urethra: definitions.urethra + '\n\nSperm leaving the body is called ejaculation.\n\nSperm and urine cannot leave the body at the same time.',
      vasdeferens: definitions.vasdeferens + ' It brings the sperm inside the body from the scrotum.'
    }

    var questions = [
      [
        "Q: Is it normal for one testicle to be bigger than the other?\n\nA: Yes, it is normal for one testicle to be bigger and to hang lower than the other."
      ],
      [
        "\nQ: Why does getting hit in the testicles hurt so much? How can I protect myself?\n\nA: Most of our organs are inside our bodies, but testicles are on the outside because the sperm need to be a bit cooler than the body. It hurts to be hit there because the testicles are unprotected by bone and tissue. You can protect yourself by wearing a cup or jockstrap during sports."
      ],
      [
        "\nQ: How do you know if you have started to produce sperm?\n\nA: Males start making sperm during puberty. You will know you are making sperm when you have an ejaculation. Sometimes this happens during sleep, in what gets called a 'wet dream.' It is perfectly normal. It might help to know that usually not a lot of semen comes out during the first ejaculation. You'll want to wash your PJs though."
      ]
    ]

    if (get === 'definitions') {
      return definitions;
    } else if (get==='explanations') {
      return explanations;
    } else if (get === 'questions') {
      return questions;
    }
  }
}