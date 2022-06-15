import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2]).then((data) => {
    for (const eachData of data) {
      if ('reason' in eachData) {
        eachData.value = eachData.reason;
        delete eachData.reason;
      }
    }
    return data;
  });
}
