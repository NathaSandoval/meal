import z from "zod";
import { extractValidationData } from "../../common/utils/extractErrorData.js";

const mealSchema = z.object({
  name: z.string(),
  price: z.number(),
  
});

export function validateCreateMeal(data) {
  const result = mealSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: mealData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    mealData,
  };
}