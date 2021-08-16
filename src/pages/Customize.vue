<template>
  <q-page class="flex flex-center" padding>
    <component :is="componentId"></component>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ContextualNode from 'src/components/Template/Themes/ContextualNode.vue';

const Customize = defineComponent({
  name: 'Customize',
  components: {
    ContextualNode,
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
  mounted() {
    if (this.name) {
      this.componentId = this.name;
    }
  },
});

export default Customize;
</script>
