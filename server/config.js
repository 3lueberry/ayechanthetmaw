const env = process.env.NODE_ENV;

const config = {
  dev: env !== "production",
  scheme: "https",
  hostname: "ayechantm.smicken.com",
  port: null,
};

module.exports = {
  ...config,
  baseURL: `${config.scheme}://${config.hostname}` + (config.port ? `:${config.port}` : ""),
};
