import { useAuth } from '../components/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <>
          <p>Welcome! <button onClick={logout}>Logout</button></p>
          <Link to="/profile">Go to Profile</Link>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default Home;
