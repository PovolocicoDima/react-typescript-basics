import { FC, useEffect, useState } from "react";
import List from "./List";
import { IUser } from "../types/type";
import axios from "axios";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/users`,
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={() => navigate(`/users/${user.id}`)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UserPage;
