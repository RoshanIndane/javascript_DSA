function getPickEle(arr,n){
    
    if(n==1) return 0;
    if(arr[0]>=arr[1]) return 0;
    if(arr[n-1]>=arr[n-2]) return n-1;
    
    for(var r=1; r<n-1; r++){
        if(arr[r-1]<=arr[r] && arr[r+1]<=arr[r]){
            return arr[r];
        }
    }
}

console.log(getPickEle([1, 3, 20, 4, 1, 0],6)) //=>20