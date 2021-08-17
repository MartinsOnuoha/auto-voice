<template>
  <q-page class="flex flex-center bg-purple-2 q-pa-md">
    <q-card class="auth">
      <q-card-section :class="[isMobile? null: 'q-pa-xl', 'row']">
        <div :class="['col col-md-6 col-lg-6 col-sm-12 col-xs-12', isMobile? null : 'q-pa-lg']">
          <div class="">
            <div :class="['text-h6', isMobile? null: 'q-mt-xl']">Enter your email</div>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md q-mt-md"
            >
              <q-input v-model="form.email" outlined dense type="text" label="Enter your email" />
              <div>
                <q-btn class="full-width" label="Submit" type="submit" color="primary"/>
              </div>
            </q-form>
          </div>
        </div>
        <div class="col desktop-only">
          <img width="300" src="https://img.freepik.com/free-vector/personal-files-concept-illustration_114360-4013.jpg?size=338&ext=jpg&ga=GA1.2.2102900112.1628985600">
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style lang="scss" scoped>
  .auth {
    width: 700px;
  }

</style>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      form: {
        email: '',
      },
    };
  },
  computed: {
    isMobile() {
      return this.$q.platform.is.mobile;
    },
  },
  methods: {
    async onSubmit() {
      const { email } = this.form;
      if (email) {
        try {
          this.$q.loading.show();
          await this.$store.dispatch('app/login', email);
          this.$router.replace({ name: 'Explore' });
          this.$q.loading.hide();
        } catch (e) {
          throw new Error(e.message);
        }
      }
    },
  },
});
</script>
