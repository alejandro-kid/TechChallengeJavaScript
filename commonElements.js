const findCommonElements = (arrays) => {

    const common = arrays[0].filter(item => {
      return arrays.slice(1).every((array) => {
        return new Set(array).has(item);
      });
    });
  
    return common;
  };

const arrays = [[1, 2, 3, 4], [2, 4, 6], [2, 4, 7]];

const common = findCommonElements(arrays);
  
console.log(common); // [2, 4]
