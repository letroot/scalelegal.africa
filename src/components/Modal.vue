<template>
  <div>
    <div class="modal z-30">
      <div
        class="fixed bg-white top-1/4 right-1/2 -mr-40 sm:-mr-80 flex flex-col shadow-xl"
      >
        <section class="relative w-80 sm:w-200 flex items-center">
          <div class="w-4/12 hidden sm:block">
            <img src="../assets/img/checklist.png" alt="" class="ml-2" />
          </div>
          <div class="sm:w-8/12 bg-modal py-12 px-7">
            <slot name="body">
              <a href="#" @click="close" class="absolute right-7 top-7"
                ><img src="../assets/img/close.svg" alt=""
              /></a>
              <h2
                class="mt-6 font-medium text-2xl leading-none text-nav-text libre"
              >
                Thank you for your interest in the Maximum Profit Legal
                Checklist.
              </h2>
              <p
                class="mt-4 text-body-text text-xs leading-tight font-light inter-font"
              >
                <span class="font-semibold"
                  >Kindly fill in your email to receive this free gift.
                </span>
                <br />
                <br />
                We promise not to share your email details with any one and you
                can unsubscribe whenever you wish.
              </p>
              <div class="mt-4">
                <input
                  type="email"
                  class="px-3 py-3 w-9/12 border border-nav-text text-sm text-body-text"
                  placeholder="Type your email here"
                  v-model="email"
                />
              </div>
              <router-link to="/maxprofit-upsell">
                <button
                  class="bg-scale-green py-2 rounded-lg px-6 mt-5 focus:outline-none text-white text-sm inter-font"
                  @click="subscribe"
                >
                  SUBSCRIBE
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
import axios from "axios";
export default {
  name: "modal",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    subscribe() {
      axios
        .post("https://quiet-scrubland-18032.herokuapp.com/sla-subscribe", {
          scalegalemail: this.email,
        })
        .then(() => {
          console.log("sent");
        })
        .catch((error) => {
          console.log("error: " + error);
        });
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
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
</style>
