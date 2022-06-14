export default function appendToEachArrayValue(array, appendString) {
  for (var idx of array) {
    const index = array.indexOf(idx)
    array[index] = appendString + idx;
  }

  return array;
}
