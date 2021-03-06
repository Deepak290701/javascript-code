const { expect } = require('@jest/globals');
const solution = require('./program');

let test1 = {
    '2020-01-01' : 4,
    '2020-01-02' : 4,
    '2020-01-03' : 6,
    '2020-01-04' : 8,
    '2020-01-05' : 2,
    '2020-01-06' : -6,
    '2020-01-07' : 2,
    '2020-01-08' : -2,
};

let ans1 = {
    'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2 
};


let test2 = {
    '2020-01-01' : 0,
    '2020-01-02' : 0,
    '2020-01-05' : 0,
    '2020-01-06' : 0,
    '2020-01-07' : 0
};

let ans2 = {'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0 };



test('Getting Correct Answer For the test1' , () => {
    expect(solution(test1)).toEqual(ans1)
    expect(solution(test2)).toEqual(ans2)
});


let test3 = {
    '2020-01-05' : 2,
    '2020-01-06' : 2
};

let ans3 = {'Mon': 2, 'Tue': 2, 'Wed': 2, 'Thu': 2, 'Fri': 2, 'Sat': 2, 'Sun': 2 };

test('Getting Correct Answer For the test2' , () => {
    expect(solution(test3)).toEqual(ans3)
});


let test4 = {
    '2003-02-02' : 2,
    '2003-02-03' : 2
};

let ans4 = {'Mon': 2, 'Tue': 2, 'Wed': 2, 'Thu': 2, 'Fri': 2, 'Sat': 2, 'Sun': 2 };


let test5 = {
    '2003-02-02' : 200000,
    '2003-02-03' : 200000
};

let ans5 = {'Mon': 200000, 'Tue': 200000, 'Wed': 200000, 'Thu': 200000, 'Fri': 200000, 'Sat': 200000, 'Sun': 200000 };


test('Getting Correct Answer For the test3' , () => {
    expect(solution(test4)).toEqual(ans4)
    expect(solution(test5)).toEqual(ans5)
});

