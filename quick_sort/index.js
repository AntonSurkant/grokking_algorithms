function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivotIdx = Math.floor(Math.random() * arr.length);

    const pivot = arr[pivotIdx];

    const arrLess = arr.filter((value, index) => index !== pivotIdx && value <= pivot)

    const arrGreater = arr.filter((value) => value > pivot)

    return quicksort(arrLess).concat(pivot).concat(quicksort(arrGreater));
}

console.log(quicksort([10, 5, 2, 3, 1, 22, 34, 9, 4, 55, 2, 4]));