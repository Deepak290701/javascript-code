const { expect } = require('@jest/globals');
const solution = require('./program');

let dict = {
    '2020-01-01' : 4,
    '2020-01-02' : 4,
    '2020-01-03' : 6,
    '2020-01-04' : 8,
    '2020-01-05' : 2,
    '2020-01-06' : -6,
    '2020-01-07' : 2,
    '2020-01-08' : -2,
};

let ans = {
    'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2 
};

test('Getting Correct Answer For the input' , () => {
    expect(solution(dict)).toEqual(ans)
});