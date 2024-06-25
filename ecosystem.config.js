module.exports = {
  apps : [{
    name: "app",
    script: "./src/server.js",
    instances: "máx",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}