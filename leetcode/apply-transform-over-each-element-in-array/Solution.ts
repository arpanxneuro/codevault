function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const myarr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        myarr.push(fn(arr[i], i));
    }
    return myarr;
};