import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BatchHttpLink } from "apollo-link-batch-http";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new BatchHttpLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'same-origin',
    batchInterval: 5}),
  connectToDevTools: true
});
