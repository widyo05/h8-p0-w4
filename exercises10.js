function changeMe(arr) {
    if (arr.length === 0) {
        console.log('""');
    }

    var tahun = new Date().getFullYear();
    var num = 1;
    var person = {};

    for (i = 0; i < arr.length; i++) {
        person.firstName = arr[i][0];
        person.lastName = arr[i][1];
        person.gender = arr[i][2];

        if (arr[i][3] > tahun || !arr[i][3]) {
            person.age = 'Invalid Birth Year';
        } else {
            person.age = tahun - arr[i][3]
        }
        console.log(num + ' . ' + person.firstName + ' ' + person.lastName);
        num++;
        console.log(person);
    }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);