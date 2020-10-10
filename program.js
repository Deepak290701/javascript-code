function solution(dict){
    
    let D = {
        'Mon' : null,
        'Tue' : null,
        'Wed' : null,
        'Thu' : null,
        'Fri' : null,
        'Sat' : null,
        'Sun' : null
    };

    let day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    
    for(let key in dict){
        let date = new Date(key);

        let tempDay = day[date.getDay()];

        if(D[tempDay]==null){
            D[tempDay] = dict[key];
        } 
        else{
            D[tempDay] += dict[key];
        }
    }

    for(let i = 2;i<=6;i++){
        if(D[day[i]]==null){
            let prev = D[day[i-1]];
            let prevToPrev = D[day[i-2]];
            D[day[i]] = 2*prev - prevToPrev;
        }
    }


    return D;
};

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

let dict2 = {
    '2020-01-01' : 6,
    '2020-01-04' : 12,
    '2020-01-05' : 14,
    '2020-01-06' : 2,
    '2020-01-07' : 4,
};

// console.log(solution(dict));
// console.log(solution(dict2));

module.exports = solution;