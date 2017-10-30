/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/\W/g, ''); 
    for(var i = 0; i < s.length; i++ ){
        let x = s.length -1 -i;
        if (s[x] !== s[i])
            return false;
    }
    return true;
};