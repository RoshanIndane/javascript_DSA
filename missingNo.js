function findMissing(arr){
    var array=arr.sort((a,b)=>a-b)
  
    for (let i = 0; i < array.length; i++) {
  
      if(array[i]+1 != array[i+1])
  
        return array[i]+1
  
    }
  }
  
  findMissing([1, 3, 7, 5, 6, 2]) //=>4