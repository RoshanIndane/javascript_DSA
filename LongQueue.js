function longQueue(n, arr){
    let count=1;
    for(var r=0; r<n; r++){
        if(arr[r+1]<arr[r]){
            count++;
        }
    }
    console.log(count,"=>count")
}

longQueue(6,[1,2,5,3,8,9,1]) //=>3
longQueue(6,[1,2,5,3,8,9]) //=>2