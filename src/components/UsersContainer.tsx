import UserList from "./UserList";
import useUserData from "../hooks/useUserData";

const UsersContainer = () => {
  const { data, isLoading, error } = useUserData();

  const props = {
    data,
    isLoading,
    error,
  };

  return (
    <div>
      <UserList {...props} />
    </div>
  );
};

export default UsersContainer;
