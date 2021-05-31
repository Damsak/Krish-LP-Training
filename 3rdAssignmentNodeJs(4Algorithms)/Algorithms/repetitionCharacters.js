const sentence = "I'm $%$& going home"

var finalArray = []; 

RepetitionCharacters(sentence)

function RepetitionCharacters(sentence) {

   var values =  calculatedifferentCharacters(sentence);

   for (let [key, value] of values) {
    finalArray.push(key + " = " + value);
    }

    console.log("Repetition Characters: " +finalArray)
}


function calculatedifferentCharacters(sentence) {

    var characters = []

    //Remove special characters and spaces in the sentence
    var sentence2 =   sentence.replace(/[&\/\\#,+()$~%.'":*?<>{}\s+]/g, '')

    for(var i = 0; i < sentence2.length; i++){
        characters.push(sentence2[i].toLowerCase())
    }

  
    var charactersAdded = []

    let repetitionValues = new Map();


    for(var j = 0; j < characters.length; j++){

        count = 0;

        for(a = 0; a < characters.length; a++) {

            if(characters[j] === characters[a]){
                count++;
            }
        }

        if(!(charactersAdded.includes(characters[j]))) {

           if(count>= 2) {
                repetitionValues.set(characters[j],count);
                charactersAdded.push(characters[j]);

           }

        }
    }

    return repetitionValues;
}



module.exports = { repetitionCharactersSentence : sentence, repetitionCharactersAnswer : finalArray };