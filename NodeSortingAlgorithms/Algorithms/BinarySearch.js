const BinarySearch = (array,x) => {

    let start = 0;
    let end = array.length -1;

    while( start <= end ){
        let mid = Math.floor((start+end)/2)

        if(array[mid] == x)
        return array[mid]

        else if(x < array[mid]){
            end = mid -1
        } else {
            start = mid + 1
        }
    }
    return "The number is not available";
}

const testArray = [0,1,2,3,4,5,6,7,8,9,10]

const BinarySearchAnswer = BinarySearch(testArray,7);

const searchValue = 7;


module.exports = { BinarySearch: BinarySearchAnswer, BinarySearchArray : testArray, searchValue : searchValue };




