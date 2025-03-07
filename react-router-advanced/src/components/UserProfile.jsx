import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  return <h2>User Profile for User ID: {id}</h2>;
};

export default UserProfile;
