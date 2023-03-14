function findCommon(ar1, ar2, ar3, n1, n2, n3) {
    var i = 0,
        j = 0,
        k = 0;

    while (i < n1 && j < n2 && k < n3) {

        if (ar1[i] == ar2[j] && ar2[j] == ar3[k]) {
            console.log(ar1[i] + " ");
            i++;
            j++;
            k++;
        }

        else if (ar1[i] < ar2[j]) i++;

        else if (ar2[j] < ar3[k]) j++;

        else k++;
    }
}

findCommon([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120], 6, 5, 8)