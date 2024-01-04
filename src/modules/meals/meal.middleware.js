import { MealService } from "./meal.service.js";
import { catchAsync } from '../../common/errors/catchAsync.js'
import { AppError } from '../../common/errors/appError.js'

export const validExistMeal = catchAsync(async(req,res,next) => {

    const { id } = req.params;

    const meal = await MealService.findOneMeal(id);

    if(!meal) {
        return next(new AppError('Meal not found',404))
    }

    req.meal = meal;
    next()
})