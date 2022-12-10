module.exports= {
  "development": {
    "username": "docker",
    "password": "docker",
    "database": "final",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "port" : 3306
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  }
}
