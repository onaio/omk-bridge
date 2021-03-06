module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    entry: "./src/app.jsx",
    output: {
        path: __dirname,
        filename: "js/bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader?harmony" },
            { test: /\.json$/, loader: "json-loader" }
        ],
        resolve: ['', '.js', '.jsx']
    }
};
