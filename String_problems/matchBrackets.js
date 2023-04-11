function matchBrkts(str){
let openBrk=0, closeBrk=0;
let val=0;

for(var r=0; r<str.length; r++){
    if(str[r]=="("){
        openBrk++;
    }

    if(str[r]==")"){
        closeBrk++;
    }

    if(openBrk==closeBrk){
        val=r
    }
}
return val
}

console.log(matchBrkts("(())))(")) //====>>4