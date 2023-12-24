//  A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My solution:

function isPangram(string){
  const alphabetSet = new Set();
  const regex = /[a-zA-Z]/;

  for (let char of string) {
      if (regex.test(char)) {
        alphabetSet.add(char.toLowerCase());
      }
    }

  return alphabetSet.size === 26;
}