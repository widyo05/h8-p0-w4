function cariMedian(arr) {
    var jum = arr.length;
    indeks = 0;
    hasil = 0;
    var med = 0;
    if (jum % 2 === 0) {
        indeks = jum / 2;
        hasil = arr[indeks]
        med = (arr[indeks] + arr[indeks - 1]) / 2;
    } else {
        jum = (jum - 1) / 2
        med = arr[jum];
    }
    return med;
}
console.log(cariMedian([1, 2, 3, 4]));
console.log(cariMedian([1, 3, 3]));
console.log(cariMedian([3, 5, 7, 5, 3]));



