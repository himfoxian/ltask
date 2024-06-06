// // context/KeycloakContext.js
// import { createContext, useContext, useState, useEffect } from 'react';
// import Keycloak from 'keycloak-js';

// const KeycloakContext = createContext(null);

// export const KeycloakProvider = ({ children }) => {
//   const [keycloak, setKeycloak] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const keycloakInstance = new Keycloak({
//         url: 'http://localhost:8080/auth',
//         realm: 'myrealm',
//         clientId: 'myclient',
//       });

//       keycloakInstance.init({ onLoad: 'check-sso' }).then(auth => {
//         setAuthenticated(auth);
//         setKeycloak(keycloakInstance);
//       }).catch(error => {
//         console.error('Failed to initialize Keycloak', error);
//       });
//     }
//   }, []);

//   return (
//     <KeycloakContext.Provider value={{ keycloak, authenticated }}>
//       {children}
//     </KeycloakContext.Provider>
//   );
// };

// export const useKeycloak = () => useContext(KeycloakContext);




// context/KeycloakContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

const KeycloakContext = createContext(null);

export const KeycloakProvider = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const keycloakInstance = new Keycloak({
        url: 'http://localhost:8080/auth',
        realm: 'myrealm',
        clientId: 'myclient',
      });

      keycloakInstance.init({ onLoad: 'check-sso' })
        .then(auth => {
          setAuthenticated(auth);
          setKeycloak(keycloakInstance);
        })
        .catch(error => {
          console.error('Failed to initialize Keycloak', error);
        });
    }
  }, []);

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export const useKeycloak = () => useContext(KeycloakContext);
