import express  from "express";
import {
    router as userRouter
} from './../modules/users/user.route.js'
import {
    router as mealRouter
} from './../modules/meals/meal.route.js'
import {
    router as restaurantsRouter
} from './../modules/restaurants/restaurant.route.js'
import {
    router as ordersRouter
} from './../modules/orders/order.route.js'


export const router = express.Router();

router.use('/users', userRouter)
router.use('/meals', mealRouter)
router.use('/restaurants', restaurantsRouter)
router.use('/orders', ordersRouter)
