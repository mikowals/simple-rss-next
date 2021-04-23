import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BatchHttpLink } from "apollo-link-batch-http";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new BatchHttpLink({
    uri: 'https://cloudflare-worker-rss.mikowals.workers.dev/graphql',
    credentials: 'include',
    batchInterval: 5}),
  connectToDevTools: true
});
