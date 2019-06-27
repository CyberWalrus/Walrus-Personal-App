import {
  createSchema,
  ExtractDoc,
  ExtractProps,
  Type,
  typedModel,
} from "ts-mongoose";

export const UserRoleSchema = createSchema({
  name: Type.optionalString({default: `` as string, unique: true}),
  isActive: Type.optionalBoolean({default: true as boolean}),
});
export const UserRole = typedModel("UserRole", UserRoleSchema);
export type UserRoleProps = ExtractProps<typeof UserRoleSchema>;
export type UserRoleDoc = ExtractDoc<typeof UserRoleSchema>;
