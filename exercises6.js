function digitPerkalianMinimum(angka) {
    var panjangAngka = 0;
    var min = 0;
    for (i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            panjangAngka = i.toString().length + (angka / i).toString().length;
        }
        if (min === 0 || panjangAngka < min) {
            min = panjangAngka;
        }
    }
    return min;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1));