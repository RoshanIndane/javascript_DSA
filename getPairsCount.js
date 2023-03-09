function getPairsCount(arr, n, sum)
{
    let count = 0; 
 
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
 
    return count;
}

console.log(getPairsCount([1, 5, 7, -1, 5 ], 5, 6)) //=>3
