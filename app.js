const express = require('express');
const serve = require('express-static');
const session = require('express-session');
const { redirect } = require('express/lib/response');
const cors = require('cors')


const app = express();
app.use(cors({
  origin: '*'
}));
const path = require('path');
app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.set('view engine', 'ejs')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'spring is here',
  resave: false,
  saveUninitialized: false,
}))

app.get("/", (req, res) => {
  res.render('index')
})

app.post("/", (req, res) => {
	console.log(req.body.name)
	if (req.body.name) {
		req.session.name = req.body.name
		req.session.in_progress = true
		res.redirect("/feed")
	} else {
		session.in_progress = true
		res.redirect("/feed")
	}
})

app.get("/feed", (req, res) => {
	res.render('feed', { session: req.session})
})


const PORT = 3000;

app.listen(PORT, (error) =>{
	if(!error) {
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	}
	else {
		console.log("Error occurred, server can't start", error);
	}
}
);