var isValid = function(s) {
    if (s.length <= 1)
        return false;
    
    let pending = [];
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    };
    
    for(var i in s) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
            pending.push(s[i]);
        else if(map[pending[pending.length -1]] === s[i])
            pending.pop();
        else return false;   
    };
    
    return !pending.length;

};