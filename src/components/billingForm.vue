<template>
  <form class="row g-3 mb-3">
    <h5>Billing details</h5>
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="First Name">
      <p v-if="!isFNameIsValid">not valid</p>
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
      <p v-if="!isLNameIsValid">not valid</p>
    </div>
    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input v-model="city" type="text" class="form-control" id="city" placeholder="City">
      <p v-if="!isCityIsValid">not valid</p>
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input v-model="address" type="text" class="form-control" id="address" placeholder="Address">
      <p v-if="!isAddressIsValid">not valid</p>
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address">
      <p v-if="!isEmailIsValid">not valid</p>
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input v-model="phone" type="text" class="form-control" id="phone" placeholder="+38(099) 999-99-99">
      <p v-if="!isPhoneIsValid">not valid</p>
    </div>
    <div class="col-12 d-flex justify-content-end">
      <button
          @click="resetInput(); $root.formSubmit(firstName, lastName) "
          :disabled="!fullValidation"
          type="submit" class="btn btn-success">
        Place Order
      </button>
    </div>
  </form>
</template>
<script>
const fvalid = (isFNameIsValid, isLNameIsValid,
    isCityIsValid, isAddressIsValid,
    isPhoneIsValid, isEmailIsValid) => {
  if (isFNameIsValid && isLNameIsValid &&
      isCityIsValid && isAddressIsValid &&
      isPhoneIsValid && isEmailIsValid) {
    return true;
  } else {
    return false;
  }
}

export default {
  name: "billing-form",
  data() {
    return {
      firstName: "",
      lastName: "",
      city: "",
      address: "",
      email: "",
      phone: "",
      isFNameIsValid: true,
      isLNameIsValid: true,
      isCityIsValid: true,
      isAddressIsValid: true,
      isPhoneIsValid: true,
      isEmailIsValid: true,
      fullValidation: false,
    };
  },
  methods: {
    resetInput() {
      // это тоже можно оптимизировать, скорее всего
      console.log(this.firstName, this.lastName, this.city, this.address, this.email, this.phone)
      this.firstName = "";
      this.lastName = "";
      this.city = "";
      this.address = "";
      this.email = "";
      this.phone = "";
    },
  },
  watch: {
    firstName(newValue) {
      this.isFNameIsValid = true;
      if (newValue.length < 3) {
        this.isFNameIsValid = false;
      }
      this.fullValidation = fvalid(this.isFNameIsValid, this.isLNameIsValid,
          this.isCityIsValid, this.isAddressIsValid,
          this.isPhoneIsValid, this.isEmailIsValid);
    },
    lastName(newValue) {
      this.isLNameIsValid = true;
      if (newValue.length < 3) {
        this.isLNameIsValid = false;
      }
      this.fullValidation = fvalid(this.isFNameIsValid, this.isLNameIsValid,
          this.isCityIsValid, this.isAddressIsValid,
          this.isPhoneIsValid, this.isEmailIsValid);
    },
    city(newValue) {
      this.isCityIsValid = true;
      if (newValue.length < 3) {
        this.isCityIsValid = false;
      }
      this.fullValidation = fvalid(this.isFNameIsValid, this.isLNameIsValid,
          this.isCityIsValid, this.isAddressIsValid,
          this.isPhoneIsValid, this.isEmailIsValid);
    },
    address(newValue) {
      this.isAddressIsValid = true;
      if (newValue.length < 15) {
        this.isAddressIsValid = false;
      }
      this.fullValidation = fvalid(this.isFNameIsValid, this.isLNameIsValid,
          this.isCityIsValid, this.isAddressIsValid,
          this.isPhoneIsValid, this.isEmailIsValid);
    },
    email(newValue) {
      this.isEmailIsValid = true;
      if (newValue.length < 7 && newValue.contain('@')) {
        this.isEmailIsValid = false;
      }
      this.fullValidation = fvalid(this.isFNameIsValid, this.isLNameIsValid,
          this.isCityIsValid, this.isAddressIsValid,
          this.isPhoneIsValid, this.isEmailIsValid);
    },
    phone(newValue) {
      this.isPhoneIsValid = true;
      let x = parseInt(newValue);
      if (isNaN(x) || newValue < 10) {
        this.isPhoneIsValid = false;
      }
      this.fullValidation = fvalid(this.isFNameIsValid, this.isLNameIsValid,
          this.isCityIsValid, this.isAddressIsValid,
          this.isPhoneIsValid, this.isEmailIsValid);
    },
  },
}
</script>