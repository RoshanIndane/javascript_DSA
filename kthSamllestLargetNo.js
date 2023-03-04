function kthSmallest(arr,k){

    arr.sort((a,b)=>a-b)

    return arr[k-1]
}

kthSmallest([7, 10, 4, 3, 20, 15],4)