<template>
  <q-card @click="useTemplate" flat bordered :class="[isAvailable ? 'cursor-pointer' : null]">
    <div v-if="!isAvailable" class="coming_soon text-weight-bold q-mt-sm text-caption">Coming Soon</div>
    <q-card-section>
      <q-img
        :src="preview.preview_url"
        :ratio="16/20"
        spinner-color="primary"
        spinner-size="82px"
        class="image"
      >
      </q-img>
      <div class="row items-center q-mt-md">
        <div class="title text-weight-bold text-dark">{{ preview.name }}</div>
        <q-space />
        <q-btn unelevated v-if="preview.is_available" color="purple-1" text-color="primary" size="sm" label="Use this template" />
        <q-btn unelevated disable v-else color="purple-1" text-color="primary" size="sm" label="Coming Soon" />
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss">
  .image {
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: rotate(2deg);
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }
  .q-img__container:hover {
    filter: grayscale(1)
  }
  .coming_soon {
    position: absolute;
    background: $negative;
    padding: 8px;
    color: #FFF;
    z-index: 9999;
    margin-left: -5px;
  }
</style>

<script>
import { defineComponent } from 'vue';

const Preview = defineComponent({
  name: 'Preview',
  props: {
    preview: {
      type: Object,
    },
  },
  computed: {
    isAvailable() {
      return this.preview.is_available;
    },
  },
  methods: {
    useTemplate() {
      const name = this.preview.name.split(' ').join('');
      this.$router.push({ name: 'Customize', params: { name } });
    },
    expand() {

    },
  },
});

export default Preview;
</script>
