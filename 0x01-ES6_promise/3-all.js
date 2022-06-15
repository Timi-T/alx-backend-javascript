import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  promise1.then(
    (photoInfo) => {
      promise2.then(
        (userInfo) => {
          console.log(`${photoInfo.body} ${userInfo.firstName} ${userInfo.lastName}`);
        },
        () => {
          console.log(Error('Signup system offline'));
        },
      );
    },
    () => {
      console.log(Error('Signup system offline'));
    },
  );
}
