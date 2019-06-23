import * as bcrypt from "bcrypt";
import { createSchema, ExtractProps, Type, typedModel } from "ts-mongoose";
import { UserRoleSchema } from "./user-role-schema";

export const UserSchema = createSchema({
  nickName: Type.string({ default: `` as string }),
  login: Type.string({ default: `` as string }),
  firstName: Type.string({ default: `` as string }),
  lastName: Type.string({ default: `` as string }),
  email: Type.string({ default: `` as string }),
  password: Type.string({ default: `` as string }),
  userRole: Type.array().of(
    Type.ref(Type.objectId()).to("UserRole", UserRoleSchema),
  ),
  isActive: Type.boolean({ default: true as boolean }),
  signUpDate: Type.date({ default: Date.now as any }),
  created: Type.date({ default: Date.now as any }),
});

export const User = typedModel("User", UserSchema);
export type UserProps = ExtractProps<typeof UserSchema>;
