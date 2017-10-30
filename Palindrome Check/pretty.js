/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/\W/g, '');
    
    // if(!s) return true;
       
    return s === s.split('').reverse().join('');  
};