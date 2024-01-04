import { catchAsync } from "../../common/errors/catchAsync.js"
import { validateCreateMeal } from './meal.schema.js'
import { MealService } from './meal.service.js'



export const createMeal = catchAsync(async(req,res,next) => {
    const {
        hasError,
        errorMessages,
        mealData,
      } = validateCreateMeal(req.body)
    

      if (hasError) {
        return res.status(422).json({
          status: 'error',
          message: errorMessages,
        });
      }

    const meal = await MealService.createMeal(mealData)

    return res.status(201).json(meal)

})
export const findOneMeal = catchAsync(async(req,res,next) => {
    const { meal } = req;

    return res.status(200).json(meal)
})
export const findAllMeal = catchAsync(async(req,res,next) => {
    const meal = await MealService.findAllMeal();

    return res.status(200).json(meal)
})
export const updateMeal = catchAsync(async(req,res,next) => {
    const { meal } = req;    

    return res.status(200).json(meal);
})
export const deleteMeal = catchAsync(async(req,res,next) => {
  const { meal } = req;

  await MealService.delete(meal);

  return res.status(204).json(null);
})