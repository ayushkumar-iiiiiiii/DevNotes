const path = require("path");

module.exports = {
    mode: "development",

    entry: "./scr/index.js",

    output: {
        path: path.join(__dirname, "Static"),
        filename: "bundle.js"
    },
}