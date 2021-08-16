import { apolloClient } from 'boot/apollo';
import { GET_TEMPLATES } from '../../gql/queries';

export function getTemplates({ commit }) {
  return apolloClient.query({ query: GET_TEMPLATES })
    .then(({ data }) => {
      commit('SET_TEMPLATES', data.templates);
      return data;
    });
}
