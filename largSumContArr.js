function largestSumContSubarray(arr){
var curSum=0;
var maxSum=0;

for (var r=0;r<arr.length; r++){
    curSum+=arr[r];

    if(curSum>maxSum){
        maxSum=curSum
    }
    if(curSum>0){
        curSum=0;
    }
}
console.log(maxSum);

}

largestSumContSubarray([5, -4, -2, 6, -1]) //=> 6