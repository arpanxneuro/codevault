function isPalindrome(x: number): boolean {
    const n = x.toString();
    let rev = "";
    for (let i = n.length - 1; i >= 0; i--) {
        rev += n[i];
    }
    return n === rev;
};