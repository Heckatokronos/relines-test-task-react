import { Button, Item } from "../app/common";
import { User } from "./User";
import { IUser } from "./Users";

import "./User.scss";

interface IUsersProps {
  users: IUser[];
  onRateUser: (id: number, rating: number) => void;
}

export const UserList: React.FC<IUsersProps> = ({ users, onRateUser }) => (
  <ul className="ul">
    {users.map((user) => (
      <li key={user.id}>
        <Item>
          <User user={user} />
          <Button onClick={() => onRateUser(user.id, 1)}>+</Button>
          <Button onClick={() => onRateUser(user.id, -1)}>-</Button>
        </Item>
      </li>
    ))}
  </ul>
);
