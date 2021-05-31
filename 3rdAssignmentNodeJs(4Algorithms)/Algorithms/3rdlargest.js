const Originalarray = [8,3,4,1,1,45,2,23,7,8,8,8,6,5,31,45,45]
const arrlength = Originalarray.length


function sortArray(Originalarray) {

     //we make a shallow copy of original array. so after sorting the original array wont be affected.
    const array = Originalarray.slice();


    for(let i = 0; i < arrlength; i++ ) {

        for(let j = 0; j < arrlength -1 -i; j++){

            if(array[j] > array[j+1]){

                const current = array[j]
                array[j] = array[j+1]
                array[j+1] = current
            }
        }
    }
    return array;
}


const sortedArray = sortArray(Originalarray);

const UniqueArray = []

for(let i = 0; i < sortedArray.length; i++) {

    if(!(UniqueArray.includes(sortedArray[i]))){

        UniqueArray.push(sortedArray[i])
    }

}


const  thirdLargest = UniqueArray[(UniqueArray.length)-3]


console.log("3rd Largest Number is " + thirdLargest);

module.exports = { thirdLargestArray : Originalarray, thirdLargestAnswer : thirdLargest };