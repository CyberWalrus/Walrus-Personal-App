import { createSchema, ExtractProps, Type, typedModel } from "ts-mongoose";
import { UserRoleSchema } from "./user-role-schema";
import { UserSchema } from "./user-schema";

export const UserSessionSchema = createSchema({
  userId: Type.ref(Type.objectId()).to("User", UserSchema),
  userLogin: Type.optionalString({ default: `` as string }),
  userRole: Type.optionalArray().of(
    Type.ref(Type.objectId()).to("UserRole", UserRoleSchema),
  ),
  timestamp: Type.optionalNumber({ default: new Date(Date.now()).getTime() as number }),
  isActive: Type.optionalBoolean({ default: true as boolean }),
});
export const UserSession = typedModel("UserSession", UserSessionSchema);
export type UserSessionProps = ExtractProps<typeof UserSessionSchema>;
