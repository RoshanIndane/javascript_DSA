function checkPalindrome(string){
    let flag=false;
    
    for(var r=0; r<string.length/2; r++){
        if(string[r]===string[(string.length-1)-r]){
            flag=true;
        }
    }
    if(flag===true){
        console.log("is_Palindrome")
    }
    else{
        console.log("not_Palindrome")
    }
}

checkPalindrome("racecar") // is_Palindrome
checkPalindrome("roshan")  // not_Palindrome