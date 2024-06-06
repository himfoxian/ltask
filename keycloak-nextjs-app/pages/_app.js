// pages/_app.js
import { KeycloakProvider } from '../context/KeycloakContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <KeycloakProvider>
      <Component {...pageProps} />
    </KeycloakProvider>
  );
};

export default MyApp;






