<template>
  <q-page class="flex flex-center column" padding>
    <notify message="You can set default information here to fill templates with." />
    <div class="row">
      <q-tabs
        v-model="currentTab"
        class="text-primary"
      >
        <q-tab no-caps name="user" icon="person" label="Your Information" />
        <q-tab no-caps name="company" icon="domain" label="Company Details" />
      </q-tabs>
    </div>
    <q-tab-panels class="bg-grey-1" v-model="currentTab" animated>
      <q-tab-panel name="user">
        <q-card class="settings-card q-pa-md">
          <q-card-section>
            <div class="text-h6">Your Default settings</div>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md"
            >
              <q-select
                :options="currencies"
                :loading="fetchingCurrencies"
                :option-label="option => `${option.name || 'USD'} ( ${option.sign || '$'} )`"
                option-value="sign"
                emit-value
                map-options
                outlined
                dense
                v-model="form.currency"
                type="text"
                hint="Currency to be paid in"
              />
              <q-input outlined dense v-model="form.name" type="text" label="Your Name / Business Name" />
              <q-input outlined dense v-model="form.address" type="text" label="Your Address" />
              <q-input outlined dense v-model="form.city" type="text" label="City" />
              <q-input outlined dense v-model="form.country" type="text" label="Country" />
              <q-input outlined dense v-model="form.postal" type="text" label="Postal/Zip Code" />
              <div>
                <q-btn label="All Good Now" no-caps type="submit" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="company">
        <q-card class="settings-card q-pa-md">
          <q-card-section>
            <div class="text-h6">Company's default settings</div>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md"
            >
              <q-input outlined dense v-model="form.company_name" type="text" label="Company Name" />
              <q-input outlined dense v-model="form.company_address" type="text" label="Company Address" />
              <q-input outlined dense v-model="form.company_city" type="text" label="Company City" />
              <q-input outlined dense v-model="form.company_country" type="text" label="Company Country" />
              <q-input outlined dense v-model="form.company_postal" type="text" label="Company Postal Code" />
              <div>
                <q-btn label="All Good Now" no-caps type="submit" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>

  </q-page>
</template>

<style lang="scss">
  .settings-card {
    width: 500px;
  }
</style>
<script>
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

const Settings = defineComponent({
  name: 'Settings',
  data() {
    return {
      form: {
        name: '',
        address: '',
        city: '',
        country: '',
        postal: '',
        company_name: '',
        company_address: '',
        company_city: '',
        company_country: '',
        company_postal: '',
        currency: '',
      },
      currentTab: 'user',
      fetchingCurrencies: true,
    };
  },
  computed: {
    ...mapState('app', [
      'currencies',
    ]),
  },
  methods: {
    onSubmit() {

    },
  },
  mounted() {
    this.form.currency = 'USD (  )';
    this.$store.dispatch('app/getCurrencies')
      .then(() => {
        this.fetchingCurrencies = false;
      });
  },
});

export default Settings;
</script>
