const env = process.env.NODE_ENV;

const config = {
  dev: env !== "production",
  scheme: "https",
  hostname: "ayechantm.smicken.com",
  port: 3000,
};

module.exports = {
  ...config,
  baseURL: `${config.scheme}://${config.hostname}:${config.port}`,
};
