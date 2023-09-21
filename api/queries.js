const db = require('pg')


// GET THE LIST OF ALL THE USERS IN DB
const getUsers = (req, res) => {

    const pool = new db.Pool({
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT

    })
    pool
        .connect()
        .then(() => { res.status(200), console.log('[server]: ', req.ip, req.headers['user-agent']) }) // user-agent specifies the browser user is logged into
        .catch((err) => console.log('connection failed ', err.stack))

    pool
        .query('SELECT * FROM users')
        .then((data) => { 
            res.status(200).json(data.rows)
            pool.end()
        })
        .catch((err) => { console.log("error happend ", err.stack)})
    
}

// INSERT USER INTO DB
const addUser = (req, res) => {

    const pool = new db.Pool({

        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT

    });
    pool.connect()

    const data = req.body

    pool.query('INSERT INTO users (id, name, email, banned) VALUES ($1, $2, $3, $4) RETURNING *', [data.id, data.name, data.email, data.banned], (err, data) => {
            if (err) { console.log(err.stack)}
            console.log(data)
        })
        .then(() => pool.end((err) => {
            console.log('client has disconnected')
            if (err) {
              console.log('error during disconnection', err.stack)
            }
          }))
        .catch((e) => console.error(e.stack))
}

module.exports = {
    getUsers,
    addUser
}