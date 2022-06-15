import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([promise1, promise2]).then(
    (data) => {
      const output = `${data[0].body} ${data[1].firstName} ${data[1].lastName}`;
      console.log(output);
    },
  )
    .catch(() => console.log('Signup system offline'));
}
