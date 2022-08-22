const bcrypt = require('bcrypt')
module.exports = function hashString(data){
    return bcrypt.hashSync(data,13)
}