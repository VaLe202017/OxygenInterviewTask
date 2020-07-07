module.exports = {
  HOST: "db-postgresql-fra1-48258-do-user-7479798-0.a.db.ondigitalocean.com",
  USER: "doadmin",
  PASSWORD: "likvmv6ym091iwix",
  DB: "rauldb",
  dialect: "postgresql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};