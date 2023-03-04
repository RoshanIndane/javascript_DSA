function twoSortedarrayCount(arr1, arr2, size){
    let low=0; high=arr1.length; count=0;
    
    while(low<=arr1.length && high>=0){
        if(arr1[low]>arr2[high]){
            high--;
        }
        else if(arr1[low]<arr2[high]){
            low++;
        }
        else{
            low++;
            high--;
            count++;        }
    }
    console.log(count)
    
}

twoSortedarray([1,2,3,4,5],[4,3,2,1,1],5)// =>4
