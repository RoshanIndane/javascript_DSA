function firstRepEle(arr, n) {

    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {

            if (arr[i] == arr[j]) {
                console.log(arr[i])
                return 0;
            }
        }
    }
    console.log("No repeating integer found")
    return 0;
}

firstRepEle([1, 2, 3, 3, 3, 6, 6], 7)