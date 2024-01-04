import Meal from "../meals/meal.model.js";
import Restaurant from "../restaurants/restaurant.model.js";
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
    static async findAll() {
        return await User.findAll({
          where: {
            status: "true",
          },
          include: [
            {
              model: Restaurant,
            },
            {
              model: Meal
            }
          ],
        });
      }

    static async update(user, data) {
        return await user.update(data);
      }
    
    static async delete(user) {
        return await user.update({ status: false });
      }
}

