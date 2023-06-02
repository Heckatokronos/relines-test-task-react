import { Button, Item } from "../app/common";
import { User } from "./User";

import './User.scss'


export interface IUser {
  id: number;
  name: string;
  rating: number;
}

interface IUsersProps {
  users: IUser[];
  onRateUser: (id: number, rating: number) => void;
}

export const UserList: React.FC<IUsersProps> = ({ users, onRateUser }) => (
  <ul className="ul">
    {users.map((user) => (
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
