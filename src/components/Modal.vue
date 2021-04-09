<template>
  <div>
    <div class="modal">
      <div
        class="fixed bg-white top-1/4 right-1/2 -mr-60 flex flex-col rounded-2xl shadow-xl border-2 border-autocare-blue"
      >
        <section
          class="relative py-12 px-7 w-100 text-autocare-blue text-center inter"
        >
          <slot name="body">
            <a href="#" @click="close"
              ><img src="../assets/img/close.svg" alt=""
            /></a>
            <img
              src="../assets/img/tick-with-circle.svg"
              alt=""
              class="w-2/12 mx-auto"
            />
            <h2 class="mt-6 font-bold text-xl">
              You've Registered your Complaint
            </h2>
            <p class="mt-4 text-gray-500 leading-tight px-4">
              Thank you for reaching us, an expert would get back to you within
              the next 48 hours.
            </p>
            <router-link to="/"
              ><button
                class="mt-9 rounded-full text-white text-center w-full bg-autocare-blue py-2"
              >
                Go home
              </button></router-link
            >
          </slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");

.inter {
  font-family: "Inter", sans-serif;
}

.ibm-font {
  font-family: "IBM Plex Sans", sans-serif;
}

.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
</style>
