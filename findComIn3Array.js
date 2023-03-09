function findComIn3Array(arr1,arr2,arr3){
    var r=0, j=0, k=0;
    
    while(r<arr1.length && j<arr2.length && k<arr3.length){
        if(arr1[r]==arr2[j] && arr2[j]==arr3[k]){
            r++;
            j++;
            k++;
        }
        else if(arr1[r]<arr2[j]){
            r++;
        }
        else if(arr2[j]<arr3[k]){
            j++;
        }
        else k++;
        
    }
}

findComIn3Array([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120])