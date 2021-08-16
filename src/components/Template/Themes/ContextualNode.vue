<template>
  <q-card class="theme">
    <div class="header row">
      <div class="column col-md-7 col-lg-7 col-sm-7 col-xs-7 q-pa-lg">
        <div class="text-h4 text-weight-bold">Invoice</div>
        <div class="editable text-h6 text-grey q-mt-md" data-name="yourName">Your Name / Business Name</div>
        <div class="editable text-subtitle text-grey q-mt-md" data-name="yourAddress">Your Business Address</div>
        <div class="editable text-subtitle text-grey q-mt-sm" data-name="yourCity">City</div>
        <div class="editable text-subtitle text-grey q-mt-sm" data-name="yourCountry">Country</div>
        <div class="editable text-subtitle text-grey q-mt-sm" data-name="yourPostal">Postal</div>
      </div>
      <div class="col column bg-blue-1 justify-center q-pa-xl text-white">
        <div class="text-uppercase q-mb-sm">Due</div>
        <div class="editable text-h4 text-weight-bold text-white" data-name="amount">$ 0000.00</div>
      </div>
    </div>
    <q-card-section class="q-pa-lg">
      <div class="row">
        <div class="">
          <div class="text-weight-bold text-uppercase">Bill To:</div>
          <div class="editable text-h6" data-name="companyName">Company Name</div>
          <div class="editable text-subtitle text-grey q-mt-sm" data-name="companyAddress">Address</div>
          <div class="editable text-subtitle text-grey q-mt-sm" data-name="companyCity">City</div>
          <div class="editable text-subtitle text-grey q-mt-sm" data-name="companyCountry">Country</div>
          <div class="editable text-subtitle text-grey q-mt-sm" data-name="companyPostal">Postal</div>
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
            <q-popup-edit v-model="dueDate">
              <q-input v-model="dueDate" filled type="date" dense autofocus counter />
            </q-popup-edit>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <items />
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
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
</style>

<script>
import { defineComponent, ref } from 'vue';
import Items from 'components/reusables/Items/Items.vue';

const ContextualNode = defineComponent({
  name: 'ContextualNode',
  components: {
    Items,
  },
  methods: {
    update(e) {
      this.invoice[e.target.attributes[1].value] = e.target.innerHTML;
    },
  },
  mounted() {
    document.querySelectorAll('.editable').forEach((el) => {
      el.setAttribute('contenteditable', true);
      el.addEventListener('onchange', this.update);
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
