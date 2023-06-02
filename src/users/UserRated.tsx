import { Button, Item } from "../app/common";
import { User } from "./User";
import { IUser } from "./UserList";

import "./User.scss";

interface IRatedUsersProps {
  ratedUsers: IUser[];
  onRateUser: (id: number, rating: number) => void;
}

export const RatedUsers: React.FC<IRatedUsersProps> = ({
  ratedUsers,
  onRateUser,
}) => (
  <ul className="ul">
    {ratedUsers.map((user) => (
      <Item>
        <li key={user.id}>
          <User user={user} />
          <Button color="green" onClick={() => onRateUser(user.id, 1)}>
            +
          </Button>
          <Button color="red" onClick={() => onRateUser(user.id, -1)}>
            -
          </Button>
        </li>
      </Item>
    ))}
  </ul>
);
