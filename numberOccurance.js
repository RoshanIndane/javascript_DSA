function numOccurance(arr,x){
    var count=0;
    for(var r=0; r<arr.length; r++){
        if(arr[r]===x){
            count++;
        }
    }
    return count;
}


console.log(numOccurance([1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8],8))  //=>2