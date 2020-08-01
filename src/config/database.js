require('dotenv/config')

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_URL,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true
  }
}
