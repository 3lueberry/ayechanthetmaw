const env = process.env.NODE_ENV;

const config = {
  dev: env !== "production",
  scheme: "http",
  hostname: "localhost",
  port: 3000,
};

module.exports = {
  ...config,
  baseURL: `${config.scheme}://${config.hostname}:${config.port}`,
};
