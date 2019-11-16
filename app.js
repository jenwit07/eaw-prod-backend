import express from 'express'
import { json, urlencoded } from 'body-parser'
import passport from 'passport'
import cors from 'cors'
import _passport from './config/passport'
import routes from './config/routes'

/*TODO : change express-session to EAW_USER*/
import session from 'express-session'

/* CONFIG */
const bodyParser = require('body-parser')
const port = process.env.PORT || 3333

var app = express();

app.use(json({ limit: '50mb', extended: true }))
app.use(urlencoded({ limit: '50mb', extended: true }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header("Access-Control-Expose-Headers", "ETag")
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

_passport(passport)

/*EXPRESS SESSION CONFIG*/
app.use(session({
  secret: 'EAW_APP',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 5 * 60 * 1000 }
}))

app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions


routes(app, passport)

/*SignIn Router*/
// app.use(SignIn);

/* Authenticate Needed Router */
// app.use(aRouter)

app.listen(port, () => {
    console.log(`EAW BACK-END is running with port ${port}`)
})