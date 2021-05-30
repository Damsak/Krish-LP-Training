function SelectionSort(sortarray){

    //we make a shallow copy of original array. so after sorting the original array wont be affected.
    const array = sortarray.slice();

    for(let i = 0; i < array.length -1; i++) {
        let minIndex = i;

        //find the smalltest index in current iteration
        for(let j = i + 1; j < array.length ; j++){

            if( array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        //swap
        [array[i],array[minIndex]] = [array[minIndex],array[i]]
    }
    return array;
}

var SelectionSortArray = [2,4,5,3,99,100,43,21,22,12,7]



SelectionSortAnswer = SelectionSort(SelectionSortArray);


module.exports = { SelectionSort: SelectionSortAnswer, SelectionSortArray: SelectionSortArray };
