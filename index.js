function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 1;  // Start with 1 as there’s at least one word
    let vowelCounter = 0;
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        // Stop counting when reaching the period at the end of the sentence
        if (char === '.') {
            break;
        }

        // Increment the length counter for every character
        lengthCounter++;
        
        // Check for spaces to count words
        if (char === ' ') {
            wordCounter++;
        }
        
        // Check for vowels
        if (vowels.includes(char)) {
            vowelCounter++;
        }
    }
    
    return {
        length: lengthCounter,
        words: wordCounter,
        vowels: vowelCounter
    };
}

// Example usage
const sentence = "This is an example sentence.";
const result = analyzeSentence(sentence);
console.log(`Length of the sentence: ${result.length}`);
console.log(`Number of words: ${result.words}`);
console.log(`Number of vowels: ${result.vowels}`);



