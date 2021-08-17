<template>
  <q-card id="pragmatic" class="theme">
    <div class="header row">
      <div class="column col-md-7 col-lg-7 col-sm-7 col-xs-7 q-pa-lg">
        <div class="text-h4 text-weight-bold">Invoice</div>
        <div class="editable text-h6 text-grey q-mt-md" data-name="name">Your Name / Business Name</div>
        <div class="editable text-subtitle text-grey q-mt-md" data-name="address">Your Business Address</div>
        <div class="editable text-subtitle text-grey q-mt-sm" data-name="city">City</div>
        <div class="editable text-subtitle text-grey q-mt-sm" data-name="country">Country</div>
        <div class="editable text-subtitle text-grey q-mt-sm" data-name="postal">Postal</div>
      </div>
      <div id="price_column" class="col column bg-blue-1 justify-center q-pa-xl text-white">
        <div class="text-uppercase q-mb-sm">Due</div>
        <div class="text-h5 text-weight-bold text-white" data-name="amount">{{ currency }} <span class="editable">0000.00</span></div>
      </div>
    </div>
    <q-card-section class="q-pa-lg">
      <div class="row">
        <div class="">
          <div class="text-weight-bold text-uppercase">Bill To:</div>
          <div class="editable text-h6" data-name="company_name">Company Name</div>
          <div class="editable text-subtitle text-grey q-mt-sm" data-name="company_address">Address</div>
          <div class="editable text-subtitle text-grey q-mt-sm" data-name="company_city">City</div>
          <div class="editable text-subtitle text-grey q-mt-sm" data-name="company_country">Country</div>
          <div class="editable text-subtitle text-grey q-mt-sm" data-name="company_postal">Postal</div>
        </div>
        <q-space />
        <div class="text-right">
          <div class="text-weight-bold text-uppercase">Invoice #</div>
          <div class="editable text-subtitle text-grey" data-name="companyInvoiceNum">12345</div>
          <div class="text-weight-bold text-uppercase q-mt-sm">Date</div>
          <div class="text-subtitle text-grey">
            {{ issuedDate }}
            <q-popup-edit v-model="issuedDate">
              <q-input v-model="issuedDate" type="date" dense autofocus counter />
            </q-popup-edit>
          </div>
          <div class="text-weight-bold text-uppercase q-mt-sm">Invoice Due Date</div>
          <div class="text-subtitle text-grey">
            {{ dueDate }}
            <q-popup-edit v-model="dueDate">
              <q-input v-model="dueDate" type="date" dense autofocus counter />
            </q-popup-edit>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <items @download="print" />
    </q-card-section>
  </q-card>
</template>

<style lang="scss">
  .header {
    min-height: 250px;
    border-bottom: 1px solid $grey-4;
  }
  .editable {
    outline:none;
    transition: padding 0.1s ease-in-out;
    &:focus {
      border: 1px solid $warning;
      border-radius: 5px;
      padding: 5px;
    }
  }
  @media print {
    .card_button {
      display: none;
    }
    #bg-blue-1 {
      background-color: #2785f6 !important;
    }
    #pragmatic {
      background-color: white;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      padding: 15px;
      font-size: 14px;
      line-height: 18px;
    }

}
</style>

<script>
import { defineComponent, ref } from 'vue';
import Items from 'components/reusables/Items/Items.vue';
import { mapState } from 'vuex';

const ContextualNode = defineComponent({
  name: 'ContextualNode',
  components: {
    Items,
  },
  computed: {
    ...mapState('app', [
      'settings',
      'user',
    ]),
    currency() {
      const { settings } = this;
      return settings ? settings.currency : 'USD ($)';
    },
  },
  methods: {
    update(e) {
      this.invoice[e.target.attributes[1].value] = e.target.innerHTML;
    },
    print() {
      const headstr = '<html><head><title></title></head><body>';
      const footstr = '</body>';
      const newstr = document.all.item('pragmatic').innerHTML;
      const oldstr = document.body.innerHTML;
      document.body.innerHTML = headstr + newstr + footstr;
      window.print();
      document.body.innerHTML = oldstr;
      return false;
      // mywindow.close();
    },
  },
  async mounted() {
    if (!this.settings) {
      await this.$store.dispatch('app/getSettings', this.user.id);
    }
    let arr = [];
    if (this.settings) {
      arr = Object.keys(this.settings);
    }
    document.querySelectorAll('.editable').forEach((el) => {
      el.setAttribute('contenteditable', true);
      if (arr.length) {
        const dataName = el.getAttribute('data-name');
        const setter = arr.find((x) => x === dataName);
        if (setter) {
          el.innerHTML = this.settings[dataName];
        }
      }
    });
  },
  setup() {
    const dueDate = ref('mm/dd/yyyy');
    const issuedDate = ref('mm/dd/yyyy');

    return {
      dueDate,
      issuedDate,
    };
  },
});

export default ContextualNode;
</script>
