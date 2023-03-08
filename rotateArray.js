function rotateArray(arr,n,k){
    var bag="";
    k=k%n;
    for(var r=0; r<n; r++){
        if(r<k){
            bag+=arr[n+r-k]+" ";
        }  
        else bag+=arr[r-k]+" "
    }
    console.log(bag)
}


rotateArray([1,2,3,4],4,2) //=>[3, 4, 1, 2]