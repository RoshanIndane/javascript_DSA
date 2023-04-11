function PangramStr(str){
    let arr= new Array(26).fill(false);
    let index;
    for(var r=0; r<str.length; r++){
        if("A"<=str[r] && str[r]<="Z"){
            index=str.charCodeAt(r)-"A".charCodeAt(0)
        }
        else if("a"<=str[r] && str[r]<="z"){
            index=str.charCodeAt(r)-"a".charCodeAt(0)
        }
        else continue;
        
        arr[index]=true;
    }
    
    for(var s=0; s<=25; s++){
    if(arr[s]==false){
        return false
    }
     
}
 return true;
}




console.log(PangramStr("The quick brown fox jumps over the lazy dog")) //===>true;