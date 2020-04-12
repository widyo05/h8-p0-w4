function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (arrPenumpang.length == 0) {
        return arrPenumpang;
    }
    var hasil = [];

    for (var key in arrPenumpang) {
        var a;
        var b;
        for (i = 0; i < rute.length; i++) {
            if (rute[i] == arrPenumpang[key][1]) {
                a = i;
            }
            if (rute[i] == arrPenumpang[key][2]) {
                b = i;
            }
            hasil[key] = {
                penumpang: arrPenumpang[key][0],
                naikDari: arrPenumpang[key][1],
                tujuan: arrPenumpang[key][2],
                bayar: Math.abs((b - a) * 2000)
            }
        }
    }
    return hasil;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));