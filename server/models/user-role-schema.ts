import { createSchema, ExtractDoc, Type, typedModel } from "ts-mongoose";

export const UserRoleSchema = createSchema({
  name: Type.string({ default: `` as string }),
  isActive: Type.boolean({ default: true as boolean }),
});
export const UserRole = typedModel("UserRole", UserRoleSchema);
export type UserRoleDoc = ExtractDoc<typeof UserRoleSchema>;
