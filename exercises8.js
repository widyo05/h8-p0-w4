function tukarBesarKecil(kalimat) {
    var tmp = '';
    for (i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === kalimat[i].toLowerCase()) {
            tmp += kalimat[i].toUpperCase;
        } else {
            tmp += kalimat[i].toUpperCase;
        }
    }
    return tmp;
}
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); 
