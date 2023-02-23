function masaiPalSubString(S){
    var max_length = 1;
    for(var r=0; r<S.length; r++){
        for(var s=0; s<S.length; s++){
            var flag = 1;
            for(var q=0; q<(s-r+1)/2; q++){
                if(S[r+q]!=S[s-q]){
                    flag =0;
                }
            }
            if(flag&&(s-r+1)>max_length){
                max_length = s-r+1;
            }
        }
    }
    console.log(max_length);
}
masaiPalSubString("thisracecarisgood") // racecar=> 7