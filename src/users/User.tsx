import React from "react";
import { IUser } from "./UserList";

interface IUserProps {
  user: IUser;
}

export const User = ({ user }: IUserProps) => (
  <>
    {user.name} ({user.rating})
  </>
);