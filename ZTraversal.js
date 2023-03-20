
function zTraversal(N, arr) {
    var bag = '';
    for (var c = 0; c < N - 1; c++) {
        bag = bag + arr[0][c] + ' ';
    }
    for (var c = N - 1; c >= 0; c--) {
        for (var r = 0; r < N; r++) {
            if (r + c == N - 1) {
                bag = bag + arr[r][c] + ' ';
            }
        }
    }
    for (var c = 1; c < N; c++) {
        bag = bag + arr[N - 1][c] + ' ';
    }
    console.log(bag);
}

zTraversal(3, [[1, 2, 3],[4, 5, 6],[7, 8, 9]])  // 1 2 3 5 7 8 9