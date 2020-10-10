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


let test3 = {
    '2020-01-05' : 2,
    '2020-01-06' : 2
};

let ans3 = {'Mon': 2, 'Tue': 2, 'Wed': 2, 'Thu': 2, 'Fri': 2, 'Sat': 2, 'Sun': 2 };


test('Getting Correct Answer For the test1' , () => {
    expect(solution(test1)).toEqual(ans1)
    expect(solution(test2)).toEqual(ans2)
});
test('Getting Correct Answer For the test2' , () => {
    expect(solution(test3)).toEqual(ans3)
});
