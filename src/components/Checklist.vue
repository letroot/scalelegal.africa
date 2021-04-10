<template>
  <div>
    <Header />
    <div class="xl:max-w-screen-2xl xl:mx-auto">
      <div
        class="py-14 sm:py-20 lg:py-16 xl:py-32 xl:px-28 lg:px-20 px-8 sm:px-16 flex justify-between"
      >
        <div class="w-6/12 sm:w-6/12">
          <h1
            class="xl:leading-tight font-medium text-xs sm:text-2xl text-nav-text lg:text-4xl lg:tracking-tight xl:text-5xl uppercase libre"
          >
            The Most <br />
            <span class="font-semibold">
              Important <br />
              Checklist
            </span>
            <br />
            to keep your <br />
            business legally <br />
            <span class="font-semibold">
              Secure & increase <br />
              your profitability
            </span>
          </h1>

          <router-link to="/checklist/upsell">
            <button
              class="bg-scale-green py-2 sm:py-4 rounded-lg px-3 sm:px-6 mt-5 sm:mt-12 focus:outline-none text-white text-xs lg:text-base xl:text-xl inter-font"
            >
              DOWNLOAD FOR FREE
            </button>
          </router-link>
        </div>
        <div class="w-6/12">
          <img src="../assets/img/checklist.png" alt="" />
        </div>
      </div>

      <div class="px-8 sm:px-12 lg:px-24 xl:px-52">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          <span class="font-semibold">The Maximum Profit Legal Checklist</span>
          is designed to help business owners address the legal questions and
          doubts that they are aware and unaware of, and that have the potential
          to make or mar the business’ growth and profit.
        </p>
      </div>

      <div
        class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex justify-between px-10"
      >
        <div class="sm:w-6/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-body-text libre"
          >
            As a business owner, your number one focus is
            <span class="font-semibold">making profit</span> that covers your
            needs and that of the business.
            <br />
            <br />
            No business owner wants a situation where their business becomes
            stranded because of certain areas where they are defaulting.
            <br />
            <br />
            Nor do they want to not be making as much money because of ignorance
            of things they should be doing.
          </p>
        </div>
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:w-5/12">
          <img src="../assets/img/lawyer.svg" alt="lawyer" />
        </div>
      </div>

      <div class="px-8 sm:px-12 lg:px-24 xl:px-52 mt-14 sm:mt-28">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          This is why we at ScaleLegal have created this very easy-to-use
          Checklist that addresses every major category of your business that
          not only guarantees the security of the business but also
          <span class="font-semibold">
            ensures its profitability in the long run.
          </span>
        </p>
        <div class="sm:mt-10 lg:mt-16 xl:mt-20 mt-8 flex justify-center">
          <router-link to="/checklist/upsell">
            <button
              class="bg-scale-green py-4 rounded-lg px-6 focus:outline-none text-white text-sm lg:text-base xl:text-xl inter-font"
            >
              GET EBOOK NOW
            </button>
          </router-link>
        </div>
      </div>

      <div
        ref="bookcovers"
        class="lg:px-24 xl:px-36 sm:px-12 sm:flex sm:py-16 px-10 xl:py-36 py-12 items-center relative"
      >
        <div class="sm:w-8/12">
          <h1
            class="text-center font-medium sm:text-left text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-nav-text libre"
          >
            The different categories covered in this checklist include:
          </h1>
          <div
            class="sm:text-base lg:text-xl xl:text-2xl sm:w-11/12 mt-6 sm:mt-8 xl:mt-16 text-body-text sm:leading-tight libre"
          >
            <div class="flex leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">Business structure</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">Contracts and Agreement</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">Taxation</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">Share structure</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">Trademark</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">Intellectual Property</p>
            </div>
            <div class="flex mt-6 leading-none">
              <p class="">and more...</p>
            </div>
          </div>
        </div>
        <div
          class="absolute right-0 xl:right-28 xl:top-56 top-40 hidden sm:block"
        >
          <img
            src="../assets/img/in-progress.svg"
            alt=""
            class="xl:w-10/12 w-8/12 lg:float-none sm:float-right"
          />
        </div>
      </div>

      <div
        class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex sm:justify-between px-10"
      >
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:mx-0 sm:w-6/12">
          <img src="../assets/img/checklist2.png" alt="checklist" />
        </div>
        <div class="sm:w-5/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-body-text libre"
          >
            The checklist covers only 2 pages of the book, such that you can
            apply it in <span class="font-semibold">under 5 minutes</span>.
            <br />
            <br />
            The Checklist is also reusable on a monthly or yearly basis as the
            need may arise.
          </p>
          <div class="mt-8 sm:mt-16 flex justify-center sm:justify-start">
            <router-link to="/checklist/upsell">
              <button
                class="bg-scale-green py-4 rounded-lg px-6 focus:outline-none text-white text-sm lg:text-base xl:text-xl inter-font"
              >
                DOWNLOAD IT NOW
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="px-8 sm:px-12 lg:px-24 xl:px-52 py-10">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          Our team of entrepreneurially minded and experienced lawyers, headed
          by <span class="font-semibold">Olusegun Oyesanya</span> and
          <span class="font-semibold">Akinwunmi Akinbile</span>, have devoted
          several years to attending to the legal issues and challenges of
          entrepreneurs in Nigeria. <br />
          <br />
          And have come to know how best to give direction to businesses that
          seek to last as well as thrive in Nigeria.
        </p>
      </div>

      <div
        class="sm:mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex sm:justify-between px-10"
      >
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:mx-0 sm:w-6/12">
          <img src="../assets/img/checklist3.png" alt="checklist" />
        </div>
        <div class="sm:w-5/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-body-text libre"
          >
            Out of this experience and concern was born the
            <span class="font-semibold">Maximum Profit Legal Checklist</span>
            and its complementary ₦1,000 ebook:
            <span class="font-semibold">
              “Legal Guide for a Maximum Profit Business'' </span
            >, which are now considered necessary handbooks for all business
            owners in Nigeria.
          </p>
          <div class="mt-8 sm:mt-16 flex justify-center sm:justify-start">
            <router-link to="/checklist/upsell">
              <button
                class="bg-scale-green py-4 rounded-lg px-6 focus:outline-none text-white text-sm lg:text-base xl:text-xl inter-font"
              >
                DOWNLOAD IT NOW
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="py-20 xl:py-24 px-8 sm:px-12 lg:px-24 xl:px-52">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          Don't just take our word for it,
          <span class="font-semibold"
            >hear from other <br class="hidden sm:block" />
            business owners</span
          >
          who have benefitted a whole <br class="hidden sm:block" />
          lot from this book.
        </p>
      </div>

      <div
        class="px-10 lg:px-0 flex justify-center flex-wrap xl:space-x-16 lg:space-x-10"
      >
        <div
          class="sm:w-5/12 lg:w-3/12 shadow-xl rounded-xl px-10 sm:px-6 lg:px-5 py-8 libre"
        >
          <img src="../assets/img/red500.svg" alt="" class="w-14" />
          <p class="mt-5 text-sm lg:text-xs xl:text-base">
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Proin eget tortor risus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus.
          </p>
          <div class="flex items-center space-x-3 mt-5">
            <div
              class="border-2 border-profile-border w-9 sm:w-12 h-9 sm:h-12 rounded-full"
            ></div>
            <p class="text-sm xl:text-base">
              Ose Iyoke, <span class="font-semibold">Cofounder</span>
            </p>
          </div>
        </div>

        <div
          class="mt-10 sm:mt-0 sm:w-5/12 lg:w-3/12 shadow-xl rounded-xl px-10 sm:px-6 lg:px-5 py-8 libre sm:ml-14"
        >
          <img src="../assets/img/tiedywears.svg" alt="" class="w-28" />
          <p class="mt-5 text-sm lg:text-xs xl:text-base">
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Proin eget tortor risus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus.
          </p>
          <div class="flex items-center space-x-3 mt-5">
            <div
              class="border-2 border-profile-border w-9 sm:w-12 h-9 sm:h-12 rounded-full"
            ></div>
            <p class="text-sm xl:text-base">
              Dolapo Suleiman, <span class="font-semibold">CEO</span>
            </p>
          </div>
        </div>

        <div
          class="mt-10 lg:mt-0 sm:w-5/12 lg:w-3/12 shadow-xl rounded-xl px-10 sm:px-6 lg:px-5 py-8 libre"
        >
          <img src="../assets/img/cheapmedia2.svg" alt="" class="w-36" />
          <p class="mt-7 text-sm lg:text-xs xl:text-base">
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Proin eget tortor risus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus.
          </p>
          <div class="flex items-center space-x-3 mt-5">
            <div
              class="border-2 border-profile-border w-9 sm:w-12 h-9 sm:h-12 rounded-full"
            ></div>
            <p class="text-sm xl:text-base">
              Oladayo O, <span class="font-semibold">COO</span>
            </p>
          </div>
        </div>
      </div>

      <div class="px-8 sm:px-12 lg:px-24 xl:px-52 mt-28">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          Download the ebook now and take the guesswork out of the legal part of
          your business
          <span class="font-semibold">for FREE</span>
        </p>
        <div class="sm:mt-10 lg:mt-16 xl:mt-20 mt-8 flex justify-center">
          <button
            class="bg-scale-green py-4 rounded-lg px-6 focus:outline-none text-white text-sm lg:text-base xl:text-xl inter-font"
          >
            DOWNLOAD IT NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  metaInfo: {
    title: "Publications :: ScaleLegal Africa",
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700&display=swap");

.inter-font {
  font-family: "Inter", sans-serif;
}
</style>
