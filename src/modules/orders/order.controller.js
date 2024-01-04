import { catchAsync } from '../../common/errors/catchAsync.js'
import { OrderService } from './order.service.js'
import { validateCreateOrder } from './order.schema.js'


export const createOrder = catchAsync(async(req,res,next) => {
    const {
        hasError,
        errorMessages,
        orderData,
      } = validateCreateOrder(req.body)
    

      if (hasError) {
        return res.status(422).json({
          status: 'error',
          message: errorMessages,
        });
      }

    const order = await OrderService.createOrder(orderData)

    return res.status(201).json(order) 

})
export const findAllOrder = catchAsync(async(req,res,next) => {
    const order = await OrderService.findAllOrder();

    return res.status(200).json(order)
})
export const updateOrder = catchAsync(async(req,res,next) => {
    const { order } = req;    

    return res.status(200).json(order);
})
export const deleteOrder = catchAsync(async(req,res,next) => {
    const { order } = req;

    await OrderService.delete(order);
  
    return res.status(204).json(null);
})