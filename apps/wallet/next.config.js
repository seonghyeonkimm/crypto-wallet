const withTM = require("next-transpile-modules")(["wallet-javascript"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
