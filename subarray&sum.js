function subArraySum(arr,n , sum){
    
    for(var r=0; r<n; r++){
        let currentSum= arr[r]
        if(currentSum==sum){
            console.log("Sum found at index " +r);
            return;
        }
        
        for(var s=r+1; s<n; s++){
            currentSum+=arr[s];
            if(currentSum==sum){
                console.log(`Sum found between index ` + r + ` to `+ s)
                return;
            }
        }
    }
    console.log("sum not found in array")
    return;
}

subArraySum([1, 4, 0, 0, 3, 10, 5],7 , 7)