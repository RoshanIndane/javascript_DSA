function find3Numbers(A, arr_size, sum){
    for (var i = 0; i < arr_size - 2; i++)
    {
        for (var j = i + 1; j < arr_size - 1; j++)
        {
            for (var k = j + 1; k < arr_size; k++)
            {
                if (A[i] + A[j] + A[k] == sum)
                {
                    console.log("Triplet is " + A[i] +
                        ", " + A[j] + ", " + A[k]);
                    return true;
                }
            }
        }
    }
    return false;
}

find3Numbers([ 1, 4, 45, 6, 10, 8 ], 6, 22)  //==>Triplet is 4, 10, 8
