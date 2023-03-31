let price=[100, 180, 260, 310, 40, 535, 695]
let n=price.length;

function stockBuySell(price,start,end){
    
    if(end<=start){
        return 0;
    }
    
    let profit=0;

    for(let r=start; r<end; r++){
        for(let j=r+1; r<=end; j++){
            if(price[j]>price[r]){
                let curr_profit= price[j]-price[r]+stockBuySell(price,start,r-1)
                +stockBuySell(price,j+1, end)
                
                profit=Math.max(curr_profit, profit)
            }
        }
    }
console.log(profit)
}

stockBuySell(price,0, n-1) //==>865