export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  let compoundStr = '';
  set.forEach((str) => {
    const compare = str.split(startString);
    if (compare.length > 1 && compare[0] === '') {
      compoundStr ? compoundStr += `-${compare[1]}` : compoundStr += `${compare[1]}`; // eslint-disable-line no-unused-expressions
    }
  });
  return compoundStr;
}
