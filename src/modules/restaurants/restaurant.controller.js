import { validateCreateRestaurant } from "./restaurant.schema.js"
import { RestaurantService } from "./restaurant.service.js";
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
  
  const restaurant = await RestaurantService.findAllRestaurant();

  return res.status(200).json(restaurant)

})
export const findOneRestaurant = catchAsync(async(req,res,next) => {
  const { restaurant } = req;

  return res.status(200).json(restaurant)

})
export const updateRestaurant = catchAsync(async(req,res,next) => {
  const { restaurant } = req;    

  return res.status(200).json(restaurant);

})
export const deleteRestaurant = catchAsync(async(req,res,next) => {
  const { restaurant } = req;

  await RestaurantService.delete(restaurant);

  return res.status(204).json(null);

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
  const { review } = req;    

  return res.status(200).json(review);


})
export const deleteReview = catchAsync(async(req,res,next) => {
  const { review } = req;

  await RestaurantService.delete(review);

  return res.status(204).json(null);

  
})