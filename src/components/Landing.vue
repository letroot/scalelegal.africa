<template>
  <div>
    <div class="xl:max-w-screen-2xl xl:mx-auto">
      <div class="pt-14 sm:pt-20 lg:pt-24 xl:pt-32 sm:pb-6 px-10 sm:px-8">
        <div>
          <h1
            class="text-center font-semibold text-3xl sm:text-5xl text-nav-text sm:w-3/4 sm:mx-auto circular-book lg:w-9/12 xl:w-8/12 lg:text-6xl lg:tracking-tight xl:text-7xl"
          >
            Make Your Business More Profitable, Secure and Investible
          </h1>
          <!-- <h4
            class="text-center text-sm sm:text-lg font-light text-nav-text sm:w-3/5 sm:mx-auto mt-4 sm:mt-6 sm:leading-tight lg:w-7/12 lg:mt-10 lg:text-3xl lg:font-normal inter-font"
          >
            Make Your Business More Profitable, More Secure and More Investible
          </h4> -->
        </div>
      </div>

      <div class="mt-14 sm:mt-20 lg:mt-36 sm:px-12 lg:px-24 xl:px-36">
        <div
          class="flex items-center flex-col sm:flex-row bg-bg sm:shadow-xl sm:rounded-xl px-6 sm:px-7 py-8"
        >
          <div class="relative mx-auto w-10/12 sm:w-5/12">
            <img src="../assets/img/slant-books.png" alt="book" />
            <img
              src="../assets/img/star.svg"
              alt="star"
              class="absolute inset-0 h-16 sm:h-16 lg:h-20 xl:h-24"
            />
          </div>
          <div class="w-10/12 mx-auto sm:w-7/12">
            <p
              class="text-white text-center sm:text-left text-base sm:text-2xl lg:text-3xl sm:w-3/4 sm:ml-12 mt-3 sm:mt-0 sm:leading-tight xl:text-4xl inter-font"
            >
              Within this 20 mins read, you will get practical understanding of
              how to approach the legal aspects of your business in a result
              oriented and profitable way.
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-20 sm:mt-32 lg:mt-48 sm:px-12 lg:px-24 xl:px-36 sm:flex px-10"
      >
        <div class="sm:w-7/12">
          <p
            class="text-center sm:text-left sm:text-base lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-body-text sm:leading-none inter-font"
          >
            Many business owner approach the legal aspect of their business with
            uncertainty and fear. They often imagine the law working against
            their business.
            <br />
            <br />
            But this is far from the truth.
            <br />
            <br />
            In this book, you will see the way to take advantage of the
            available legal processes and provisions that saves your business
            from losses and extra costs while making your business more
            profitable, secure and investible.
            <br />
            <br />
            You would see things you have been missing out on, because of
            certain provisions and aspects of the law you are unaware of.
            <br />
            <br />
            We are excited because we know your business will take a far more
            profitable path after reading this book.
          </p>
          <div class="sm:mt-16 xl:mt-20 text-center sm:text-left">
            <button
              class="bg-scale-green py-2 rounded-lg px-5 mt-8 sm:mt-0 focus:outline-none text-white lg:text-base xl:text-xl"
            >
              <a href="https://paystack.com/buy/boost-your-business-profit"
                >Buy eBook Now</a
              >
            </button>
            <button
              @click="scrollMeTo('bookcovers')"
              class="bg-nav-text py-2 rounded-lg px-5 ml-2 xl:ml-8 mt-8 sm:mt-0 focus:outline-none text-white lg:text-base xl:text-xl"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:w-5/12">
          <img src="../assets/img/book.png" alt="book" />
        </div>
      </div>

      <!-- <div class="sm:px-20 lg:mt-48 lg:px-24 xl:px-36 sm:mt-32 mt-10 px-10">
        <h2
          class="text-center text-gray-text archivo-font sm:text-xl xl:text-2xl uppercase"
        >
          scalelegal is trusted by
        </h2>
        <div
          class="mt-6 sm:mt-10 text-center archivo-font text-body-text sm:w-9/12 sm:mx-auto"
        >
          <p class="sm:text-base xl:text-xl text-sm">
            Trusted by more than 10 companies in various sectors. Our Team has
            over 10 years experience in corporate legal contexts.
          </p>
        </div>
      </div> -->

      <div
        ref="bookcovers"
        class="sm:mt-32 lg:mt-48 lg:px-24 xl:px-36 sm:px-12 sm:flex mt-20 px-10"
      >
        <div class="sm:w-7/12">
          <h1
            class="text-center font-semibold sm:text-left text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-nav-text"
          >
            What this <br class="hidden sm:block" />
            Book Covers
          </h1>
          <div
            class="sm:text-base lg:text-xl xl:text-2xl sm:w-11/12 mt-6 sm:mt-8 xl:mt-16 text-body-text sm:leading-tight inter-font"
          >
            <div class="flex leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">The right legal structure for your business</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">The role of share ownership and structuring</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">How to legally get financing for your business</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">Taxes that affect your business</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">
                Contracts that are necessary to protect your business
              </p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">The place of trademarks in your business</p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">
                How to approach potential conflicts and avoid undue court cases
                for your business
              </p>
            </div>
            <div class="mt-6 leading-none">
              <p class="">and much more...</p>
            </div>
          </div>
        </div>
        <div class="sm:w-5/12 mt-12 sm:mt-24 w-2/3 mx-auto">
          <img src="../assets/img/biblographile.svg" alt="book" class="" />
        </div>
      </div>

      <div class="sm:px-20 sm:mt-32 lg:mt-48 lg:px-24 xl:px-36 mt-20 px-10">
        <h2
          class="text-center text-nav-text archivo-font text-xl sm:text-3xl lg:text-4xl xl:text-5xl sm:w-9/12 sm:mx-auto"
        >
          Get this book and begin your step by step journey to turning your
          business into a more secure and profitable one
        </h2>
        <div
          class="sm:mt-8 lg:mt-12 xl:mt-16 mt-5 text-center archivo-font sm:w-9/12 sm:mx-auto"
        >
          <button
            class="bg-scale-green py-2 rounded-lg px-5 focus:outline-none text-white xl:text-2xl"
          >
            <a href="https://paystack.com/buy/boost-your-business-profit"
              >Download book now</a
            >
          </button>
        </div>
      </div>

      <div class="sm:px-14 sm:mt-32 lg:mt-48 lg:px-24 xl:px-36 mt-20 px-10">
        <h2
          class="text-center text-nav-text archivo-font text-xl sm:text-3xl lg:text-4xl xl:text-5xl sm:w-9/12 sm:mx-auto"
        >
          Why You Should Read this
        </h2>
        <div
          class="sm:mt-8 mt-5 text-center archivo-font text-body-text sm:w-9/12 sm:mx-auto"
        >
          <!-- <p class="sm:text-base text-sm xl:text-xl">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            <br class="hidden xl:block" />
            labore et dolore magna aliqua. Ut
          </p> -->
        </div>
        <div class="flex flex-col sm:flex-row mt-8 xl:mt-20 sm:mt-12">
          <div class="sm:w-1/3 flex flex-col px-3 lg:px-6 xl:px-8">
            <img
              src="../assets/img/growth.svg"
              alt="growth"
              class="sm:h-32 xl:h-48 h-48"
            />
            <h2
              class="text-lg text-nav-text sm:text-xl xl:text-3xl xl:mt-5 text-center"
            >
              More Profit
            </h2>
            <p
              class="text-body-text text-center mt-3 leading-tight text-sm xl:text-lg inter-font"
            >
              It’s a fact that those who understand the legal side of business
              usually make more profit by taking advantage of provisions of the
              law that allow them do more.
            </p>
          </div>
          <div
            class="sm:w-1/3 flex flex-col px-3 lg:px-6 xl:px-8 mt-10 sm:mt-0"
          >
            <img
              src="../assets/img/growth.svg"
              alt="growth"
              class="sm:h-32 h-48 xl:h-48"
            />
            <h2
              class="text-lg text-nav-text sm:text-xl xl:text-3xl xl:mt-5 text-center"
            >
              Less Losses
            </h2>
            <p
              class="text-body-text text-center mt-3 leading-tight text-sm xl:text-lg inter-font"
            >
              Whenever you’re ignorant of the major aspects of business you are
              likely to find yourself making mistakes that can be fatal to the
              business
            </p>
          </div>
          <div
            class="sm:w-1/3 flex flex-col px-3 lg:px-6 xl:px-8 mt-10 sm:mt-0"
          >
            <img
              src="../assets/img/growth.svg"
              alt="growth"
              class="sm:h-32 h-48 xl:h-48"
            />
            <h2
              class="text-lg text-nav-text sm:text-xl xl:text-3xl xl:mt-5 text-center"
            >
              More Strategic
            </h2>
            <p
              class="text-body-text text-center mt-3 leading-tight text-sm xl:text-lg inter-font"
            >
              With the understanding of the different aspects of the law and how
              it affects your business, you are able to frame a better strategy
              to grow your business and scale it
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="sm:px-20 sm:mt-32 lg:mt-48 lg:px-24 xl:px-36 px-10 mt-20">
        <h2
          class="text-center text-nav-text archivo-font text-xl sm:text-3xl lg:text-4xl xl:text-5xl sm:w-9/12 sm:mx-auto"
        >
          What Our Clients Think
        </h2>
        <div
          class="sm:mt-8 mt-5 text-center archivo-font text-body-text sm:text-xl sm:w-9/12 sm:mx-auto"
        >
          <p class="sm:text-base text-sm xl:text-xl">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            <br class="hidden xl:block" />
            labore et dolore magna aliqua. Ut
          </p>
        </div>
        <div class="flex flex-wrap sm:mt-16 xl:mt-24 mt-12">
          <div
            class="rounded-md w-2/3 sm:w-5/12 xl:w-1/5 shadow-xl px-4 pb-5 lg:py-10 mx-auto bg-client-bg"
          >
            <div
              class="border-2 border-profile-border rounded-full w-12 h-12 xl:w-16 xl:h-16 -mt-6 xl:-mt-16 bg-white mx-auto"
            ></div>
            <p class="text-xs xl:text-sm text-center text-white mt-4">
              AutoCare is my go to for all my car maintenance. I’ve saved a lot
              of money that I would have lost at a mechanic’s shop.
            </p>
            <h3 class="text-profile-border text-sm text-center mt-2">
              - Peter A.
            </h3>
          </div>
          <div
            class="rounded-md w-2/3 sm:w-5/12 xl:w-1/5 shadow-xl px-4 pb-5 lg:py-10 mx-auto bg-client-bg mt-14 sm:mt-0"
          >
            <div
              class="border-2 border-profile-border rounded-full w-12 h-12 xl:w-16 xl:h-16 -mt-6 xl:-mt-16 bg-white mx-auto"
            ></div>
            <p class="text-xs xl:text-sm text-center text-white mt-4">
              AutoCare is my go to for all my car maintenance. I’ve saved a lot
              of money that I would have lost at a mechanic’s shop.
            </p>
            <h3 class="text-profile-border text-sm text-center mt-2">
              - Peter A.
            </h3>
          </div>
          <div
            class="rounded-md w-2/3 sm:w-5/12 xl:w-1/5 shadow-xl px-4 pb-5 lg:py-10 mx-auto bg-client-bg mt-14 sm:mt-12 xl:mt-0"
          >
            <div
              class="border-2 border-profile-border rounded-full w-12 h-12 xl:w-16 xl:h-16 -mt-6 xl:-mt-16 bg-white mx-auto"
            ></div>
            <p class="text-xs xl:text-sm text-center text-white mt-4">
              AutoCare is my go to for all my car maintenance. I’ve saved a lot
              of money that I would have lost at a mechanic’s shop.
            </p>
            <h3 class="text-profile-border text-sm text-center mt-2">
              - Peter A.
            </h3>
          </div>
          <div
            class="rounded-md w-2/3 sm:w-5/12 xl:w-1/5 shadow-xl px-4 pb-5 lg:py-10 mx-auto bg-client-bg mt-14 sm:mt-12 xl:mt-0"
          >
            <div
              class="border-2 border-profile-border rounded-full w-12 h-12 xl:w-16 xl:h-16 -mt-6 xl:-mt-16 bg-white mx-auto"
            ></div>
            <p class="text-xs xl:text-sm text-center text-white mt-4">
              AutoCare is my go to for all my car maintenance. I’ve saved a lot
              of money that I would have lost at a mechanic’s shop.
            </p>
            <h3 class="text-profile-border text-sm text-center mt-2">
              - Peter A.
            </h3>
          </div>
        </div>
      </div> -->

      <div class="sm:px-20 lg:mt-24 lg:px-24 xl:px-36 px-10 mt-20">
        <h2
          class="text-center text-nav-text archivo-font text-xl sm:text-3xl lg:text-4xl xl:text-5xl sm:w-9/12 sm:mx-auto"
        >
          For just NGN 1,500
        </h2>
        <p
          class="sm:mt-8 mt-5 text-sm xl:text-xl text-center inter-font text-body-text sm:text-lg sm:w-9/12 sm:mx-auto leading-tight"
        >
          Don't miss the chance to change the prospect of your
          <br class="hidden xl:block" />
          business permanently for the price of a movie ticket.
        </p>
        <div
          class="sm:mt-8 lg:mt-12 mt-5 text-center archivo-font sm:w-9/12 sm:mx-auto"
        >
          <button
            class="bg-scale-green py-2 rounded-lg px-5 focus:outline-none text-white xl:text-2xl"
          >
            <a href="https://paystack.com/buy/boost-your-business-profit"
              >I want to read the book
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
