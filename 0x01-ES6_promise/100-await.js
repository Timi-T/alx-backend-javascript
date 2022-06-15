import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    return Promise.resolve({ photo: await uploadPhoto(), user: await createUser() });
  } catch (error) {
    return Promise.resolve({ photo: null, user: null });
  }
};

export default asyncUploadUser;
