'use strict';

function bucketSort(arr, min, max) {
    const numMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (numMap.get(arr[i]) === undefined) {
            numMap.set(arr[i], 1);
        } else {
            numMap.set(arr[i], numMap.get(arr[i]) + 1);
        }
    }
    let arrI = 0;
    for (let i = min; i <= max; i++) {
        let numAppearing = numMap.get(i);
        while (numAppearing) {
            arr[arrI] = i;
            numAppearing--;
            arrI++;
        }
    }
    return arr;
}

function main() {
    const ARR = [3, 7, 4, 9, 12, 5, 19];
    const MAX = Math.max(...ARR);
    const MIN = Math.min(...ARR);
    bucketSort(ARR, MIN, MAX);
    console.log(ARR);
}

main();