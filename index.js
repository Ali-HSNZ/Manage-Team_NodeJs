const DB_URL = 'mongodb://localhost:27017/projectMongoDB'
const Application = require("./App/server")
const PORT = 5000
new Application(PORT , DB_URL)