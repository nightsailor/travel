;[
  `DATABASE_URL`,
  // `VAPID_PUBLIC_KEY`,
  // `VAPID_PRIVATE_KEY`,
].forEach((variable) => {
  if (!process.env[variable]) {
    throw new Error(`Missing environment variable: ${variable}`)
  }
})

export const config = {
  APP_NAME: 'Voyager',
  JWT_SECRET:
    process.env.NEXTAUTH_SECRET! || '3ddfc232597f75469ec71548931ac96d',
  DATABASE_URL: process.env.DATABASE_URL!,
  BCRYPT_SALT: process.env.BCRYPT_SALT! || 12,
  url: {
    CLIENT_URL: process.env.CLIENT_URL! || 'http://localhost:3000',
  },
  vapid: {
    publicKey: process.env.VAPID_PUBLIC_KEY,
    privateKey: process.env.VAPID_PRIVATE_KEY,
  },
}
