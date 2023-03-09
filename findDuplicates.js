function findDuplicates(arr){

    var newArr=[];

    for(var r=0; r<arr.length; r++){
        for(var s=r+1; s<arr.length; s++){
            if(r!=s){
                if(arr[r]===arr[s]){
                    newArr.push(arr[r])
                }
            }
        }
    }
    console.log(newArr)

}

findDuplicates([1, 2, 3, 6, 3, 6, 1]) //=>>Output: 1, 3, 6