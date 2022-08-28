const multer = require('multer')
const pathUpload = require('./filePath')
const path = require('path')

const storage = multer.diskStorage({
    destination : (request , file , callback) => {
        callback(null , pathUpload())
    },
    filename : (request , file , callback) => {
        const type = path.extname(file.originalname)
        callback(null , Date.now() + type )
    },
})
const uploadImage = multer({storage})

module.exports = {
    upload_multer : uploadImage
}