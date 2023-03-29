let arr= [2,0,2]

function trappingWater(n){
    let left= new Array(n);
    let right= new Array(n);
    let water=0;
    
    left[0]= arr[0];
    for(let r=1; r<n; r++){
        left[r]=Math.max(arr[r], left[r-1])
    }
    
    right[n-1]= arr[n-1]
    for(let r=n-2; r>=0; r--){
        right[r]=Math.max(arr[r], right[r+1])
    }
    
    for(let r=0; r<n; r++){
        water+=Math.max(left[r],right[r])-arr[r]
    }
    return water;
}

console.log(trappingWater(arr.length))  //=>> 2