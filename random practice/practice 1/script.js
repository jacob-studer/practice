//Write a function that takes in a string and outputs the number of vowels (not counting y).
 //Ex:
 //Input: "hello"
 //Output: 2
 //Input: "you are great!"
 //Output: 6
 //Input: "why?"
// Output: 0

const countVowels2 = (str) => { //const countVowels = function(str)
    let count = 0; 
    const input = str.toLowerCase();
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < input.length; i++) {
      if (vowelArr.includes(input[i])) {
        count++;
      }
    }
    return count;
  }
  console.log(countVowels2('why?'));