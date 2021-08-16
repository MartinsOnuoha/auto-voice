import { boot } from 'quasar/wrappers';
import ApolloClient, { gql } from 'apollo-boost';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: process.env.GRAPHQL_URI,
  headers: {
    'x-hasura-admin-secret': process.env.HASHURA_KEY,
  },
});

export default boot(({ app }) => {
  app.config.globalProperties.$apollo = apolloClient;
});

export {
  apolloClient,
  gql,
};
