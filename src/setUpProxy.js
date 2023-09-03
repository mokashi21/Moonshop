const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000/initiate-checkout", // Change to your server's URL
      changeOrigin: true,
    })
  );
};
