function angkaPrima(angka) {
    if (angka === 2) {
        return true;
    } else if (angka % angka === 0 && angka % 2 !== 0) {
        return true;
    } else {
        return false
    }
}
console.log(angkaPrima(3));
console.log(angkaPrima(6));