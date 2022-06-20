export default function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (set.has(element) === false) {
      return false;
    }
  }
  return true;
}
