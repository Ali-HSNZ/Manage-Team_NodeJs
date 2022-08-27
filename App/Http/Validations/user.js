const { body } = require("express-validator");
const path = require('path');
 function imageValidator(){
    return [
        body('image').custom((user , {req}) =>{
            if(!req.file) throw "لطفا یک تصویر را انتخاب کنید"
            const ext = path.extname(req.file.originalname)
            const exts = [".jpg" , '.png' , '.jpeg','.gif','.webp'];
            if(!exts.includes(ext)) throw "فرمت ارسال شده صحیح نمی باشد";
            const maxSize =2097152;
            if(req.file.size > maxSize) throw "حجم عکس نمی تواند بیشتر از 2 مگابایت باشد"
            return true
        })
    ]
}
module.exports = imageValidator