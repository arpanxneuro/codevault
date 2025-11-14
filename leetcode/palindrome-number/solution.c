// not working duw to signed int overflow

bool isPalindrome(int x) {
    if (x < 0)
        return false;
    int rev = 0, original = x, remainder;
    while (x != 0) {
        remainder = x % 10;
        rev = rev * 10 + remainder;
        x = x / 10;
    }
    if (original == rev)
        return true;
    return false;
}