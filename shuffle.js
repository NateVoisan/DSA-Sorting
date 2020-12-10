'use strict';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        swap(i, randomIndex, arr);
    }
    return arr;
}

function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function main() {
    shuffle(DATA);
    console.log(DATA);
}

main();