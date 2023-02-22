function arrayChunks(arr, size){
    let newArray=[];
    let r=0;
    
    while(r<arr.length){
        newArray.push(arr.slice(r,(r+size)));
        r+=size;
    }
    return newArray;
}

console.log(arrayChunks([1,2,3,4], 2))
console.log(arrayChunks([9,8,7,6,5,4,3,2,1,0], 6))
