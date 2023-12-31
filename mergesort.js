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

console.log(mergeSort([1, 3, 5, 7, 2, 4, 6, 8]));