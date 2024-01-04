import  Restaurant  from './restaurant.model.js'
import  User  from '../users/user.model.js'

export class RestaurantService {

    static async createRestaurant(data) {
        return Restaurant.create(data)
    }

    static async findOneRestaurant(id) {
        return await Restaurant.findOne({
            where: {
                id:id,
                status:true

            }
        })
    }
    static async findAllRestaurant() {
        return await Restaurant.findAll({
            where: {
                status: "true"
            },
            include: [
                {
                  model: User,
                },
              ],
            
        })
    } 

    static async updateRestaurant(Restaurant) {
        return await Restaurant.update({ status: "completed" });
    } 

    static async deleteRestaurant(Restaurant) {
        return await Restaurant.update({ status: "cancelled" });
    } 

    static async createReview(data) {
        return Review.create(data)
    }

    static async findOneReview(id) {
        return await Review.findOne({
            where: {
                id: id,
                status: true
            },
            include: [
            {
                model: User
            }
            ]
        })
    }

    static async updateReview(Review) {
        return await Review.update({ status: "completed" });
      }
    
      static async deleteReview(Review) {
        return await Review.update({ status: "cancelled" });
      }
}

