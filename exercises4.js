function cariModus(arr) {
    var tmp
    for (x = 0; x < arr.length; x++) {
        for (y = x + 1; y < arr.length; y++) {
            if (arr[x] === arr[y]) {
                tmp = arr[x]
            } else if (tmp === undefined) {
                tmp = -1
            } else if (tmp.length > 2) {
                tmp = arr[0]
            }

        }
    }
    return tmp;
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5]));
console.log(cariModus([7, 7, 7, 7, 7]));