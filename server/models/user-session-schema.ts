import { createSchema, ExtractDoc, Type, typedModel } from "ts-mongoose";
import { UserRoleSchema } from "./user-role-schema";
import { UserSchema } from "./user-schema";

export const UserSessionSchema = createSchema({
  userId: Type.ref(Type.objectId()).to("User", UserSchema),
  userLogin: Type.string({ default: `` as string }),
  userRole: Type.array().of(
    Type.ref(Type.objectId()).to("UserRole", UserRoleSchema),
  ),
  timestamp: Type.date({ default: Date.now as any }),
  isActive: Type.boolean({ default: true as boolean }),
});
export const UserSession = typedModel("UserSession", UserRoleSchema);
export type UserSessionDoc = ExtractDoc<typeof UserSessionSchema>;
