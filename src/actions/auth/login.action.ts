import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { checkCredentials } from "../../db/verify";

export const AuthLogin = defineAction({
  accept: 'form',
  input: z.object({
    username: z.string().min(5),
    password: z.string().min(3),
    rememberMe: z.boolean().optional(),
  }),
  handler: async ({ password, username, rememberMe }, { cookies, rewrite }) => {
    const { isValid, user } = await checkCredentials(username, password);
    if (!isValid) {
      cookies.delete('session_token');
      throw new Error("INVALID");
    } else {
      const now = new Date().getTime();
      const token = `t.${now}.${user?.role}`;
      cookies.set(
        'session_token',
        token,
        {
          path: '/',
          sameSite: 'lax',
          httpOnly: true,
          secure: false, //ONLY DEV, IN PROD ALWAYS TRUE
          expires: new Date(Date.now() + 1000 * 60 * 60 * (rememberMe ? 120 : 24)),
        }
      );
      return {
        token,
        isValid
      }
    }
  }
});
