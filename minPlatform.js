function minimumPlatforms(arr,dep,n){

    let minPlatform=1;
    let result=1;

    for(var r=0; r<n; r++){
        minPlatform=1;
        for(var j=0; j<n; j++){
            if(r!=j){
                if(arr[r]>=arr[j]  && dep[j]>=arr[r]){
                    minPlatform++;
                }
            }
            result=Math.max(result,minPlatform)
        }
    }
console.log(result)
}


minimumPlatforms([900, 940, 950, 1100, 1500, 1800 ],[910, 1200, 1120, 1130, 1900, 2000],6) //=>3