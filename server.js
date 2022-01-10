const mysql = require('mysql2');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Egzu0326!',
      database: 'blog_posts'
    },
    console.log('Connected to the blog_posts database.')
  );
app.get('/recipes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/blog.html'));
})

app.get('/listusers', (req, res) => {
 let sql = `SELECT * FROM user_accounts`;

 db.query(sql, (err, data, fields) => {
  if(err) throw err;
  res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
  })
 })

});

app.post('/addUser', (req, res) => {
    let sql = `INSERT INTO user_accounts(id, username, email, password_) VALUES (?)`;
    let values = [
        req.body.id,
        req.body.username,
        req.body.email,
        req.body.password
    ]
   
    db.query(sql, [values], (err, data, fields) => {
     if(err) throw err;
     res.json({
         status: 200,
         message: "New User added successfully"
     })
    })
   
   });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})