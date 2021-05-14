let input='a whale of a deal!';
const vowels=['a', 'e', 'i', 'o', 'u'];
let resultArray=[];

//a loop that iterate through each letter of the input variable text
for (let i=0; i<input.length; i++) {

  //a inner loop that iterate through the vowels array each time the outer loop runs
  for (let j=0; j<vowels.length; j++) {
 
    //compares the input letter to every letter in the vowels array
     if (input[i] === vowels[j]) {
       resultArray.push(input[i]);
    }
  }
  
  //checks if each letter in the input string is equal to 'e' or 'u'
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
}

//print the whale language in one string with uppercase
console.log(resultArray.join('').toUpperCase());
