<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="mobile-only">
      <q-toolbar class="q-pa-md mobile-only">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          🧾 AutoInvoice
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class=""
    >
      <q-list class="q-pa-md">
        <q-item-label
          header
          class="text-grey-8 q-mb-xl text-h6"
        >
          🧾 AutoInvoice
        </q-item-label>

        <div class="links">
          <SidebarLink
            v-for="link in SidebarLinks"
            :key="link.title"
            v-bind="link"
          />
        </div>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SidebarLink from 'src/components/SidebarLink.vue';

const linksList = [
  {
    title: 'Explore',
    caption: 'Everything you need 🔦',
    icon: 'school',
    link: '/explore',
  },
  {
    title: 'Saved Templates',
    caption: 'See your saved templates',
    icon: 'receipt',
    link: '/saved-invoices',
  },
  {
    title: 'Profile',
    caption: 'manage your profile 😀',
    icon: 'person',
    link: '/me',
  },
  {
    title: 'Settings',
    caption: 'configure automation 🔧',
    icon: 'settings',
    link: '/settings',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    SidebarLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      SidebarLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
