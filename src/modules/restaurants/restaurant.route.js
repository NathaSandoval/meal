import express  from "express";
import { protect,protectAccountOwner } from '../users/user.middleware.js'
import { createRestaurant,findAllRestaurant,findOneRestaurant,updateRestaurant,deleteRestaurant,createReview,deleteReview,updateReview } from "./restaurant.controller.js";
import { validExistRestaurant, validExistReview } from "./restaurant.middleware.js";

export const router = express.Router()

router.use(protect)

router.route('/')
.post(createRestaurant)
.get(findAllRestaurant)

router.route('/:id')
.get(findOneRestaurant)
.patch(updateRestaurant)
.delete(deleteRestaurant)

router.post('/reviews/:id', validExistRestaurant, createReview)

router.route('/reviews/:restaurantId/:id')
    .patch(updateReview)
    .delete(validExistRestaurant, validExistReview, protectAccountOwner, deleteReview)