/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1)
        return false;
    
    let pending = [];
    let open = ['(', '{', '['];
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    };
    
    for(var i in s) {
        let curr = s[i];
        if(open.indexOf(curr) !== -1)
            pending.push(curr);
        else if(map[pending[pending.length -1]] === curr)
            pending.pop();
        else return false;   
    };
    
    return pending.length ? false : true;

};