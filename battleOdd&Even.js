function battleOdd_Eeven(arr,n){
    let odd=0;
    let even=0;
    
    for(var r=0; r<n; r++){
        if(arr[r]%2==0){
            even+=arr[r];
        }
        else if(arr[r]%2==1){
            odd+=arr[r];
        }
    }
    if(odd>even){
        console.log("odd win")
    }
    else{
        console.log("even win")
    }
 }
 
 battleOdd_Eeven([1,2,3,4],4); // even win
 battleOdd_Eeven([7,2,5,4,6,8,9],7); // odd win