module.exports = {
    mode: 'development',
    entry: "./src/js/index.js",
    output: {
        path: "/js",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};
