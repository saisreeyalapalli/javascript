function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}


console.log(chunkArray([1, 2, 3, 4, 5], 2));


function Array1(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    let rs = arr.slice(i, i + size);
    result.push(rs);
  }

  return result;
}
console.log(Array1(["sai","sree",'s','a','i'], 2));



