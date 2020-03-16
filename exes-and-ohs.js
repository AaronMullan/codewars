function XO(string) {
  const myArray = Array.from(string.toUpperCase());
  let xTotal = 0;
  let oTotal = 0;
  myArray.forEach(element => {
    if(element === 'X'){ xTotal = ++xTotal };
    if(element === 'O'){ oTotal = ++oTotal };
  })
  if(xTotal === oTotal) return true;
  return false;
};



// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false