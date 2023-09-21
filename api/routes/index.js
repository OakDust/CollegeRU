var express = require('express');
var router = express.Router();
const db = require('pg')
const { getUsers, addUser } = require('../queries') 


router.get('/', (req, res) => {
    // getUsers(req, res)
    console.log(req.socket.remoteAddress)
    res.status(200).json('ok').end()
})

// HANDLING THE GET REQUEST => SENDING ALL THE PDF'S
router.get('/curriculum/:caption', (req, res) => {
    console.log(req.params.caption)
    res.redirect('/pdf/curriculum_graffic/' + req.params.caption)
})

router.get('/education/:folder/:year/:caption', (req, res) => {
    res.redirect('/pdf' + '/' + req.params.folder + '/' + req.params.year + '/' + req.params.caption)
})

router.post('/', (req, res) => {
//     const pool = new db.Pool({

//         database: process.env.DB_NAME,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT

//     });
//     pool.connect()

//     const data = req.body
// // console.log(req.body.name)
    

//     pool.query('INSERT INTO users (id, name, email, banned) VALUES ($1, $2, $3, $4) RETURNING *', [data.id, data.name, data.email, data.banned], (err, data) => {
//             if (err) { console.log(err.stack)}
//             console.log(data.rows)
//         })
//         .then(() => pool.end((err) => {
//             console.log('client has disconnected')
//             if (err) {
//               console.log('error during disconnection', err.stack)
//             }
//           }))
//         .catch((e) => console.error(e.stack))
        // addUser(req, res)
    
})

module.exports = router;
