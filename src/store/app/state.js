export default () => ({
  templates: [],
  settings: null,
  currencies: [],
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  saved_templates: [],
});
