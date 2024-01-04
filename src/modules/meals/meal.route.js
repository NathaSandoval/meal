import express  from "express";
import { protect,protectAccountOwner } from '../users/user.middleware.js'
import { validExistMeal } from './meal.middleware.js'
import { findAllMeal,createMeal,findOneMeal, updateMeal,deleteMeal } from './meal.controller.js'


export const router = express.Router()

router.use(protect)


router.route('/').get(findAllMeal)

router.route('/:id')
.post(createMeal)
.get(validExistMeal, findOneMeal)
.patch(validExistMeal, protectAccountOwner, updateMeal)
.delete(validExistMeal, protectAccountOwner, deleteMeal)
