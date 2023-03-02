/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

//bawah ini dari tutorial mysql

module.exports = {
  env: {
    'MYSQL_HOST': '127.0.0.1',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': {database_name},
    'MYSQL_USER': {user_name},
    'MYSQL_PASSWORD': {user_password},
  }
}