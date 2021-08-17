<template>
  <q-page class="flex flex-center column" padding>
    <notify message="You can edit the basic elements of this template by clicking on them" />
    <component :setting="settings" :is="componentId"></component>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import PragmaticBlue from 'components/Template/Themes/PragmaticBlue.vue';
import { mapState } from 'vuex';

const Customize = defineComponent({
  name: 'Customize',
  components: {
    PragmaticBlue,
  },
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      componentId: 'ContextualNode',
    };
  },
  computed: {
    ...mapState('app', [
      'user',
      'settings',
    ]),
  },
  mounted() {
    if (this.name) {
      this.componentId = this.name;
    }
    this.$store.dispatch('app/getSettings', this.user.id);
  },
});

export default Customize;
</script>
