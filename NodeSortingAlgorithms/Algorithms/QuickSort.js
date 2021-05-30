 function QuickSort(array) {
     //edgecase
     if(array.length == 1) {
         return array;
     }

     const pivot = array[array.length - 1];
     const leftArray = [];
     const rightArray = [];

     //loop until pivot
     for(let i = 0;i < array.length -1 ; i++) {
         if(array[i] < pivot) {
            leftArray.push(array[i]);

         } else {
            rightArray.push(array[i]);
         }
     }

     //1 case
     if(leftArray.length > 0 && rightArray.length > 0) {
         
        //... spread operator -  separates elements in an array with comma separated values
        //spead : convert - [1,2,3] to 1,2,3
        //call quicksort twice. Quicksort always return an array. 
        //then  spread that returned array immediately
    
        return[...QuickSort(leftArray), pivot, ...QuickSort(rightArray)];

    //2nd case only have left arr greater than 0
     } else if(leftArray.length > 0 ) {
        return[...QuickSort(leftArray), pivot];

    //if right arr length greater than 0
     } else {
         return[pivot, ...QuickSort(rightArray)];
     }
 }

 const arr = [1,4,2,8,345,233,43,45,3456,65,77,889,6,45]

 QuickSortAnswer = QuickSort(arr);


 module.exports = { QuickSort: QuickSortAnswer, QuickSortArray: arr };