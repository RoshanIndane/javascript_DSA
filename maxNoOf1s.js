function findMaxNosOf1s(R, C, mat){
    let maxCount=0;
    let index=-1;
    
    for(var r=0; r<R; r++){
        var count=0; 
        for(var j=0; j<C; j++){
            if(mat[r][j]==1){
                count++;
            }
        }
        if(count>maxCount){
                maxCount=count;
                index=r+1;
            }
    }
    console.log(`Maximun number of 1s is present at ${index} row. `)
}

findMaxNosOf1s(4,4,[[0, 0, 0, 1],[0, 1, 1, 1],[1, 1, 1, 1],[0, 0, 0, 0]]) 
//=>>Maximun number of 1s is present at 3 row.