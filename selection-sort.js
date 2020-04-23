function findSmallest(array) {
    let smallestElementIndex = 0;
    let smallestElement = array[smallestElementIndex];
    for (let i = 1; i < array.length; i++) {
        let iElement = array[i];
        if (iElement < smallestElement) {
            smallestElement = iElement;
            smallestElementIndex = i;
        }
    }
    return smallestElementIndex;
}

function selectionSort(array) {
    const arrayCopy = [...array];
    const resultArray = [];
    while(arrayCopy.length) {
        const smallestIndex = findSmallest(arrayCopy);
        const [toPush] = arrayCopy.splice(smallestIndex, 1);
        resultArray.push(toPush);
    }
    return resultArray;
}

function example() {
    console.log("selection sort example");
    const baseArray = [5, 495, 9, 91, 10, 1123, 1, 22, 22];
    const sortedArray = [1, 5, 9, 10, 22, 22, 91, 495, 1123];
    const descendingSortedArray = [1123, 495, 91, 22, 22, 10, 9, 5, 1];
    for (const array of [baseArray, sortedArray, descendingSortedArray]) {
        const sortedArray = selectionSort(array);
        console.log(`incoming array: ${JSON.stringify(array)}, sortedArray: ${sortedArray}`);
    }
}

module.exports = { selectionSort, example };