const user = localStorage.getItem('user');

export default () => ({
  templates: [],
  settings: null,
  currencies: [],
  user: user ? JSON.parse(user) : null,
  saved_templates: [],
});
