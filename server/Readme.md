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

4. lb model
    - model name: meetups
    - source: mongoDB
    - expose: yes
    - plural:
    - common: common
    - prop1: name : string, required, defaultvalue: blank
    - prop2: city : string, required, defaultvalue: blank
    - prop3: address : string, not required, defaultvalue: blank

5. in common/models we have meetups.json with all the props

6. mongod, npm start and check the new meetupz link created in the page

7. create 2 meetups in put/meetups and see them in mongo
