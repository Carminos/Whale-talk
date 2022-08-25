// Step 1: Create a variable equal to any phrase
const input = 'suffering succotash!';

// Step 2: Create an array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3: Create an empty array
const resultArray = [];

// Step 4: Loop over input
for (let i = 0; i < input.length; i++){  // console.log(i)
  for (let j = 0; j < vowels.length; j++){  // console.log(j)
      if(input[i] === vowels[j]){  //console.log(input[i])
        resultArray.push(input[i]);
      }
  }
      if (input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
  }
}
console.log(resultArray.join('').toUpperCase());
