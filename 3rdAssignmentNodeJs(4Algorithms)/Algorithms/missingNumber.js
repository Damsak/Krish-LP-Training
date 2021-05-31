function MissingNumber(array) {

    var previous= array[0];
    var MissingNumber;

    for(var i = 1; i < array.length -1; i++) {

        if((previous+1) == array[i]){

            previous = array[i]
        } else {

            MissingNumber = previous+1
        
        }
    }
    return MissingNumber;
 }

 var Numbers = [1000,1001,1003,1004] 

 var MissingNumberAnswer = MissingNumber(Numbers)

 console.log("Missing Number is " + MissingNumberAnswer)


 module.exports = { missingNumberArray : Numbers, missingNumberAnswer : MissingNumberAnswer };