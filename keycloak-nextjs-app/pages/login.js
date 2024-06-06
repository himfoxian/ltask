// pages/login.js
import { useEffect } from 'react';
import { useKeycloak } from '../context/KeycloakContext';

const LoginPage = () => {
  const { keycloak, authenticated } = useKeycloak();

  useEffect(() => {
    if (keycloak && !authenticated) {
      keycloak.login();
    }
  }, [keycloak, authenticated]);

  return (
    <div>
      <h1>Login Page</h1>
      {authenticated ? (
        <p>You are already logged in</p>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
};

export default LoginPage;




