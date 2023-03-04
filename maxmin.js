function maxMin(arr, n) {
    var newArray = [];
    var max = 0, min = 0;

    if (n == 1) {
        newArray.max = arr[0];
        newArray.min = arr[0];
    }

    if (arr[0] > arr[1]) {
        newArray.max = arr[0];
        newArray.min = arr[1];
    }
    else {
        newArray.max = arr[1];
        newArray.min = arr[0];
    }
    for (var r = 2; r < n; r++) {
        if (arr[r] > newArray.max) {
            newArray.max = arr[r]
        }
        else if (arr[r] < newArray.min) {
            newArray.min = arr[r]
        }
    }
    console.log(newArray)
}

maxMin([2, 8, 5, 77, 25, 1, 0, 37], 8)  //=>[ max: 77, min: 0 ]