const fs = require('fs')

module.exports = {
devServer: {
    https: {
        key: fs.readFileSync('/Users/radenlmantuano/localhost-key.pem'),
        cert: fs.readFileSync('/Users/radenlmantuano/localhost.pem'),
    },
    public: 'https://localhost:8080/'
}
}