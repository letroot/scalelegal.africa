<template>
  <div>
    <div class="modal">
      <div
        class="fixed bg-white top-1/4 right-1/2 -mr-40 sm:-mr-80 flex flex-col shadow-xl"
      >
        <section class="relative w-80 sm:w-200 flex items-center">
          <div class="w-4/12">
            <img src="../assets/img/book-cover.png" alt="" class="ml-2" />
          </div>
          <div class="w-8/12 bg-modal py-12 px-7">
            <slot name="body">
              <a href="#" @click="close" class="absolute right-7 top-7"
                ><img src="../assets/img/close.svg" alt=""
              /></a>
              <h2
                class="mt-6 font-medium text-2xl leading-none text-nav-text libre"
              >
                Make your Business More Profitable Now!
              </h2>
              <p
                class="mt-4 text-body-text text-xs leading-tight font-light inter-font"
              >
                <span class="font-semibold"
                  >Your download should begin shortly.</span
                >
                <br />
                <br />
                Do you want to learn how to make your business more profitable,
                investible and scalable? Then we think you should buy the
                ScaleLegal
                <span class="font-semibold"
                  >Legal Guide for a Maximum Profit Business</span
                >
                where you can learn all you need to make your ... in just 28
                pages.
                <br />
                <br />
                It costs less than a movie ticket.
              </p>
              <router-link to="/maxprofit">
                <button
                  class="bg-scale-green py-4 rounded-lg px-6 mt-5 focus:outline-none text-white text-sm inter-font"
                >
                  GET EBOOK NOW
                </button>
              </router-link>
            </slot>
          </div>
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
