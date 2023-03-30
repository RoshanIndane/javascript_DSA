function missAndRep(arr) {

    arr.sort((a, b) => a - b);

    for (let r = 0; r < arr.length - 1; r++) {
        if (arr[r] == arr[r + 1]) {
            console.log(`repeating number is ${arr[r]}`);
            break;
        }
    }

    for (let r = 1; r < arr.length; r++) {
        if (r != arr[r - 1]) {
            console.log(`missing element is ${r}`);
            break;
        }
    }

}


missAndRep([7, 3, 4, 5, 5, 6, 2]) // =>>5,1