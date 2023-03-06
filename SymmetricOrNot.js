function zeros(arr,n){
    
    var top=0, bottom=n-1, left=0, right=n-1, flag1=0, flag2=0;
    
    while(top<n/2 && bottom>=n/2){
        for(var c=0; c<n; c++){
            if(arr[top][c]!==arr[bottom][c]){
               flag1=1;
            }
        }
        top++;
        bottom--;
    }
    
    while(left<n/2 && right>=n/2){
        for(var r=0; r<n; r++){
            if(arr[r][left]!=arr[r][right]){
                flag2=1;
            }
        }
        left++;
        right--;
    }
    if(flag1==0 && flag2==0){
        return "Yes";
    }
    else return "No";
    }
    
    console.log(zeros([[1,1],[1,1]],2)) //=>Yes