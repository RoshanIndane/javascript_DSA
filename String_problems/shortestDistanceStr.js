function shortestDistance(s,w1,w2){
    let ans=Number.MAX_VALUE;
    let d1=-1, d2=-1;

    for(let r=0; r<s.length; r++){
        if(s[r]==w1){
            d1=r
        }
        if(s[r]==w2){
            d2=r
        }
        if(d1!==-1 && d2!==-1){
            ans=Math.min(ans, Math.abs(d1-d2))
        }
    }
return ans;
}

shortestDistance([ "the", "quick", "brown", "fox", "quick" ],"the","fox")  //===>>3