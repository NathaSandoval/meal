import z from "zod";
import { extractValidationData } from "../../common/utils/extractErrorData.js";

const orderSchema = z.object({
  mealId: z.number(),
  quantity: z.number()
});

export function validateCreateOrder(data) {
  const result = orderSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: orderData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    orderData,
  };
}