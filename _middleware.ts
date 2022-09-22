import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const dev = process.env.NODE_ENV === 'development';
  if (!dev) {
    const USERNAME = process.env.BASIC_AUTH_USERNAME;
    const PASSWORD = process.env.BASIC_AUTH_PASSWORD;
    const hasUsername = typeof USERNAME === 'string' && USERNAME.length > 0;
    const hasPassword = typeof PASSWORD === 'string' && PASSWORD.length > 0;

    // If BASIC_AUTH_USERNAME and BASIC_AUTH_PASSWORD have been set - let's use them
    if (hasUsername && hasPassword) {
      const basicAuth = req.headers.get('authorization');

      if (basicAuth) {
        const auth = basicAuth.split(' ')[1];
        const [username, password] = Buffer.from(auth, 'base64')
          .toString()
          .split(':');

        if (!username || !password) {
          throw new Error(
            'Missing required username and password for basic authentication.',
          );
        }

        if (username === USERNAME && password === PASSWORD) {
          return NextResponse.next();
        }
      }

      return new Response('Auth required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }
  } else {
    return NextResponse.next();
  }
}
