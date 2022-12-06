const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(sentence => {
    const splitWords = sentence.split(' ')

    for(let word = 0; word < splitWords.length; word++) 
    {
      splitWords[word] = splitWords[word].charAt(0).toUpperCase() + splitWords[word].slice(1)            
    }
    const newSentence = splitWords.join(' ');
    return newSentence;
  })
}

// console.log(titleCased())
