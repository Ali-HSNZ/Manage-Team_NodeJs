const fileSystem = require('fs')
const path = require('path')

function pathUpload(){
    const date = new Date();
    const Year = ""+date.getFullYear()
    const Month = ""+date.getMonth()
    const Day = ""+date.getDay()
    
    const image_path = path.join(__dirname,'..' , '..','Public','upload',Year,Month,Day)
    fileSystem.mkdirSync(image_path , {recursive : true})

    return path.join('Public','upload',Year,Month,Day)
    // return filePath

}
module.exports = pathUpload