export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  for (const name of reportWithIterator) {
    if (reportWithIterator.indexOf(name) === reportWithIterator.length - 1) {
      names += name;
    } else {
      names += `${name} | `;
    }
  }
  return names;
}
