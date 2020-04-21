function binarySearch(sortedArray, item) {
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = sortedArray[mid];
        if (guess === item) {
            return mid;
        }
        if (guess < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null;
}

function example() {
    const array = [1, 2, 60, 210, 500, 722, 723, 811, 909, 1000];
    const searchElements = [1, 722, 1000];
    console.log("binary search example:");
    for (const searchElement of searchElements) {
        const foundIndex = binarySearch(array, searchElement);
        console.log(`array: ${JSON.stringify(array)}, searchElement: ${searchElement}, foundIndex: ${foundIndex}`);
    }
}

module.exports = {
    binarySearch,
    example,
};