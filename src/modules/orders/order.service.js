import Meal from '../meals/meal.model.js';
import Restaurant from '../restaurants/restaurant.model.js';
import Order from './order.model.js';

export class OrderService {
  static async findAll() {
    return await Order.findAll({
      where: {
        status: true,
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

  static async createOrder(data) {
    return await Order.create(data);
  }

  static async updateOrder(Order) {
    return await Order.update({ status: "completed" });
  }

  static async deleteOrder(Order) {
    return await Order.update({ status: "cancelled" });
  }
}
