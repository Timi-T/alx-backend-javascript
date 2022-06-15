export default function uploadPhoto(filename) {
  const rejectedPromise = new Promise((resolve, reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
  return rejectedPromise;
}
