var divideString = function (s, k, fill) {
    let arr = [];
    for (let i = 0; i < s.length; i += k) {
        let part = s.slice(i, i + k);
        if (part.length < k) {
            part = part + fill.repeat(k - part.length);
        }
        arr.push(part);
    }

    return arr;
};