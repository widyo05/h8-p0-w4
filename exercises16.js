function graduates(students) {
    var retVal = {};
    var tmp;
    for (i = 0; i < students.length; i++) {
        if (students[i].score > 75) {
            for (j = 0; j < students.length; j++) {
                if (!(students[j].class in retVal)) {
                    retVal[students[j].class] = [];
                }
                retVal[students[i].class].push(students[i]);
            }
        }
    }

    return retVal;
}


console.log(graduates([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));