<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    class="sidebarlink rounded-borders q-pa-md q-mt-md"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon color="grey" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
  .sidebarlink {
    transition: border-left 0.1s ease-in-out;
    &:hover {
      border-left: 8px solid $primary;
      color: $primary;
    }
  }
  .q-router-link--exact-active {
    border-left: 8px solid $primary;
    background-color: $grey-1;
  }
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SidebarLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
