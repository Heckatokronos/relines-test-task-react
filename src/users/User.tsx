import { memo } from "react";
import { IUser } from "./Users";

interface IUserProps {
  user: IUser;
}

export const User = memo(({ user }: IUserProps) => (
  <>
    {user.name} ({user.rating})
  </>
));
