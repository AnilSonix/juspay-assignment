import { delay } from "@/lib/delay";
import { faker } from "@faker-js/faker";
import { random } from "lodash";
import range from "lodash/range";
import { z } from "zod";

const GetOrdersInputSchema = z.object({
  query: z.string(),
  fields: z
    .string()
    .array()
    .transform((s) => s.filter(Boolean).map((s) => s.trim())),
});

export type GetOrdersInputSchemaType = z.infer<typeof GetOrdersInputSchema>;

const orderStatus = [
  "pending",
  "in-progress",
  "approved",
  "rejected",
  "complete",
] as const;

const OrderSchema = z.object({
  id: z.string(),
  customer: z.object({
    avatar: z.string(),
    fullName: z.string(),
  }),
  projectName: z.string(),
  deliveryAddress: z.string(),
  createdAt: z.string(),
  status: z.enum(orderStatus),
});

export type Order = z.infer<typeof OrderSchema>;

const GetOrdersOutputSchema = OrderSchema.array();
export type GetOrdersOutputSchemaType = z.infer<typeof GetOrdersOutputSchema>;

export async function getOrders(data: GetOrdersInputSchemaType) {
  const _data = GetOrdersInputSchema.parse(data);
  console.log("send to api later", _data);

  await delay(1);
  const res = range(0, 5).map(() => ({
    id: faker.string.alpha(5),
    title: faker.lorem.sentence(4),

    customer: {
      avatar: faker.image.avatar(),
      fullName: faker.person.fullName(),
    },
    projectName: faker.company.buzzNoun(),
    deliveryAddress: faker.location.streetAddress(),
    createdAt: faker.date.recent().toUTCString(),
    status: orderStatus[random(0, 4)],
  }));

  console.log(res);

  return GetOrdersOutputSchema.parse(res);
}
