//Reading the text file
var fs = require('fs')
var names = fs.readFileSync("./names3.txt").toString('utf-8');
var namesinArray = names.split(",")

var alphabetWithValues = new Map();
var letters = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m' , 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//Create a map with letters and their corresponding values
for(var j=1; j <= letters.length; j++) {
    alphabetWithValues.set(letters[j-1],j);
    alphabetWithValues.set(' ', 0);
}

//valuesArray
var values = [];

//NamesArray 
var people = [];

//calculate value for each name
for(var k = 0; k< namesinArray.length; k++) {

    var sum = calculateValue(namesinArray[k])

    //Push the calculated values to values array
    values.push(sum)

    //Push the names to the peoples array(In the same order)
    people.push(namesinArray[k])
}


//sorting the arrays with bubblesort
for(let i = 0; i < values.length -1; i++){
    for(let j = 0; j < values.length -1 -i; j++) {      
      if(values[j]>values[j+1]){
        
          const current = values[j]
          values[j] = values[j+1]
          values[j+1] = current

          //since both the arrays(values,people) are in same order we can exchange names
          const nameCurrent = people[j]
          people[j] = people[j+1]
          people[j+1] = nameCurrent
      }             
    }
}


//check for duplicates by looping the resulted array 
for(var a= 0 ;a < values.length; a++ )
{
    //check a particular value with other values
    for(var b = a + 1; b < values.length; b++) {

        var stringasnd = []

        if(values[a] == values[b] ){

            var first = people[a]; 
            var second = people[b];

            stringasnd.push(first)
            stringasnd.push(second)      


            //sorting two values without cosidering the letter case
            stringasnd.sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            })

            if(!(stringasnd[1].localeCompare(first))) {

                //need to swap the 2 names
                [people[a],people[b]] = [people[b],people[a]]
            }               
        }
    }
}

console.log("Final Sorted Array :" + people);

//calculate value for 1 word
function calculateValue(value) {

    total = 0;
    for( var i = 0; i < value.length; i++){  
       if(!isNaN(value.charAt(i))) {

        } else {
            var val = alphabetWithValues.get(value.charAt(i).toLowerCase());
            total = total + val;
        }
    }
    return total;

}



module.exports = { People: people, PeopleArray : namesinArray};









