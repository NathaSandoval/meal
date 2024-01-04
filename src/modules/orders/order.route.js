import express  from "express";
import { protect,protectAccountOwner } from '../users/user.middleware.js'
import { validExistOrder } from './order.middleware.js'
import { findAllOrder,createOrder, updateOrder,deleteOrder } from './order.controller.js'

export const router = express.Router()

router.use(protect)

router.route('/').post(createOrder)

router.route('/me').get(findAllOrder)

router.route('/:id')
.patch(validExistOrder, protectAccountOwner, updateOrder)
.delete(validExistOrder, protectAccountOwner, deleteOrder)