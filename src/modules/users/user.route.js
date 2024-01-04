import express  from "express";
import { createUser, login, updateProfile, deleteUser, findUserOrders, findOneOrder} from "./user.controller.js";
import { protect, protectAccountOwner, restrictTo,validateExistUser } from "./user.middleware.js";

export const router = express.Router()

router.post('/signup', createUser);

router.post('/login', login)

router.use(protect)

router.patch('/:id', validateExistUser, protectAccountOwner, updateProfile)

router.delete('/:id', validateExistUser, protectAccountOwner, deleteUser)

router.get('/orders', findUserOrders)

router.get('/orders/:id', restrictTo, validateExistUser, findOneOrder)