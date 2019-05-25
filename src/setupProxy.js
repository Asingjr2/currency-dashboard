const proxy = require('http-proxy-middleware');

/** Below needed to compensate for how browser router handles url matching. */
module.exports = function(app) {
  app.use(proxy('/auth', {
    target: 'http://localhost:5000'
  }));
}
