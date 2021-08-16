import { boot } from 'quasar/wrappers';

/* eslint-disable global-require */

const globalComponents = {
  Loader: require('components/reusables/Loader/Loader').default,
  Search: require('components/reusables/Search/Search').default,
};

export default boot(({ app }) => {
  Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component);
  });
});
