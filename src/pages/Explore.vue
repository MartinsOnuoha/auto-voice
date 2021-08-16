<template>
  <q-page padding>
    <div class="row q-mb-md">
      <div class="col-md-5 col-lg-5 col-xl-6 col-sm-12 col-xs-12 q-mt-lg q-mb-lg">
        <search @filter="filter" />
      </div>
    </div>
    <div v-if="!filteredTemplates.length" class="flex flex-center q-mt-lg">
      <loader />
    </div>
    <div class="row q-col-gutter-xl">
      <div
        v-for="(template, index) in filteredTemplates"
        :key="index"
        class="col-md-4 col-lg-4 col-xl-4 col-xs-12 col-sm-12"
      >
        <Preview :preview="template" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Preview from 'components/Template/Preview/Preview';
import { mapGetters } from 'vuex';

const Explore = defineComponent({
  name: 'Explore',
  components: {
    Preview,
  },
  data() {
    return {
      filteredTemplates: [],
    };
  },
  computed: {
    ...mapGetters({
      templates: 'app/templates',
    }),
  },
  mounted() {
    this.$store.dispatch('app/getTemplates')
      .then(() => {
        this.filteredTemplates = this.templates;
      });
  },
  methods: {
    filter(query) {
      this.filteredTemplates = this.templates.filter((x) => x.name.includes(query));
    },
  },
});

export default Explore;
</script>
