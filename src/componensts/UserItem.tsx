import { FC } from "react";
import { IUser } from "../types/type";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 15, border: "1px solid gray", cursor: "pointer" }}
    >
      {user.id}, {user.email} lives in city {user.address.city} on the street{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
