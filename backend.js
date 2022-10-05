const express = require('express')
const mysql = require('mysql')
var cors = require('cors')
const app = express()
const port = 111111


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/termektipus', (req, res) => {

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'termekadatb'
    })
    
    connection.connect()
    
    connection.query('select * from termektipus', (err, rows, fields) => {
      if (err) throw err
    
      console.log('The solution is: ', rows[0].termektipus_nev)
      res.send(rows)
    })
    
    connection.end()

  })


  app.get('/termek', (req, res) => {

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'termekadatb'
    })
    
    connection.connect()
    
    connection.query('select * from termek', (err, rows, fields) => {
      if (err) throw err
    
      console.log('The solution is: ', rows[0].termek_nev)
      res.send(rows)
    })
    
    connection.end()


   
  })  


  app.get('/tipusdarab', (req, res) => {

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'termekadatb'
    })
    
    connection.connect()
    
    connection.query(`select termektipus.termektipus_nev,count(termek_id)
    from termek 
    inner join termektipus
    on termek.termek_tipus=termektipus.termektipus_id
    group by termektipus.termektipus_nev`, (err, rows, fields) => {
      if (err) throw err
    
      //console.log('The solution is: ', rows[0].termek_nev)
      res.send(rows)
    })
    
    connection.end()


   
  })  

  app.get('/kettabla', (req, res) => {

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'termekadatb'
    })
    
    connection.connect()
    
    connection.query(`select *
    from termek
    inner join termektipus
    on termek.termek_tipus=termektipus.termektipus_id`, (err, rows, fields) => {
      if (err) throw err
    
     
      res.send(rows)
    })
    
    connection.end()

  })





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})