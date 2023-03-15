function arrPositiveNegative(arr){
    const positive = arr.filter((a)=>a>=0)
    const negative = arr.filter((a)=>a< 0);
    const result=[];

    for(var r=0, j=0; r<positive.length || j<negative.length; j++,  r++){
       if(j < negative.length) result.push(negative[j]);
       if(r < positive.length) result.push(positive[r])
    }
    console.log(result)
    
}

arrPositiveNegative([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8])