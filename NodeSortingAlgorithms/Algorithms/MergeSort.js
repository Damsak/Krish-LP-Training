const merge = (leftArray,rightArray) => {
    let finalArray = [];
    let nL = leftArray.length;
    let nR = rightArray.length;
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    let finalArrayIndex = 0;


    //while there are elements to be added to the final array
    while((leftArrayIndex < nL) && (rightArrayIndex < nR)){
        
        if(leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
            finalArray[finalArrayIndex] = leftArray[leftArrayIndex]
            leftArrayIndex++;

        } else {
            finalArray[finalArrayIndex] = rightArray[rightArrayIndex]
            rightArrayIndex++;
        }
        finalArrayIndex++;
    }

    //to add the remaining value
    while(leftArrayIndex < nL) {
        finalArray[finalArrayIndex] = leftArray[leftArrayIndex]
        leftArrayIndex++
        finalArrayIndex++
    }

    while(rightArrayIndex < nR) {
        finalArray[finalArrayIndex] = rightArray[rightArrayIndex]
        rightArrayIndex++
        finalArrayIndex++
    }
    return finalArray;
};

const mergeSort = array => {
    if (array.length <= 1){
        return array;
    }

    //math.floor returns the less than or equal to "array.length/2"
    const middle = Math.floor(array.length/2);

    //create leftArray from 0 index to middle index
    const leftSubArray = array.slice(0,middle);

    //create rightArray from middle index to last
    const rightSubArray = array.slice(middle);

    return merge(
        //recursively call mergeSort 
        mergeSort(leftSubArray),
        mergeSort(rightSubArray)
    )
};

 const MergeSortArray = [2,50,1,24,82,432,21,2,89,2,555,1234,44,21]


 MergeSortAnswer = mergeSort(MergeSortArray);


module.exports = { MergeSort: MergeSortAnswer, MergeSortArray: MergeSortArray };