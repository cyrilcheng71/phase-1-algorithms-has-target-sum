function hasTargetSum(array, target) {
  // Write your algorithm here

//loop to iterate over the array length
for(let i=0; i <array.length; i++){

  //assign current array value
  const currentArray = array[i]

  //substact the target value from current array
  const difference = target - currentArray
// second loop
// adding one to the current array position 
  for(let j = i + 1; j < array.length; j++ ){

    //get the current position of the array with added one
    const currentArrayJ = array[j]
//check if currentArrayJ if equal to the difference
//if yes then return true
    if(currentArrayJ === difference){return true}
  }
}
return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
