// Importing Packages
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Importing Routes
var indexRouter = require('./routes/index');
const adminRouter = require("./routes/admin");
const secretaryRouter = require("./routes/secretary");
// var usersRouter = require('./routes/users');

const app = express();
const MONGODB_URI = 'mongodb+srv://smi:smi@cluster0-xx8yn.mongodb.net/test?retryWrites=true';
const sessionStore = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "Projet de fin d'etude",
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));

// Routes setup
app.use('/', indexRouter);
app.use("/admin", adminRouter);
app.use("/secretary", secretaryRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
