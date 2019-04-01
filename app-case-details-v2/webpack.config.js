const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, "./dist/"),
        filename: "case-details-v2.js",
        library: ["case-details-v2"],
        libraryTarget: "umd",
        publicPath: "/dist/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
        ],
    },
};
