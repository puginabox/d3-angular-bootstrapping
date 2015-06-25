module.exports = function() {
    var config = {

        // all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        index: './src/index.html'
    };

    return config;
};
