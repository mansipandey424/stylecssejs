import express from "express"
import path from 'path'
import { fileURLToPath } from 'url'; 
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))


const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')))
app.post('/form', function(req, res){
// var x = req.body.fname
// var y = req.body.lname
// var z = req.body.username


  console.log(req.body)
//     res.render("form.ejs", {"fname":x, "lname":y, "username":z });
  });

app.get('/form', (req, res)=> {
    console.log(__dirname)
    //   res.sendFile(path.join(__dirname, 'views/form.ejs'))
    res.render("form.ejs", {})
     
    });

    app.listen(4090, function(req,res){
        console.log("server start")
        
    });

