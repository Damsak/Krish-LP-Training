function bubbleSort(array) {

    //we make a shallow copy of original array. so after sorting the original array wont be affected.
    const arr = array.slice();

    for(let i = 0; i < arr.length -1; i++){
        //-i because we dont want to check the sorted part of the array
        for(let j = 0; j < arr.length -1 -i; j++) {      
          if(arr[j]>arr[j+1]){
            
       //1 method to exhange
       // [array[j],[array[j+1]] = [array[j+1],array[j]];    
       
       //Another method to exchange
              const current = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = current
          } 
        }
    }
    return arr;
}

const arr1 = [1,5,100,345,56,3,1,2,1,9,4,4,79,85]

BubbleSortAnswer = bubbleSort(arr1);

module.exports = { BubbleSort: BubbleSortAnswer, BubbleSortArray : arr1 };
