const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');


const app = express()
app.use(cors())

const db = mysql2.createConnection({
    host     : 'localhost',
    user     : 'root',
    // password : 'password',
    database : 'parkdb'
  });

app.get('/topic', (req, res)=>{
    const sql = 'SELECT * FROM topic';
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})




app.get('/', (re, res)=> {
    return res.json('hello server');
})

app.listen(8081, ()=>{
    console.log('server listening');
})
