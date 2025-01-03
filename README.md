# Node Boilerplate

## Knex commands
- npx knex migrate:latest --knexfile ./config/knexfile.js --env main
- npx knex migrate:make [x] --knexfile ./config/knexfile.js --env main
- npx knex seed:make [x] --knexfile ./config/knexfile.js --env main
- npx knex seed:run --knexfile ./config/knexfile.js --env main

## pm2 commands
- pm2 restart app_name/pid
- pm2 reload app_name/pid
- pm2 stop app_name/pid
- pm2 delete app_name/pid