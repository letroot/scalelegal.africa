<template>
  <div
    class="sm:px-10 xl:px-16 sm:py-8 sm:flex p-4 sm:items-center sm:justify-between xl:max-w-screen-2xl xl:mx-auto"
  >
    <div
      class="flex justify-between items-center sm:w-4/12 lg:w-5/12 xl:w-6/12"
    >
      <div class="w-6/12 sm:w-full">
        <img src="../assets/img/logo.svg" alt="logo" class="sm:h-12 xl:h-16" />
      </div>
      <button class="focus:outline-none sm:hidden" @click="toggle">
        <img
          src="../assets/img/close.svg"
          alt="logo"
          class="h-8 p-1"
          v-if="isopen"
        />
        <img src="../assets/img/menu.svg" alt="logo" class="h-5" v-else />
      </button>
    </div>

    <div
      class="w-11/12 bg-white absolute sm:relative sm:w-8/12 lg:w-7/12 xl:w-7/12 sm:flex sm:flex-row sm:justify-between sm:items-center p-4 sm:p-0 flex flex-col text-right"
      :class="{ hidden: !isopen, flex: isopen }"
    >
      <a
        href="https://scalelegal.africa/services"
        class="sm:text-xs xl:text-base xl:leading-none text-nav-text"
        >Our Services</a
      >
      <a
        href="https://scalelegal.africa/expertise"
        class="sm:text-xs xl:text-base xl:leading-none text-nav-text mt-4 sm:mt-0"
        >Expertise</a
      >
      <a
        href="https://scalelegal.africa/team"
        class="sm:text-xs xl:text-base xl:leading-none text-nav-text mt-4 sm:mt-0"
        >The Team</a
      >
      <a
        href="https://blog.scalelegal.africa/"
        class="sm:text-xs xl:text-base xl:leading-none text-nav-text mt-4 sm:mt-0"
        >Blog</a
      >
      <a
        href="https://paystack.com/buy/boost-your-business-profit"
        class="sm:text-xs xl:text-base xl:leading-none text-nav-text mt-4 sm:mt-0"
        ><button
          class="border border-nav-text rounded-xl py-2 sm:py-3 px-3 focus:outline-none"
        >
          Download book
        </button></a
      >
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
