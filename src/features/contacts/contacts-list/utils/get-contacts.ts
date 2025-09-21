import { delay } from "@/lib/delay";
import { faker } from "@faker-js/faker";
import range from "lodash/range";
import { z } from "zod";

const GetContactsInputSchema = z.object({});

export type GetContactsInputSchemaType = z.infer<typeof GetContactsInputSchema>;

const ContactSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  avatar: z.string(),
});

export type Contact = z.infer<typeof ContactSchema>;

const GetContactsOutputSchema = ContactSchema.array();
export type GetContactsOutputSchemaType = z.infer<
  typeof GetContactsOutputSchema
>;

export async function getContacts(data: GetContactsInputSchemaType) {
  const _data = GetContactsInputSchema.parse(data);
  console.log("send to api later", _data);

  await delay(2);
  const res = range(0, 5).map(() => ({
    id: faker.string.nanoid(),
    fullName: faker.person.fullName(),
    avatar: faker.image.avatar(),
  }));
  return GetContactsOutputSchema.parse(res);
}
