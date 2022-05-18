import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

import './index.css';
import 'tailwindcss/tailwind.css';

import App from './App';
const client = new ApolloClient({
  uri: import.meta.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StrictMode>
  );
}
