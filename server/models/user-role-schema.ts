import { createSchema, ExtractProps, Type, typedModel } from "ts-mongoose";

export const UserRoleSchema = createSchema({
  name: Type.optionalString({ default: `` as string }),
  isActive: Type.optionalBoolean({ default: true as boolean }),
});
export const UserRole = typedModel("UserRole", UserRoleSchema);
export type UserRoleProps = ExtractProps<typeof UserRoleSchema>;
