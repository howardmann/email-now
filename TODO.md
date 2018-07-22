# App
- Email subscriber list API
- Captures name, email, phone number and stores in database
- Sends auto email reply to user

# Tech stack
- Express: API
- Postgres: DB
- Sendgrid: email client

# TODO
- [x] Express routes 
- [x] Validation helpers
- [x] Postgresql tables
- [x] Express route and controller to create entry
- [x] Production config for Now and Postgres DaaS
- [ ] Sendgrid email
- [ ] Send confirmation email only if unique


# Knex helpers
```bash
#== During development
# Make migration file
knex migrate:make emails
# Rollback to previous migration
knex migrate:rollback
# Run latest migrations
knex migrate:latest
# Run seed files (refer knexfile.js to see reference of seed file location)
knex seed:run

#== During production
# Change the knexfile.js to include the DaaS DATABASE_URL in the connection. Providers include elephantsql. Specify the folders you want seed files to come from if different to dev

#Run migration for production
knex migrate:latest --env production

#Run seed files if desired for production
knex seed:run --env production
# Note sometimes this doesnt work so you will need to explicitly set the env as production
NODE_ENV=production knex seed:run
```