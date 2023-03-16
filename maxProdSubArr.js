function maxSubarrayProduct(arr, n)
{
    let result = arr[0];
 
    for (let i = 0; i < n; i++)
    {
        let mul = arr[i];
        for (let j = i + 1; j < n; j++)
        {
            result = Math.max(result, mul);
            mul *= arr[j];
        }
        // updating the result for (n-1)th index.
        result = Math.max(result, mul);
    }
    return result;
}