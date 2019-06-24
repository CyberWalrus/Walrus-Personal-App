import { UserRoleProps } from "@server/models/user-role-schema";
import { UserProps } from "@server/models/user-schema";
import { UserSessionProps } from "@server/models/user-session-schema";
export interface IdResponse {
  _id?: string;
}
export type UserResponse = UserProps & IdResponse;
export type UserRoleResponse = UserRoleProps & IdResponse;
export type UserSessionResponse = UserSessionProps & IdResponse;

export interface ReturnResponse {
  success?: boolean;
  message?: string;
  token?: string;
}
