const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const passport = require("../passport/setup");
const auth = require("./auth");

const app = express();
const PORT = 9000;
const MONGO_URI =  "mongodb+srv://m001-student:m001-mongodb-basics@cluster0-4sbrv.mongodb.net/login";

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));

// Bodyparser middleware, extended false does not allow nested payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
    session({
        secret: "very secret this is",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("./auth", auth);
app.get("/", (req, res) => res.send("Good morning sunshine!"));

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));

routes.initialize(app);