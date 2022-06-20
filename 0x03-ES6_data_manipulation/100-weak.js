export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.get(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const temp = weakMap.get(endpoint);
    weakMap.set(endpoint, temp + 1);
    if (weakMap.get(endpoint) >= 5) {
      throw Error('Endpoint load is high');
    }
  }
}
