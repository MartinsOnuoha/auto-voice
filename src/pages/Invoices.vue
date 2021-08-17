<template>
  <q-page padding class="flex column">
    <notify message="Here you can see all saved templates." />
    <div class="flex flex-center" v-if="!saved_templates.length">
      <loader />
    </div>
    <saved-temp
      :name="item.name"
      :preview_url="item.preview_url"
      class="q-mb-sm"
      v-for="(item, i) in saved_templates"
      :key="i"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import SavedTemp from 'components/reusables/SavedTemp/SavedTemp.vue';
import { mapState } from 'vuex';

const Invoices = defineComponent({
  name: 'SavedInvoices',
  components: {
    SavedTemp,
  },
  computed: {
    ...mapState('app', [
      'saved_templates',
      'user',
    ]),
  },
  methods: {
    getBookmarked() {
      this.$store.dispatch('app/getBookmarked', this.user.id);
    },
  },
  mounted() {
    this.getBookmarked();
  },
});

export default Invoices;
</script>
