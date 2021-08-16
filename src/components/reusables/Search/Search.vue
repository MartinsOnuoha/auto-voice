<template>
  <q-input
    standout="bg-white"
    outlined
    class="bg-white"
    dense
    v-model="query"
    @change="filter"
    @input="filter"
    type="text"
    label="Find a Template"
  >
    <template v-slot:prepend>
      <q-icon name="feature_search_outline" />
    </template>

    <template #append>
      <q-btn @click="filter" color="primary" size="sm" label="Search" />
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from 'vue';

const Search = defineComponent({
  name: 'Search',
  data() {
    return {
      query: '',
    };
  },
  watch: {
    query(n) {
      this.$emit('filter', n);
    },
  },
  methods: {
    filter() {
      this.$emit('filter', this.query);
    },
  },
});

export default Search;
</script>
