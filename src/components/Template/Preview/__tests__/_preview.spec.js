// import { shallowMount } from '@vue/test-utils';
// const { shallowMount } = require('@vue/test-utils');
// const Preview = require('../Preview');
// import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';

import Preview from '../Preview.vue';

// const mountQuasar = require('@quasar/quasar-app-extension-testing-unit-jest');
const { shallowMount } = require('@vue/test-utils');
// const Preview = require('../Preview');

describe('Preview.vue', () => {
  it('renders Preview.vue component correctly', () => {
    const wrapper = shallowMount(Preview);
    expect(wrapper.text()).toContain('Coming Soon');
  });
});
