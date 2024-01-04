import { OrderService, } from "./order.service.js";
import { catchAsync } from '../../common/errors/catchAsync.js'
import { AppError } from '../../common/errors/appError.js'

export const validExistOrder = catchAsync(async(req,res,next) => {

    const { id } = req.params;

    const order = await OrderService.findOneOrder(id);

    if(!order) {
        return next(new AppError('order not found',404))
    }

    req.order = order;
    next()
})