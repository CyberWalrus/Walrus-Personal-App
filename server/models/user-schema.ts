import * as bcrypt from "bcrypt";
import { createSchema, ExtractDoc, Type, typedModel } from "ts-mongoose";
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
UserSchema.methods.generateHash = (password: string): string => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
UserSchema.methods.validPassword = (password: string): boolean => {
  return bcrypt.compareSync(password, this.password);
};

export const User = typedModel("User", UserSchema);
export type UserDoc = ExtractDoc<typeof UserSchema>;
