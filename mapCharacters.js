
function mapChar(N){
    let string="abcdefghijklmnopqrstuvwxyz";
    let value=0;
    let output=0;
    
    for(var r=0; r<N; r++){
        value=r+1;
        output=string[r]+ "-"+value;
        console.log(output);
    }
}
    
mapChar(5)
// output=>a-1
//         b-2
//         c-3
//         d-4
//         e-5

mapChar(25)//