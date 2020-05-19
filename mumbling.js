function accum(s) {
  const array = Array.from(s);
  const filled =[];
    array.forEach(element => {
    let enumerated = new Array(element[i]);
    enumerated.fill(element, 0, i)
    console.log(enumerated)
    filled.push(enumerated);
  })
  return filled;
}

  // const flatArray = mumbledArray.flat();
  // return flatArray.join('-')
// }

console.log(accum('abc'));

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"