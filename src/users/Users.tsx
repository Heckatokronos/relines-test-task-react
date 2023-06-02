import { useState } from "react";
import { IUser, UserList } from "./UserList";
import { Button, Card } from "../app/common";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [ratedUsers, setRatedUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user?size=3"
    );
    const data = await response.json();
    const users = data.map((user: any) => ({
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      rating: 0,
    }));
    setUsers(users);
  };

  const rateUser = (id: number, rating: number) => {
    const userToRate = users.find((user) => user.id === id);
    if (userToRate) {
      userToRate.rating += rating;
      if (userToRate.rating >= 5) {
        alert(`Нужно вознаградить ${userToRate.name}. Сделать это?`);
      } else if (userToRate.rating <= -5) {
        alert(`Пора забанить ${userToRate.name}. Сделать это?`);
      }
      setRatedUsers([...ratedUsers, userToRate]);
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <Card className="centered">
      <h2> Список пользователей </h2>
      <UserList users={users} onRateUser={rateUser} />

      {users.length === 0 && ratedUsers.length === 0 && (
        <Button onClick={fetchUsers}>Загрузить пользователей</Button>
      )}
    </Card>
  );
};

export default Users;
