import { apolloClient } from 'boot/apollo';
import { Magic } from 'magic-sdk';
import {
  GET_TEMPLATES, GET_CURRENCIES, GET_USER, GET_SETTINGS, GET_BOOKMARKED,
} from '../../gql/queries';
import {
  BOOKMARK_TEMPLATE, CREATE_USER, CREATE_SETTINGS, UPDATE_SETTINGS,
} from '../../gql/mutations';

const magic = new Magic(process.env.MAGIC_KEY);

export function getTemplates({ commit }) {
  return apolloClient.query({ query: GET_TEMPLATES })
    .then(({ data }) => {
      commit('SET_TEMPLATES', data.templates);
      return data;
    });
}

export function getCurrencies({ commit }) {
  return apolloClient.query({ query: GET_CURRENCIES })
    .then(({ data }) => {
      commit('SET_CURRENCIES', data.currencies);
      return data;
    });
}

export function getSettings({ commit }, userId) {
  return apolloClient.query({ query: GET_SETTINGS, variables: { userId } })
    .then(({ data }) => {
      const settings = data.settings[0];
      commit('SET_SETTINGS', settings);
    });
}
/**
 * handle login new/existing users
 * @param {Context} param0
 * @param {String} email
 */
export async function login({ commit }, email) {
  await magic.auth.loginWithMagicLink({ email, redirectURI: `${window.location.origin}/explore` });
  const userData = await magic.user.getMetadata();

  if (userData) {
    const { data } = await apolloClient.query({ query: GET_USER, variables: { email } });

    if (!data.users.length) {
      apolloClient.mutate({ mutation: CREATE_USER, variables: { email } })
        .then(({ user }) => { userData.id = user.insert_users_one.id; });
    } else {
      userData.id = data.users[0].id;
    }
  }
  commit('SET_USER_DATA', userData);
}

/**
 * bookmark a template
 * @param {*} _
 * @param {*} payload
 * @returns data
 */
export async function bookmarkTemplate(_, payload) {
  const { name, preview_url: previewUrl, user_id: userId } = payload;
  const { data } = await apolloClient.mutate({ mutation: BOOKMARK_TEMPLATE, variables: { name, preview_url: previewUrl, user_id: userId } });
  return data;
}

export async function getBookmarked({ commit }, userId) {
  return apolloClient.query({ query: GET_BOOKMARKED, variables: { userId } })
    .then(({ data }) => {
      const { saved_templates: savedTemplates } = data;
      commit('SET_BOOKMARKED', savedTemplates);
      return data;
    });
}

export async function updateSettings({ commit }, { settingId, payload }) {
  if (!settingId) {
    const { insert_settings_one: newSettings } = await apolloClient.mutate({ mutation: CREATE_SETTINGS, variables: { ...payload } }).then(({ data }) => data);
    commit('SET_SETTINGS', newSettings);
    return newSettings;
  }
  payload = { ...payload, id: settingId };
  delete payload.user_id;
  // eslint-disable-next-line no-underscore-dangle
  delete payload.__typename;

  const { update_settings_by_pk: updatedData } = await apolloClient.mutate({ mutation: UPDATE_SETTINGS, variables: { ...payload } }).then(({ data }) => data);
  commit('SET_SETTINGS', updatedData);
  return updatedData;
}
/**
 * handle logout
 * @param {*} param0
 */
export function logout({ commit }) {
  magic.user.logout();
  commit('CLEAR_USER_DATA');
}
