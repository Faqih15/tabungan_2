/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

//bawah ini dari tutorial mysql

module.exports = {
  env: {
    MYSQL_HOST: "127.0.0.1",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "tabungan1",
    MYSQL_USER: "jahid",
    MYSQL_PASSWORD: "password",
  },
};

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: "empty",
//       };
//     }

//     return config;
//   },
// };
