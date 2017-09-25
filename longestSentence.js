function longestSentence(text) {

  //match anything that is not a punctuation mark '[^.?!]', 0 or more times '*', this grabs the sentence,
  //then grab the ending punctuation mark '[.?!]' 
  var sentences = text.match( /[^.?!]*[.?!]/g );
  var maxWordCount = 0;
   
  sentences.forEach(function(currentSentence) {
    wordCount = currentSentence.split(' ').length;

    if (wordCount > maxWordCount) {
      maxWordCount = wordCount;
      maxSentence = {wordCount:maxWordCount, sentence: currentSentence}
    }
    return;
  });

  console.log(maxSentence.sentence);
  console.log('The longest sentence has ' + maxSentence.wordCount + ' words.');

  return;
}
