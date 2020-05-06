function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1))
}
console.log(sum([99,0,12,1]))

const maxArr = [100, 2, 400, 0, 2, 60, 9, 14999];
function max(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const first = arr[0];
    const restMax = max(arr.slice(1));
    return first > restMax ? first : restMax;
}
console.log(max(maxArr));