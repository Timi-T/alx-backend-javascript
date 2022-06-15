export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve({ success: 200, body: 'Success' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  return promise;
}
