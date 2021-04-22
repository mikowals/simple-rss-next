import Head from 'next/head'
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { client } from '../../api/apolloClient';
import { ArticlesPageWithStream } from '../../components/articles';

export default function Articles() {
  return (
    <ApolloProvider client={client}>
      <ArticlesPageWithStream />
    </ApolloProvider>
  );
};
