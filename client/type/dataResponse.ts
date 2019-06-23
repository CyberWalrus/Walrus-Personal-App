import { UserProps } from "@server/models/user-schema";
export interface IdResponse {
  _id?: string;
}
export type UserResponse = UserProps & IdResponse;
