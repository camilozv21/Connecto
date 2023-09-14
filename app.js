const express = require('express');
const path = require('path');
let session = require('express-session');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 4001;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/user'),
    path.join(__dirname, './views/feed')
]);

// Routes 
const mainRouter = require('./routes/mainRoutes.js');

// Use routes // 
app.use('/', mainRouter);

app.use((req, res, next) => {
    res.status(404).render("./not-found")
});

app.listen(PORT, () => {console.log(`Servidor escuchando puerto http://localhost:${PORT} 🚀`)});