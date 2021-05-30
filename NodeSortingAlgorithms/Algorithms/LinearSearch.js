const LinearSearch = (array,x) => {

    for(let i = 0 ; i < array.length; i++){
        if(x == array[i]){
            return x;
        }
    }

    return "Number Not available";

}

const testArray = [0,1,2,3,4,5,6,7,7,8,9]

const LinearSearchAnswer = LinearSearch(testArray,2);

const searchValue = 2;

module.exports = { LinearSearch: LinearSearchAnswer, searchValue: searchValue, LinearSearchArray : testArray };