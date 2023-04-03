function printClosest(arr, n, x) {
    let res_l, res_r; 
 
    let temp = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(arr[i] + arr[j] - x) < temp) {
                res_l = i;
                res_r = j;
                temp = Math.abs(arr[i] + arr[j] - x);
            }
        }
    }
 
    console.log("The closest pair is " + arr[res_l] + " and " + arr[res_r]);
}

printClosest([10, 22, 28, 29, 30, 40], 6, 54)  //==>>30, 22