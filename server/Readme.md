## Installing backend steps

1. npm i --save loopback-connector-mongodb

2. lb datasource mongoDS --connector mongoDB
   - enter
   - host: localhost
   - port: 27017
   - user:
   - password:
   - database meetupz-app

3. In datasources.json change
{
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "mongoDS": {
    "host": "localhost",
    "port": 27017,
    "url": "",
    "database": "meetupz-app",
    "password": "",
    "name": "mongoDS",
    "user": "",
    "connector": "mongodb"
  }
}

to 

{
  "db": {
    "host": "localhost",
    "port": 27017,
    "url": "",
    "database": "meetupz-app",
    "password": "",
    "name": "mongoDS",
    "user": "",
    "connector": "mongodb"
  }
}

