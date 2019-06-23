import { createSchema, ExtractDoc, Type, typedModel } from "ts-mongoose";

export const UserSchema = createSchema({
  email: Type.number(),
  password: Type.optionalString(),
});
export const User = typedModel("User", UserSchema);
export type UserDoc = ExtractDoc<typeof UserSchema>;
