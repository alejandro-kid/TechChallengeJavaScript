const isAnagram = (str1, str2) => {
    let s1 = str1.replace(/\s/g, '').toLowerCase();
    let s2 = str2.replace(/\s/g, '').toLowerCase();
  
    let sortedS1 = s1.split('').sort().join('');
    let sortedS2 = s2.split('').sort().join('');
  
    return sortedS1 === sortedS2;
  };

const result_1 = isAnagram('silent', 'listen'); // true
const result_2 = isAnagram('Dave', 'David'); // false

console.log(result_1);
console.log(result_2);
