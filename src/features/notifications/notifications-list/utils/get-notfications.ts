import { delay } from "@/lib/delay";
import { faker } from "@faker-js/faker";
import { random } from "lodash";
import range from "lodash/range";
import { z } from "zod";

const GetNotificationsInputSchema = z.object({});

export type GetNotificationsInputSchemaType = z.infer<
  typeof GetNotificationsInputSchema
>;

const notifications = ["bug", "user", "subscription"] as const;

const NotificationSchema = z.object({
  id: z.string(),
  type: z.enum(notifications),
  title: z.string(),
  createdAt: z.string(),
});

export type Notification = z.infer<typeof NotificationSchema>;

const GetNotificationsOutputSchema = NotificationSchema.array();
export type GetNotificationsOutputSchemaType = z.infer<
  typeof GetNotificationsOutputSchema
>;

export async function getNotifications(data: GetNotificationsInputSchemaType) {
  const _data = GetNotificationsInputSchema.parse(data);
  console.log("send to api later", _data);

  await delay(2);
  const res = range(0, 5).map(() => ({
    id: faker.string.nanoid(),
    type: notifications[random(0, 2)],
    title: faker.lorem.sentence(4),
    createdAt: faker.date.recent().toUTCString(),
  }));
  return GetNotificationsOutputSchema.parse(res);
}
