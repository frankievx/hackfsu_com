// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// /* GET registration page. */
// router.get('/registration', function(req, res, next) {
//   res.render('registration', { title: 'registration page' });
// });

import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";


export default [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login }
];



// module.exports = router;
