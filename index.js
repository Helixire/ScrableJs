import playerManager from "./class/PlayerManager";

// babel setup
require("babel-core/register");
require("babel-polyfill");
module.exports = {
  entry: ['babel-polyfill', './test.js'],

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
    }]
  }
};

// set up express class
var app = require('express')();
var session = require('express-session');

app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'Scrable',
  resave: false,
  saveUninitialized: true
}));
//Session check login
/*function checkAuth (req, res, next) {
	console.log('checkAuth ' + req.url);
	// don't serve /secure to those not logged in
	// you should add to this list, for each and every secure url
	if (req.url === '/' && (!req.session || !req.session.authenticated)) {
		res.render('unauthorised', { status: 403 });
		return;
	}

	next();
}
class.use(checkAuth);*/
//bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.path !== '/' && (!req.session.id || (req.player = playerManager.getPlayer(req.session.id)) === undefined)) {
    res.redirect('/');
  }
  next();
});

// initialize routes
app.use("/", require("./routes/root.route"));

// listen for requests
app.listen(process.env.port || 4000, () => {
  console.log("now listening for requests on port 4000");
});
