function deepSum(arr) {
    var hitung = 0;
    if (arr.length !== 0) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                for (k = 0; k < arr[i][j].length; k++) {
                    hitung += arr[i][j][k];
                }
            }
        }
        return hitung;
    }
    else {
        return 'No Number';
    }

}

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
]));