function romanToInt(s: string): number {
    const romanMap: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = romanMap[s[i]], next = romanMap[s[i + 1]];
        if (next > curr) {
            total += next - curr;
            i++;
        } else {
            total += curr;
        }
    }
    return total;
};