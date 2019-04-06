const express = require('express')
const path = require('path')
const lusca = require('lusca')
const fileSystem = require('fs')
const dotenv = require('dotenv')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const compression = require('compression')
const expressValidator = require('express-validator')

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

// Create Express server
const app = express();

// Express configuration
app.set("port", (process.env.PORT || 15100));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
// app.set("trust proxy", 1); // TODO: This is for use with the session. Probably not necessary. trust first proxy
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(helmet());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
// TODO: Session store? Default is an in-memory store, but this is probably not adequate.
// app.use(session(<session.SessionOptions>{
// 	secret: "2DC3DF6C-5C81-4546-AC2E-2F733F9B62D6",
// 	cookie: <express.CookieOptions>{
// 		httpOnly: true,
// 		secure: true,
// 		sameSite: "strict"
// 	}
// }));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "../public/login.html"));
});

app.use(express.static(path.join(__dirname, "../public")));

fileSystem.readdirSync(__dirname + "/routes").forEach(function (routeConfig) {
	if (routeConfig.substr(-3) === ".js") {
		const route = require(__dirname + "/routes/" + routeConfig);
		route.routes(app);
	}
});

app.listen(app.get("port"), () => {
	console.log("Listening on port " + app.get("port"));
});
