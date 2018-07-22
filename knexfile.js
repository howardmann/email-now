module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'howardmann',
      password: null,
      database: 'email_api',
      port: 5432
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
