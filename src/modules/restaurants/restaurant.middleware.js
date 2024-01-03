import { RestaurantService } from "./restaurant.service.js";
import { catchAsync } from '../../common/errors/catchAsync.js'
import { AppError } from '../../common/errors/appError.js'

export const validExistRestaurant = catchAsync(async(req,res,next) => {
    const { id, restaurantId } = req.params;

    let resId = restaurantId || id;

    const restaurant = await RestaurantService.findOneRestaurant(resId)

    if (!restaurant){
        return next(new AppError(`restaurant with id: ${resId} not found`, 404))
    }

    req.restaurant = restaurant;
    next();
})

export const validExistReview = catchAsync(async(req,res,next) => {

    const { id } = req.params;

    const review = await RestaurantService.findOneReview(id);

    if(!review) {
        return next(new AppError('Review not found',404))
    }

    req.review = review;
    req.user = review.user
    next()
})

