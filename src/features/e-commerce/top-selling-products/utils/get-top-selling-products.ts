import { delay } from "@/lib/delay";
import { faker } from "@faker-js/faker";
import range from "lodash/range";
import { z } from "zod";

const GetTopSellingProductsInputSchema = z.object({});

export type GetTopSellingProductsInputSchemaType = z.infer<
  typeof GetTopSellingProductsInputSchema
>;

const TopSellingProductSchema = z.object({
  id: z.string(),
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
  amount: z.number(),
});

export type TopSellingProduct = z.infer<typeof TopSellingProductSchema>;

const GetTopSellingProductsOutputSchema = TopSellingProductSchema.array();
export type GetTopSellingProductsOutputSchemaType = z.infer<
  typeof GetTopSellingProductsOutputSchema
>;

export async function getTopSellingProducts(
  data: GetTopSellingProductsInputSchemaType
) {
  const _data = GetTopSellingProductsInputSchema.parse(data);
  console.log("send to api later", _data);

  await delay(2);
  const res = range(0, 5).map(() => ({
    id: faker.string.nanoid(),
    productName: faker.commerce.product(),
    price: faker.number.int(300),
    amount: faker.number.int(600),
    quantity: faker.number.int(10),
  }));
  return GetTopSellingProductsOutputSchema.parse(res);
}
