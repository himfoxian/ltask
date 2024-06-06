// pages/index.js
import { useEffect } from 'react';
import { useKeycloak } from '../context/KeycloakContext';
import { useRouter } from 'next/router';

const HomePage = () => {
  const { keycloak, authenticated } = useKeycloak();
  const router = useRouter();

  useEffect(() => {
    if (keycloak && !authenticated) {
      router.push('/login');
    }
  }, [keycloak, authenticated, router]);

  const handleLogout = () => {
    if (keycloak) {
      keycloak.logout();
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {authenticated ? (
        <div>
          <p>Welcome, {keycloak.tokenParsed?.preferred_username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p> Hi himanshu </p>
      )}
    </div>
  );
};

export default HomePage;


