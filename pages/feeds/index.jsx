import Head from 'next/head'
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { client } from '../../api/apolloClient';
import { FeedsPageWithContainer } from '../../components/feeds';


export default function Articles() {
  return (
    <ApolloProvider client={client}>
      <FeedsPageWithContainer />
    </ApolloProvider>
  );
};
