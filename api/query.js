import { gql } from '@apollo/client';

export const ARTICLES_QUERY = gql`
  query($userId: String!) {
    articles(userId: $userId) {
      _id
      source
      date
      title
      link
      summary
      feedId
    }
  }
`;

export const FEEDS_QUERY = gql`
  query feeds($userId: String!) {
    feeds(userId: $userId) {
      _id
      title
      url
      date
      count
    }
  }
`;

export const USER_QUERY = gql`
  query feeds($userId: String!) {
    feeds(userId: $userId) {
      _id
      feedList
    }
  }
`;
