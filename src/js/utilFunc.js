// capitalize first letter of words in a sentence/phrase
const capitalize = (words) => {
    const separateWord = words.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].slice(1);
    }
    return separateWord.join(' ');
}