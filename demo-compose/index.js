const express = require('express');
const redis = require('redis');
const mysql = require('mysql');

const app = express();

const client = redis.createClient({
    host: 'redis-app',
    port: 6379
});

const mysql_client = mysql.createConnection({
    host: 'mysql-app',
    port: 3306,
    user: "root",
    password: "password",
    database: "docker"
});

client.set('visits', 0);

mysql_client.connect();

app.get('/user', (req, res) => {
    mysql_client.query("SELECT * FROM user", (error, results, fields) => {
        if (error) res.send("Error");
        res.json(results)
    })
});

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    })
});

app.listen(8081, () => {
    console.log('Server listening on port 8081...');
})