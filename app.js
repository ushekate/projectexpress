import  express  from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import ejs from "ejs";


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Put your Mail ID ',
      pass: 'Password'
    }
  });

  

app.get('/',function(req,res){
    res.render('C:\\Users\\Admin\\Documents\\Unnati\\index.ejs',{
      'users':['Unnati','Salmon','Joy'],
      'designation':['web developer','Master','Software developer']
    });
    
})

app.get('/login',function(req,res){
  res.render('C:\\Users\\Admin\\Documents\\Unnati\\login.ejs');
})

app.post('/login',function(req,res){
  console.log(req.body);
  res.render('C:\\Users\\Admin\\Documents\\Unnati\\end.ejs',{
    'name':req.body.name
  });
  var mailOptions = {
    from: 'shekateunnati@gmail.com',
    to: req.body.email,
    subject: 'Sending Email using Node.js',
    // text: 'That was easy!'
    html:"<h1> Hello </h1>"

  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
})



app.listen(3000,function(req,res){
    console.log("server started at 3000");
});