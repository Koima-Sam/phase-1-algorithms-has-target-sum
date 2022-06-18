function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i=0; i<array.length; i++){
    for(let x = i+1; x<array.length; x++){
      if(array[i] + array[x]===target){
        return true
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  Take one number from the array,
    add it with the other numbers in array

      if it equals to target return true

  return false if none equals to the target
*/

/*
  Add written explanation of your solution here
  Go through the numbers array
  check the first element then 
  does it add up to the target with second number no?
  does it add up to the target with third number no?
  does it add up to the target with fourth number?

  go to the second number
  does it add up to the third number no?
  does it add up to the target with the fourth number if Yes
  return true;
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5,6,8,9], 17));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5], 3));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5,6,3,4,5,6], 9));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
