const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

app.listen(3000, () => {
    console.log('running')
})