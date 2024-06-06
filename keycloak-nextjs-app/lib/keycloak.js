// lib/keycloak.js
import Keycloak from 'keycloak-js';

let keycloak;

if (typeof window !== 'undefined') {
  const keycloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'myrealm',
    clientId: 'myclient',
  };

  keycloak = new Keycloak(keycloakConfig);
}

export default keycloak;
