import { validateCreateRestaurant } from "./restaurant.schema.js"
import { RestaurantService } from "./restaurant.service.js";
//import { createReview } from './restaurant.service.js'
import { catchAsync } from "../../common/errors/catchAsync.js";

export const createRestaurant = catchAsync(async(req,res,next) => {
    const {
        hasError,
        errorMessages,
        restaurantData,
      } = validateCreateRestaurant(req.body)
    

      if (hasError) {
        return res.status(422).json({
          status: 'error',
          message: errorMessages,
        });
      }

    const restaurant = await RestaurantService.createRestaurant(restaurantData)

    return res.status(201).json(restaurant)

})
export const findAllRestaurant = catchAsync(async(req,res,next) => {

})
export const findOneRestaurant = catchAsync(async(req,res,next) => {

})
export const updateRestaurant = catchAsync(async(req,res,next) => {

})
export const deleteRestaurant = catchAsync(async(req,res,next) => {

})
export const createReview = catchAsync(async(req,res,next) => {
  const { id } = req.params;
  const { comment, rating } = req.body;
  const { sessionUser } = req;

  const review = await RestaurantService.createReview({
    userId: sessionUser.id,
    Comment,
    restaurant: id,
    rating
  })

  return res.status(201).json(review)

})


export const updateReview = catchAsync(async(req,res,next) => {

})
export const deleteReview = catchAsync(async(req,res,next) => {
  
})