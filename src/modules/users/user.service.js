import User from "./user.model.js";


export class UserService {

    static async create(data){
        return await User.create(data)
    }

    static async findOneEmail(email){
        return await User.findOne({
            where: {
                email: email,
                status: true
            }
        })
    }

    static async update(user, data) {
        return await user.update(data);
      }
    
    static async delete(user) {
        return await user.update({ status: false });
      }
}

