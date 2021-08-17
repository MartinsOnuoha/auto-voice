export function SET_TEMPLATES(state, payload) {
  state.templates = payload;
}

export function SET_CURRENCIES(state, payload) {
  state.currencies = payload;
}

export function SET_USER_DATA(state, userData) {
  state.user = userData;
  localStorage.setItem('user', JSON.stringify(userData));
}

export function SET_SETTINGS(state, payload) {
  state.settings = payload;
}
export function SET_BOOKMARKED(state, payload) {
  state.saved_templates = payload;
}
export function CLEAR_USER_DATA(state) {
  state.user = null;
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  // window.location.reload();
}
