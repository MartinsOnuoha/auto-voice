<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="user" class="mobile-only">
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
          <q-icon size="lg" name="img:/av-logo.png" />
          <div class="q-mt-sm">
            AutoInvoice
          </div>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      v-if="user"
      class=""
    >
      <q-list class="q-pa-md">
        <q-item-label
          header
          class="text-grey-8 q-mb-xl text-h6"
        >
          <q-icon name="img:/av-logo.png" />
          AutoInvoice
        </q-item-label>

        <div class="links">
          <SidebarLink
            v-for="link in SidebarLinks"
            :key="link.title"
            v-bind="link"
          />
          <SidebarLink @click="logOut" v-bind="{ title: 'Logout', link: '/logout', icon: 'logout', caption: 'Alright, I\'m done' }"/>
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
    title: 'Settings',
    caption: 'configure automation 🔧',
    icon: 'settings',
    link: '/settings',
  },
];

import { defineComponent, ref } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'MainLayout',
  components: {
    SidebarLink,
  },
  computed: {
    ...mapGetters({
      user: 'app/user',
    }),
  },
  methods: {
    logOut() {
      this.$store.dispatch('app/logout');
      this.$router.replace({ name: 'home' });
    },
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
