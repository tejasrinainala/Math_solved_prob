var isPalindrome = function(x) {
    let y;
    y=x.toString()
    const revStr=y.split('').reverse('').join('')
    return revStr===y;
};
