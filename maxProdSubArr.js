function maxSubarrayProduct(arr){
    
    var res=arr[0];

    for(var r=0; r<arr.length; r++){
        var multi=arr[r];
        for(var j=r+1; j<arr.length; j++){
            res=Math.max(res, multi);
            multi*=arr[j]
        }
        res=Math.max(res,multi)
    }
console.log(res);
}

maxSubarrayProduct([1, -2, -3, 0, 7, -8, -2 ]) //=>112