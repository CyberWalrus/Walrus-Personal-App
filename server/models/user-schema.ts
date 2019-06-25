import * as bcrypt from "bcrypt";
import {
  createSchema,
  Extract,
  ExtractDoc,
  ExtractProps,
  ExtractSchema,
  Type,
  typedModel,
} from "ts-mongoose";
import { UserRoleSchema } from "./user-role-schema";

export const UserSchema = createSchema({
  nickName: Type.optionalString({default: `` as string}),
  login: Type.optionalString({default: `` as string}),
  firstName: Type.optionalString({default: `` as string}),
  lastName: Type.optionalString({default: `` as string}),
  email: Type.optionalString({default: `` as string}),
  password: Type.optionalString({default: `` as string}),
  userRole: Type.optionalArray().of(
    Type.ref(Type.objectId()).to("UserRole", UserRoleSchema),
  ),
  isActive: Type.optionalBoolean({default: true as boolean}),
  signUpDate: Type.optionalNumber({default: new Date(Date.now()).getTime() as number}),
  created: Type.optionalNumber({default: new Date(Date.now()).getTime() as number}),
});

export const User = typedModel("User", UserSchema);
export type UserProps = ExtractProps<typeof UserSchema>;
