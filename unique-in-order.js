const uniqueInOrder=function(iterable){
  const myCoolIterable = Array.from(iterable);
  const uniqueArray = [];
  for (i = 0; i < myCoolIterable.length; i++) {
    if(myCoolIterable[i] !== myCoolIterable[i-1]){
      uniqueArray.push(myCoolIterable[i])
    }
  }
  return uniqueArray;
};

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]