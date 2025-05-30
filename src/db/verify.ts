import bcrypt from 'bcrypt';
import { usersAllowed } from './users';
const saltRounds = 10;

// export const createACryptPass = async () => {
//   const users = [];
//   for (const it in usersAllowed) {
//     if (Object.prototype.hasOwnProperty.call(usersAllowed, it)) {
//       const user = usersAllowed[it];
//       const seedCreator = user.seed;
//       const hash = await bcrypt.hash(seedCreator, saltRounds);
//       users.push({ ...user, secret: hash })
//     }
//   }
//   return users;
// }

export const checkCredentials = async (user: string, pass: string) => {
  let isValid = false;
  const userDB = usersAllowed.find(it => it.name === user);
  if (!userDB) return { isValid, userDB };

  console.log({ userDB });

  isValid = await bcrypt.compare(pass, userDB.secret);

  return { isValid, user: userDB };
}
