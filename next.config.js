/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

//bawah ini dari tutorial mysql

module.exports = {
  env: {
    MYSQL_HOST: "localhost",
    MYSQL_PORT: 3306,
    MYSQL_DATABASE: "my_tabungan_1",
    MYSQL_USER: "jahid",
    MYSQL_PASSWORD: "password",
    NEXT_PUBLIC_SUPABASE_URL: "https://qbykthllyuwopcqmgfxs.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFieWt0aGxseXV3b3BjcW1nZnhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODUzODg2NiwiZXhwIjoyMDA0MTE0ODY2fQ.wW5G8F6eJcoHBiRq1PxpVAiimGInyekIonvWYLeTMtI",
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
