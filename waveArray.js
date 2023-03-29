function swap(arr, x,y){
    let temp= arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

function waveArr(arr){

    let n=arr.length;
    arr.sort((a,b)=>a-b);

    for(var r=0; r<n-1; r=r+2){
swap(arr, r, r+1)
    }

}

waveArr([10, 90, 49, 2, 1, 5, 23 ])  //==>>2 1 10 5 49 23 90