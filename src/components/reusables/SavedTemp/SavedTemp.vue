<template>
  <q-card flat bordered style="width: 30rem">
    <q-card-section horizontal>
      <q-card-section class="col-9 q-pt-xs">
        <div class="text-overline">Template Name:</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ name }}</div>
      </q-card-section>
      <q-card-section class="col-3 flex flex-center">
        <q-img
          class="rounded-borders"
          :src="preview_url"
        />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

const SavedTemp = defineComponent({
  name: 'SavedTemp',
  props: {
    name: {
      type: String,
      required: true,
    },
    preview_url: {
      type: String,
    },
  },
});

export default SavedTemp;
</script>
