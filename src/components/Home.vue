<template>
  <div>
    <div
      class="sm:px-10 xl:px-16 sm:py-8 sm:flex p-4 sm:items-center sm:justify-between xl:mx-auto bg-nav-text"
    >
      <div
        class="flex justify-between items-center sm:w-4/12 lg:w-5/12 xl:w-6/12"
      >
        <div class="w-6/12 sm:w-full">
          <img
            src="../assets/img/white-logo.svg"
            alt="logo"
            class="sm:h-12 xl:h-16"
          />
        </div>
        <button class="focus:outline-none sm:hidden" @click="toggle">
          <img
            src="../assets/img/white-close.svg"
            alt="logo"
            class="h-8 p-1"
            v-if="isopen"
          />
          <img
            src="../assets/img/white-menu.svg"
            alt="logo"
            class="h-5"
            v-else
          />
        </button>
      </div>

      <div
        class="w-11/12 bg-white sm:bg-nav-text absolute sm:relative sm:w-8/12 lg:w-7/12 xl:w-7/12 sm:flex sm:flex-row sm:justify-between sm:items-center p-4 sm:p-0 flex flex-col text-right border sm:border-0 border-nav-text"
        :class="{ hidden: !isopen, flex: isopen }"
      >
        <a
          href="https://scalelegal.africa/services"
          class="sm:text-xs xl:text-base xl:leading-none text-nav-text sm:text-white"
          >Our Services</a
        >
        <a
          href="https://scalelegal.africa/expertise"
          class="sm:text-xs xl:text-base xl:leading-none text-nav-text sm:text-white mt-4 sm:mt-0"
          >Expertise</a
        >
        <a
          href="https://scalelegal.africa/team"
          class="sm:text-xs xl:text-base xl:leading-none text-nav-text sm:text-white mt-4 sm:mt-0"
          >The Team</a
        >
        <a
          href="https://blog.scalelegal.africa/"
          class="sm:text-xs xl:text-base xl:leading-none text-nav-text sm:text-white mt-4 sm:mt-0"
          >Blog</a
        >
        <a
          href="https://scalelegal.africa/about"
          class="sm:text-xs xl:text-base xl:leading-none text-nav-text sm:text-white mt-4 sm:mt-0"
          >About</a
        >
      </div>
    </div>
    <div class="bg-nav-text px-7">
      <hr class="hidden sm:block" />
    </div>
    <div
      class="px-10 sm:px-20 lg:px-28 xl:px-36 py-16 sm:py-24 lg:py-32 xl:py-44 bg-nav-text text-white"
    >
      <p class="font-light libre uppercase lg:text-xl xl:text-2xl">
        Get Our Books
      </p>
      <h1
        class="text-3xl lg:text-5xl xl:text-6xl libre font-light mt-2 sm:w-8/12"
      >
        Designed to Secure your Business and Grow your Profilt
      </h1>
      <p class="mt-5 sm:mt-8 inter-font sm:text-xl lg:text-2xl xl:text-3xl">
        Secure and scale your business with our <br class="hidden sm:block" />
        trusted and result-oriented legal <br class="hidden sm:block" />
        information packs.
      </p>
    </div>

    <div
      class="py-14 sm:py-20 lg:py-16 xl:py-32 xl:px-52 lg:px-20 px-10 sm:px-16"
    >
      <div class="flex flex-col sm:flex-row justify-center sm:items-end">
        <div class="sm:w-6/12 mt-10 sm:mt-0">
          <img src="../assets/img/checklist.png" alt="" />
        </div>
        <div class="sm:w-6/12 lg:mb-24 mb-16">
          <h1
            class="font-medium text-2xl text-nav-text lg:text-4xl lg:tracking-tight xl:text-5xl libre sm:w-10/12"
          >
            Get a FREE Checklist that ensures your business is legally compliant
            for growth
          </h1>
          <router-link to="/checklist">
            <button
              class="bg-scale-green py-4 rounded-lg px-6 mt-8 focus:outline-none text-white text-sm lg:text-base xl:text-xl inter-font"
            >
              DOWNLOAD FOR FREE
            </button>
          </router-link>
        </div>
      </div>

      <div
        class="flex flex-col sm:flex-row justify-center sm:items-end sm:mt-5"
      >
        <div class="sm:w-6/12 mt-10 sm:mt-0">
          <img src="../assets/img/book-cover.png" alt="" />
        </div>
        <div class="sm:w-6/12 lg:mb-24 mb-16">
          <h1
            class="font-medium text-2xl text-nav-text lg:text-4xl lg:tracking-tight xl:text-5xl libre sm:w-10/12"
          >
            The Definitive Guide to building a maximum profit business that is
            legally compliant
          </h1>
          <router-link to="/maxprofit">
            <button
              class="bg-scale-green py-4 rounded-lg px-6 mt-8 focus:outline-none text-white text-sm lg:text-base xl:text-xl inter-font"
            >
              I WANT TO BUY IT NOW
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isopen: false,
    };
  },
  methods: {
    toggle() {
      this.isopen = !this.isopen;
    },
  },
};
</script>

<style lang="scss" scoped></style>
