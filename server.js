const express = require ("express")
const mysql = require("mysql")
const cors = require("cors")

const app= express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    database:"perpustakaandb",
    user:"root",
    password:"",
})

app.post('/perpustakaandb', (req, res) => {
    const sql = "INSERT INTO siswa ('Nama','Tempat Lahir,'TT/BB/YYYY','NIM','Password') Values (?)";
    const values= [
        req.body.Nama,
        req.body.TempatLahir,
        req.body.WaktuLair,
        req.body.Nim,
        req.body.Password,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(3000, () => {
    console.log("server ready...")
})