// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var routes = require('./routes');
// var moment = require('moment');


// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;


import Vue from 'vue'
import Vuex from 'Vuex'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

new Vue({
  router,
  store,
  template: `
    <div id="app">
      <v-app>
        <main>
        <v-container>
          <div class="text-xs-center">
            <router-view class="view"></router-view>
          </div>
        </v-container>
        <main>
      </v-app>
    </div>
  `
}).$mount('#app')