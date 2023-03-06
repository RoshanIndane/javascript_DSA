function zeros(arr){
    var low=0, high=arr.length-1, mid=0, temp=0;
    
    while(mid<=high){
        if(arr[mid]==0){
            temp=arr[low]
            arr[low]=arr[mid]
            arr[mid]=temp;
            mid++;
            low++;
        }
        
        else if(arr[mid]==1){
            mid++;
        }
        
        else{
            temp=arr[mid]
            arr[mid]=arr[high]
            arr[high]=temp;
            high--;
        }
    }
    console.log(arr)
    }
    
    zeros([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]) //=> [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]