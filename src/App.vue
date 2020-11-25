<template>
  <div id="app" class="bg-bg">
    <Header />

    <div class="sm:pt-20 lg:pt-24 xl:pt-32 sm:pb-6 sm:px-8">
      <div>
        <h1
          class="sm:text-center sm:text-5xl xl:text-6xl text-nav-text sm:w-3/4 lg:w-7/12 xl:w-6/12 sm:mx-auto archivo"
        >
          Everything you need to know to scale your business
        </h1>
        <h4
          class="sm:text-center sm:text-lg font-thin text-nav-text sm:w-3/5 lg:w-5/12 xl:w-4/12 sm:mx-auto sm:mt-6 xl:mt-8 sm:leading-tight"
        >
          Writen by legal and business experts, this short ebook goes into
          detail lorem ipsum dolor
        </h4>
      </div>
      <div class="sm:flex sm:justify-center sm:mt-16">
        <input
          type="text"
          class="border-2 border-nav-text rounded-lg sm:w-2/4 lg:w-5/12 xl:w-4/12 sm:py-2 sm:px-3 focus:outline-none"
          placeholder="Enter your email address"
        />
        <button
          class="bg-nav-text sm:py-2 rounded-lg sm:px-5 sm:ml-3 focus:outline-none text-white"
        >
          Get eBook
        </button>
      </div>
    </div>

    <div class="sm:mt-16 lg:mt-24 sm:px-10 sm:flex">
      <div class="sm:w-1/2">
        <img src="./assets/img/book.png" alt="book" />
      </div>
      <div class="sm:w-1/2">
        <p
          class="sm:text-2xl lg:text-4xl xl:text-5xl sm:w-3/4 sm:ml-12 sm:mt-16 lg:mt-32 text-nav-text sm:leading-tight archivo"
        >
          The 20-page Book <br class="hidden sm:block" />
          will Transform your Business in 25 mins of Reading Time.
        </p>
      </div>
    </div>

    <div class="bg-white sm:px-20 sm:py-12">
      <h2 class="text-center archivo text-xl">Trusted by</h2>
      <div class="sm:flex sm:items-center sm:justify-around sm:mt-10">
        <img src="./assets/img/500chow.svg" class="sm:h-16" alt="500chow">
        <img src="./assets/img/cheapmedia.svg" class="sm:h-8" alt="cheapmedia">
      </div>
    </div>

  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style src="./assets/css/tailwind.css"></style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo&display=swap");

.archivo {
  font-family: "Archivo", sans-serif;
}
</style>
