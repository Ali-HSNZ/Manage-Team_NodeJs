

module.exports = class Application { 
    #express =  require('express');
    #app = this.#express()

    constructor(PORT, DB_URL){
        this.configDatabase(DB_URL)
        this.createServer(PORT)
        this.configApplication()
        this.createRoutes()
        this.errorHandler()
    }
    configApplication(){
        const path = require('path')
        this.#app.use(this.#express.json());
        this.#app.use(this.#express.urlencoded({extended : true}));
        this.#app.use(this.#express.static(path.join(__dirname , '..' , "Public")));
    }
    createServer(PORT){
        const http = require('http');
        const server = http.createServer(this.#app)
        server.listen(PORT , () => {
            return console.log(`Server Started On http://localhost:${PORT}`)
        })
    }
    configDatabase(DB_URL){
     mongoose = require('mongoose')

        mongoose.connect(DB_URL , error =>{
            if(error) throw {error}
            return console.log("Connected To DataBase") 
        } )
    }
    errorHandler(){
        this.#app.use((req,res,next) => {
            return res.status(404).json({
                message : "Not Found Routes",
                success : false,
                status : 404
            })
        })
        this.#app.use((error , req,res,next) => {
            const status = error?.status || 500;
            const message = error.message || "InternalServerError";
            return res.status(status).json({
                status,
                message,
                success : false
            })
        })
    }
    createRoutes(){
        this.#app.get('/' , (req,res,next) => {
            return res.status(200).json({
                message : "App Started"
            })
        })
    }
}
