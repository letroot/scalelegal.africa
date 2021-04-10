<template>
  <div>
    <Header />
    <div
      class="px-10 sm:px-16 lg:px-20 xl:px-32 py-12 sm:w-8/12 lg:w-7/12 xl:w-6/12"
    >
      <slot name="body">
        <h2
          class="mt-6 font-medium text-2xl lg:text-3xl xl:text-4xl leading-none text-nav-text libre"
        >
          Thank You for Downloading
        </h2>
        <p
          class="mt-4 xl:mt-8 text-body-text text-xs sm:text-base leading-tight font-light inter-font"
        >
          <span class="font-semibold">Your download should begin shortly.</span>
          <br />
          <br />
          Do you want to learn how to make your business more profitable,
          investible and scalable? Then we think you should buy the ScaleLegal
          <span class="font-semibold"
            >Legal Guide for a Maximum Profit Business</span
          >
          where you can learn all you need to make your ... in just 28 pages.
          <br />
          <br />
          It costs less than a movie ticket.
        </p>
      </slot>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: {
    Header,
  },
  created() {
    setTimeout(() => this.$router.push({ path: "/maxprofit" }), 8000);
  },
  mounted() {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1aE6Vy4h5PQwZ78h64RroCte3MYjylbSE";
  },
};
</script>

<style lang="scss" scoped>
</style>