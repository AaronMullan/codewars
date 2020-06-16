const data = [1, 2, 3, 4]

data.forEach(element => console.log(element));

const mappeddata = data.map(element => element*2);

console.log(mappeddata);

const filtereddata = data.filter(element => element % 3 == 0)

console.log(filtereddata);

function datalooper (stuff) {
  for (let i=0; i < stuff.length; i++)
  console.log(i*3);
}
datalooper(data);

const reduceddata = data.reduce((acc, current) => acc + current, 0);

console.log(reduceddata)