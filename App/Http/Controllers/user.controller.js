const { UserModel } = require("../../Models/user");
const pathUpload = require("../../Modules/filePath");

class UserController{
    async getProfile(req,res,next){
        try {
            const user = await UserModel.findById(req.user._id)
            return res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
    async getUserlist(req,res,next){
        try {
            const users = await UserModel.find({} , {password : 0 , createdAt : 0 , updatedAt : 0 , __v : 0 , token : 0})
            return res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }

    async editProfile(req,res,next){
        try {
            let body = req.body;
            const userID = req.user._id
            let filds = ["first_name" , "last_name" , "skills"]
            let badValues = ["" , " ",null , undefined , [] , [""] , [" "] , {} , 0 , -1 , NaN]
            Object.entries(body).forEach(([key , value]) => {
                if(!filds.includes(key)) delete body[key];
                if(badValues.includes(value)) delete body[key]
            })
            const resualt = await UserModel.updateOne({_id : userID} , {$set : body})
            if(resualt.modifiedCount > 0){
                return res.status(200).json({
                    status : 200,
                    success : true,
                    updated : body,
                    message : "به‌روزرسانی پروفایل با موفقیت انجام شد"
                })
            }
            throw {
                status : 401,
                success : false,
                message : "به‌روزرسانی پروفایل انجام نشد"
            }
        } catch (error) {
            next(error)
        }
    }

    addSkills(){

    }
    async uploadImage_multer(req,res,next){
        try {
           
            const imagePath = req.protocol+ "://" + req.get('host') +'/'+ req.file.path.substring(7).replace(/[\\\\]/gm , "/")

            const resualt = await UserModel.updateOne({_id : req.user._id} , {$set : {image : imagePath}})
            if(resualt.modifiedCount <= 0) throw {message : "به روز رسانی انجام نشد" , status : 400 , success : false}
            return res.status(200).json({
                status : 200,
                message : "به روز رسانی تصویر با  موفقیت انجام شد", 
                success : true
            })

        } catch (error) {
            next(error)
        }
    }
    editSkills(){

    }
    acceptInviteTeam(){
    
    }
    rejectInviteInTeam(){
    
    }
}
module.exports = {
    UserController : new UserController()
}