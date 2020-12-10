'use strict';

const LinkedList = require('./sort');
const {display} = require('./list');

function mSortList(list) {
    let currNode = list.head;
    if (currNode.next === null) {
        return list;
    }
    let length = 1;
    while (currNode.next !== null) {
        length++;
        currNode = currNode.next;
    }
    const middleI = Math.floor(length / 2);
    let leftList = splitList(list, 0, middleI);
    let rightList = splitList(list, middleI, length);
    leftList = mSortList(leftList);
    rightList = mSortList(rightList);
    return mergeLists(leftList, rightList);
}

function splitList(list, startI, endI) {
    let currNode = list.head;
    if (currNode === null) return;
    const returnList = new LinkedList();
    let i = 0;
    while (currNode !== null) {
        if (i >= startI && i < endI) {
            returnList.insertLast(currNode.value);
        }
        i++;
        currNode = currNode.next;
    }
    return returnList;
}

function mergeLists(leftList, rightList) {
    const mergedList = new LinkedList();
    let currLeft = leftList.head;
    let currRight = rightList.head;
    while (currLeft && currRight) {
        if (currLeft.value <= currRight.value) {
            mergedList.insertLast(currLeft.value);
            currLeft = currLeft.next;
        } else {
            mergedList.insertLast(currRight.value);
            currRight = currRight.next;
        }
    }
    while (currLeft) {
        mergedList.insertLast(currLeft.value);
        currLeft = currLeft.next;
    }
    while (currRight) {
        mergedList.insertLast(currRight.value);
        currRight = currRight.next;
    }
    return mergedList;
}

function main() {
    const LL = new LinkedList();
    LL.insertFirst(7);
    LL.insertFirst(8);
    LL.insertFirst(3);
    LL.insertFirst(6);
    LL.insertFirst(4);
    LL.insertFirst(1);
    LL.insertFirst(2);
    LL.insertFirst(5);
  
    const sorted = mSortList(LL);
    display(sorted);
}

main();

function main2() {
    const LL1 = new LinkedList();
    LL1.insertFirst(2);

    const LL2 = new LinkedList();
    LL2.insertFirst(4);

    const merged = mergeLists(LL1, LL2);
    display(merged);
}

main2();