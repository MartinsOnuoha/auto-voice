<template>
  <div class="notify row bg">
    <div class="row items-center bg-purple-1 text-dark q-pa-md rounded-borders q-mb-md">
      <q-icon name="info" color="primary" size="20px" class="q-mr-sm" />
      <div class="">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

const Notify = defineComponent({
  name: 'Notify',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
});

export default Notify;
</script>
