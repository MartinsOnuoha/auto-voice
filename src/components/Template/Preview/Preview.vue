<template>
  <q-card flat bordered :class="[isAvailable ? 'cursor-pointer' : null]">
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
        <div class="">
          <q-btn @click="bookmarkTemplate" class="q-mr-sm" round flat color="primary" icon="bookmark_outline" size="sm" />
          <q-btn @click="useTemplate" unelevated v-if="preview.is_available" color="purple-1" text-color="primary" size="sm" label="Use template" />
          <q-btn unelevated disable v-else color="purple-1" text-color="primary" size="sm" label="Coming Soon" />
        </div>
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
import { mapGetters } from 'vuex';

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
    ...mapGetters({
      user: 'app/user',
    }),
  },
  methods: {
    useTemplate() {
      const name = this.preview.name.split(' ').join('');
      this.$router.push({ name: 'Customize', params: { name } });
    },
    async bookmarkTemplate() {
      this.$q.loading.show();
      const payload = {
        name: this.preview.name,
        preview_url: this.preview.preview_url,
        user_id: this.user.id,
      };
      await this.$store.dispatch('app/bookmarkTemplate', payload);
      this.$q.loading.hide();
    },
  },
});

export default Preview;
</script>
