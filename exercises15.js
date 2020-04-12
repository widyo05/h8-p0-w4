function highestScore(students) {
    var retVal = {};

    for (i = 0; i < students.length; i++) {
        for (j = 0; j < students.length; j++) {
            if (students[i].score < students[j].score) {
                tmp = students[i]
                students[i] = students[j]
                tmp = students[j]
                for (k = 0; k < students.length; k++) {
                    if (!(students[k].class in retVal)) {
                        retVal[students[k].class] = [];
                    }
                    retVal[students[k].class].push(students[j]);
                }
            }
        }
    }


    return retVal
}

console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));
