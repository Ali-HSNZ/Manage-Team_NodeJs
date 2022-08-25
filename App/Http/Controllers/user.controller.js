const { UserModel } = require("../../Models/user");

class UserController{
    getProfile(){

    
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