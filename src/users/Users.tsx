import { useCallback, useState } from "react";
import { UserList } from "./UserList";
import { Button, Card } from "../app/common";
import { RatedUsers } from "./UserRated";

export interface IUser {
  id: number;
  name: string;
  rating: number;
}

const Users = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [ratedUsers, setRatedUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchUsers = useCallback(
    async (page: number) => {
      try {
        const response = await fetch(
          `https://random-data-api.com/api/users/random_user?size=3&page=${page}`
        );
        const data = await response.json();
        const newUsers = data.map((user: any) => ({
          id: user.id,
          name: `${user.first_name} ${user.last_name}`,
          rating: 0,
        }));
        if (page === 1) {
          setUsers(newUsers);
        } else {
          setUsers([...users, ...newUsers]);
        }
      } catch (error) {
        console.error(error);
      }
      setShowButtons(true);
    },
    [users]
  );

  function handleLoadMore() {
    fetchUsers(page + 1);
    setPage(page + 1);
  }

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
      <div>
        <h2> Список пользователей </h2>
        <UserList users={users} onRateUser={rateUser} />
        {users.length === 0 && ratedUsers.length === 0 && (
          <Button onClick={() => fetchUsers(0)}>Загрузить пользователей</Button>
        )}
        {showButtons && (
          <>
            <Button onClick={() => fetchUsers(+1)}>Обновить список</Button>
            <Button onClick={handleLoadMore}> Следующая страница </Button>
          </>
        )}
      </div>
      <div>
        <h2> Список пользователей с оценкой </h2>
        <RatedUsers ratedUsers={ratedUsers} onRateUser={rateUser} />
      </div>
    </Card>
  );
};

export default Users;
