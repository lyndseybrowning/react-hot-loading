const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/case-details/1", {
            target: "http://localhost:5000/",
            pathRewrite: {
                "/case-details/1": "/case-details-v1.js",
            },
        }),
        proxy("/case-details/2", {
            target: "http://localhost:5001/",
            pathRewrite: {
                "/case-details/2": "/case-details-v2.js",
            },
        }),
    );
};
