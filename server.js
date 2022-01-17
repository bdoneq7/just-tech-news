const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // serve images, style sheets, and javascript files
app.engine('handlebars', hbs.engine); // using handlebars engine to generate html
app.set('view engine', 'handlebars'); 

// turn on routes
app.use(routes);

// turn on connection to database and server
sequelize.sync({ force: false }).then(() => { 
  app.listen(PORT, () => console.log('Now listening'));
});