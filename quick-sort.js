function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const smaller = [];
    const bigger = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        const aI = arr[i];
        if (aI <= pivot) {
            smaller.push(aI);
            continue;
        }
        bigger.push(aI);
    }
    return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

function example() {
    console.log("quick sort example");
    const baseArray = [5, 495, 9, 91, 10, 1123, 1, 22, 22];
    const sortedArray = [1, 5, 9, 10, 22, 22, 91, 495, 1123];
    const descendingSortedArray = [1123, 495, 91, 22, 22, 10, 9, 5, 1];
    for (const array of [baseArray, sortedArray, descendingSortedArray]) {
        const sortedArray = quickSort(array);
        console.log(`incoming array: ${JSON.stringify(array)}, sortedArray: ${sortedArray}`);
    }
}

module.exports = {
    quickSort,
    example
};