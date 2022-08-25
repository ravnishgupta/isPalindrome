/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var y = x.toString()
    var l = y.split("")
    return(l.reverse().join("") === y)    
};