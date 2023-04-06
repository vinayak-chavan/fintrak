require('./src/db/connection');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const { cronFunction } = require('./src/utils/cron');

const userRoutes = require('./src/routes/user');
const expenseRoutes = require('./src/routes/expense');

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/src/public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(cookieParser());
app.use('/', userRoutes);
app.use('/', expenseRoutes);

// for everyday
cron.schedule("0 5 * * *", function() {
    cronFunction();
});

// for per minutes for demo
// cron.schedule("*/1 * * * *", function() {
//     cronFunction();
// });

app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
});