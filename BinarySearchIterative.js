function BinarySearchIterative(k,arr){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        var mid=start+Math.floor((end-start)/2);
        if(k== arr[mid]){
            console.log(1);
            return 1;
        }
        else if(k<arr[mid]){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    console.log(-1);
    return -1;
}

BinarySearchIterative(0,[2,-2, 0, 3,4]) // 1

