const proxy = require('http-proxy-middleware');

module.exports = function proxyF(app) {
  app.use(
    proxy('/api', {
      target: 'https://172.16.38.123:31801',
      ws: true,
      secure: false,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};
