function firstNonRepeating(arr, n) {
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++)
            if (i != j && arr[i] == arr[j])
                break;
              
        if (j == n)
            return arr[i];
    }
    return -1;
}


firstNonRepeating([9, 4, 9, 6, 7, 4], 6) //=>>>6

