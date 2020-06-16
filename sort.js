const dummyData = [ 'ball', 'creedence', 'aardvark', 'lemon'];

const weirdNumbers = [800, 3,20]

const alphabetize = (data) => data.sort((a, b) => {
  switch(true){
    case(a > b): return 1;
    case(a < b): return -1;
    return 0;
  }
});

const sortedData = alphabetize(dummyData);

const simpleSort = dummyData.sort();

const numberSort = alphabetize(weirdNumbers);

console.log(sortedData)

console.log(simpleSort)

console.log(numberSort)