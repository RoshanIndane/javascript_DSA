function noDivisibleBy7(num){
    
    let val= Math.floor(num/7);

    if((val*7)==num){
        console.log("Divisible by 7")
    }

    else console.log("Not divisible by 7")

}


noDivisibleBy7("616")//==>Divisible by 7