import { FC, useCallback, useEffect, useState } from "react";
import { IUser } from "../types/type";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>This is the users : {user?.name} page</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city}
        {user?.address.street}
        {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
