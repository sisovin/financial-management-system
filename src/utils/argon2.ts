import argon2 from 'argon2';

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  try {
    const isMatch = await argon2.verify(hash, password);
    return isMatch;
  } catch (error) {
    throw new Error('Error verifying password');
  }
};
