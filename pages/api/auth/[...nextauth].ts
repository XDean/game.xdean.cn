import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';
import { OkPacket } from 'mysql';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';
import { NextApiHandler } from 'next/dist/shared/lib/utils';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { mysql } from '../../../src/lib/mysql';

const auth: NextApiHandler = (req, res) => {
  return NextAuth(req, res, {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: Number(process.env.EMAIL_SERVER_PORT),
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
          secure: true,
        },
        from: process.env.EMAIL_FROM,
        secret: process.env.SECRET,
      }),
    ],
    adapter: TypeORMLegacyAdapter({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      database: process.env.MYSQL_DATABASE,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      synchronize: true,
    } as MysqlConnectionOptions),
    secret: process.env.SECRET,
    session: {
      strategy: 'jwt',
    },
    jwt: {
      secret: process.env.SECRET,
    },
    theme: {
      colorScheme: 'auto',
      logo: '/favicon.ico',
    },
    callbacks: {
      jwt: async ({token}) => {
        if (req.url?.indexOf('/auth/session') !== -1) {
          const name = req.query['name'];
          if (token.email && name && typeof name === 'string') {
            const res = await mysql.query<OkPacket>(`UPDATE xdean.users
                                                     SET name = ?
                                                     WHERE email = ?`, [name, token.email]);
            if (res.affectedRows === 1) {
              token.name = name;
            }
          }
        }
        return token;
      },
      session: async ({session, token}) => {
        session.user && token.name && (session.user.name = token.name);
        return session;
      },
    },
  });
};

export default auth;