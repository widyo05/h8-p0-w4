function shoppingTime(memberId, money) {
    var produk = [
        ['Sepatu Stacattu', 1500000],
        ['Kaos Nike', 200000],
        ['Baju Executive', 350000],
        ['Jaket Exclusive', 500000],
        ['Jam Casio', 100000]
    ];

    var user = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
    }

    var tmp = money;

    if (memberId === '') {
        return 'Maaf Toko X hanya untuk member saja';
    } else if (money < 100000 || money == '') {
        return 'Maaf Uang tidak cukup';
    } else {
        if (money >= produk[0][1]) {
            user['listPurchased'].push(produk[0][0])
            tmp = tmp - produk[0][1];
        }
        if (money >= produk[1][1]) {
            user['listPurchased'].push(produk[1][0])
            tmp = tmp - produk[1][1];
        }
        if (money >= produk[2][1]) {
            user['listPurchased'].push(produk[2][0])
            tmp = tmp - produk[2][1]
        }
        if (money >= produk[3][1]) {
            user['listPurchased'].push(produk[3][0])
            tmp = tmp - produk[3][1]
        }
        if (money >= produk[4][1]) {
            user['listPurchased'].push(produk[4][0])
            tmp = tmp - produk[4][1]
        }

        user.changeMoney = tmp;
        return user;
    }

}

console.log(shoppingTime('1820RzKrnWn08', 2475000));