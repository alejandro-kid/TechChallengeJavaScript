# Tech Datamart Challenge

The Tech Datamart Challenge is about solving a few problems using your knowledge.

## Problem 4

Write a function called isAnagram that accepts two text strings as parameters and determines if they are anagrams (that is, if they have exactly the same letters, but in a different order).

### Solution

```javascript
function isAnagram(str1, str2) {
    let s1 = str1.replace(/\s/g, '').toLowerCase(); 
    let s2 = str2.replace(/\s/g, '').toLowerCase();
  
    let sortedS1 = s1.split('').sort().join(''); 
    let sortedS2 = s2.split('').sort().join('');
  
    return sortedS1 === sortedS2; 
  }
```

The implemented solution cleans both text chains delete spaces, and convert to lowercase. After that split each chain into individual characters and order it. In the end, both new arrays are compared and returned the result.

## Problem 5

Write a function called findCommonElements that accepts a list of lists as a parameter and returns a list with the elements common to all sub-lists.

### Solution

```javascript
function findCommonElements(arrays) {

    const common = arrays[0].filter(item => {
      return arrays.slice(1).every((array) => {
        return new Set(array).has(item);
      });
    });
  
    return common;
  }
```

By converting each inner array into a **Set**, we can use the **has()** method to check for the existence of an item, which has a time complexity of **O(1)** on average. This will provide better performance compared to using **includes()**, which has a time complexity of **O(n)**.
Code with **includes()**:

```javascript
function findCommonElements(arrays) {

    const common = arrays[0].filter(item => {
      return arrays.slice(1).every((array) => {
        return array.includes(item);
      });
    });
  
    return common;
  }
```

## Problem 6

Write an implementation for the mergesort sorting algorithm.

### Solution

Merge sort is a well-known sort algorithm that splits a sequence of elements into two smaller sub-sequences and then sorts them recursively. The sort ends when the sub-sequences have only one element. The sub-sequences are then merged into a single-ordered sequence. Complexity of **O(n log n)**.

```javascript
const  mergeSort = (arr) => {
    if (arr.length < 2) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  };
  
const merge = (left, right) => {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return [...result, ...left, ...right];
  };
```
