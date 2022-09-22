import auth from 'basic-auth';
import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSidePropsContext } from 'next'

/**
 * Create a basic authentication middleware function that checks
 * against the given credentials.
 */
export const basicAuth = (username?: string, password?: string) => {
  if (!username || !password) {
    throw new Error(
      'Missing required username and password for basic authentication.',
    );
  }

  return (req?: IncomingMessage, res?: ServerResponse) => {
    if (req && res) {
      const user = auth(req);

      if (user && user.name === username && user.pass === password) {
        return;
      } else {
        res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
        res.statusCode = 401;
        res.end("I'm afraid I cannot let you do that.");
      }
    }
  };
};

export const handleBasicAuthForPage = async (ctx: GetServerSidePropsContext) => {
  const { req, res } = ctx;

  const dev = process.env.NODE_ENV === 'development';

  if (!dev) {
    const USERNAME = process.env.BASIC_AUTH_USERNAME;
    const PASSWORD = process.env.BASIC_AUTH_PASSWORD;
    const hasUsername = typeof USERNAME === 'string' && USERNAME.length > 0;
    const hasPassword = typeof PASSWORD === 'string' && PASSWORD.length > 0;

    // If BASIC_AUTH_USERNAME and BASIC_AUTH_PASSWORD have been set - let's use them
    if (hasUsername && hasPassword) {
      basicAuth(USERNAME, PASSWORD)(req, res);
    }
  }
};
