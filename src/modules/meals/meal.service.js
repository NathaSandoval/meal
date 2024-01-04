import  Meal  from './meal.model.js'
import  Restaurant  from '../restaurants/restaurant.model.js'

export class MealService {

    static async createMeal(data) {
        return Meal.create(data)
    }

    static async findOneMeal(id) {
        return await Meal.findOne({
            where: {
                id:id,
                status:"active"

            },
            include: [
                {
                  model: Restaurant,
                },
              ],
        })
    }
    static async findAllMeal() {
        return await Meal.findAll({
            where: {
                status: "active"
            },
            include: [
                {
                  model: Restaurant,
                },
              ],
            
        })
    } 

    static async updateMeal(Meal) {
        return await Meal.update({ status: "completed" });
    } 

    static async deleteMeal(Meal) {
        return await Meal.update({ status: "cancelled" });
    } 

}