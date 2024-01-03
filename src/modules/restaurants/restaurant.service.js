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
}

