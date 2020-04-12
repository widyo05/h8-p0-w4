function countProfit(shoppers) {
    var listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];

    var hasil = [];
    if (shoppers.length === 0) {
        return hasil;
    }

    for (i = 0; i < listBarang.length; i++) {
        var tmp = {};
        tmp.product = listBarang[i][0];
        tmp.shoppers = [];
        tmp.leftOver = listBarang[i][2];
        tmp.totalProfit = 0;

        var data = listBarang[i][2];

        for (j = 0; j < shoppers.length; j++) {
            if (listBarang[i][0] === shoppers[j].product) {
                if (data >= shoppers[j].amount) {
                    tmp.shoppers.push(shoppers[j].name);
                    data = data - shoppers[j].amount;

                    tmp.leftOver = data;

                    tmp.totalProfit = (listBarang[i][2] - data) * listBarang[i][1]

                }
            }
        }
        hasil.push(tmp);
    }
    return hasil;
}
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));