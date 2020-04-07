function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var hasil = '';
    var counter;
    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < kamus.length; j++) {
            if (kata[i] == kamus[j]) {
                hasil += kamus[j + 1];

            }
        }
    }
    return hasil;
}

console.log(ubahHuruf('wow'));

