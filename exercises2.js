function fpb(angka1, angka2) {
    var hasil = 0;
    for (i = 0; i < angka2; i++) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            hasil = i;
        }
    }
    return hasil;
}

console.log(fpb(12, 16));
console.log(fpb(50, 40))