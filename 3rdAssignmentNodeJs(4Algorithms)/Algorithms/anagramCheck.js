const word1 = "Damsak"
const word2 = "kasmda"


const state = checkAnagram(word1,word2);


function checkAnagram(firstWord,secondWord) {

    if(firstWord.length != secondWord.length) {
        return false;
    } else {

        const firstLetters = firstWord.toLowerCase().split("");
        const secondLetters = secondWord.toLowerCase().split("");

        var sortedFirstLetters = firstLetters.sort()
        var sortedSecondLetters = secondLetters.sort()


        for(let i = 0; i < sortedFirstLetters.length; i++){

            if(!(sortedFirstLetters[i] === sortedSecondLetters[i]) ){
                return false;
            }
        }
        return true
    
    }    
}


console.log("Word1 = " + word1 + "  Word 2 = "+ word2 + ". Is anagram? " + state)


module.exports = { word1: word1, word2: word2 , anagramCheckAnswer : state };