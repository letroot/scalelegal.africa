<template>
  <div>
    <Header />
    <div class="xl:max-w-screen-2xl xl:mx-auto">
      <div
        class="py-14 sm:py-20 lg:py-16 xl:py-32 xl:px-28 lg:px-20 px-10 sm:px-16 flex flex-col sm:flex-row justify-between"
      >
        <div class="sm:w-6/12">
          <h1
            class="font-medium text-3xl sm:text-4xl text-nav-text lg:text-5xl lg:tracking-tight xl:text-7xl uppercase libre"
          >
            Want to make <br />
            your Business <br />
            <span class="font-bold"
              >more <br />
              Profitable</span
            >
            <br />
            than it is now?
          </h1>
          <p
            class="text-xl text-nav-text mt-4 sm:mt-6 sm:leading-tight lg:mt-10 lg:text-3xl libre"
          >
            Then you need this book!
          </p>
          <button
            class="bg-scale-green py-4 rounded-lg px-6 mt-8 focus:outline-none text-white text-sm lg:text-base xl:text-xl inter-font"
          >
            I WANT TO BUY IT NOW
          </button>
        </div>
        <div class="sm:w-5/12 mt-10 sm:mt-0">
          <img src="../assets/img/book-cover.png" alt="" />
        </div>
      </div>

      <div class="mt-12 sm:mt-20 lg:mt-36 sm:px-12 lg:px-24 xl:px-36">
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
              This book is designed to give you the exact same results that they
              get in just 28 colourful pages and within 20 minutes of reading
              time.
            </p>
          </div>
        </div>
      </div>

      <!-- START OF CTA BUTTONS -->

      <div
        class="mx:auto sm:mt-16 xl:mt-20 text-center sm:text-center flex justify-center"
      >
        <button
          class="bg-scale-green py-4 rounded-lg px-6 mt-8 sm:mt-0 focus:outline-none text-white lg:text-base xl:text-xl"
          @click="showmodal"
        >
          Buy eBook Now
        </button>
        <div class="">
          <modal v-show="isModalVisible" @close="closeModal" />
        </div>
        <button
          @click="scrollMeTo('bookcovers')"
          class="bg-nav-text py-4 rounded-lg px-6 ml-8 mt-8 sm:mt-0 focus:outline-none text-white lg:text-base xl:text-xl"
        >
          Learn More
        </button>
      </div>
      <!-- END OF CTA BUTTONS -->

      <div class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex px-10">
        <div class="sm:w-7/12">
          <p
            class="text-center sm:text-left sm:text-base lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-body-text sm:leading-none inter-font"
          >
            In this book, the legal aspect of your business has been explained
            in such a way that you will uncover the legal steps that make
            certain businesses more profitable than others. This is why we have
            made this book very affordable for all who seek one thing only:
            RESULTS. Many business owners approach the legal aspect of their
            business with uncertainty and fear. They often imagine the law
            working against their business.
            <br />
            <br />
            But this is far from the truth.
            <br />
            <br />
            Many business owners shy away from the LAw thinking it is just
            expensive and adds nothing to their business, but this is not true
            at all. The provisions of the Law are meant to give your business
            certain benefits.
            <br />
            <br />
            You will only miss out of this benefit due to ignorance of what they
            are and how to take advantage of them. This book clearly explains
            the different aspects of the law and then the benefits that you can
            gain from them through appropriate steps which eventually end up in
            more profit for you as a business.
            <br />
            <br />
            There should be no room of guesswork or unnecessary mistakes in this
            aspect of your business, since it can be very costly.
            <br />
            <br />
            Set your business on a more secure, more profitable and more
            successful path now.
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
              <p class="ml-4">
                Choosing the most profitable legal structure specific to your
                business.
              </p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">
                Mastering share ownership and structuring to give your business
                financing and hiring advantages.
              </p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">
                Getting financing for your business whilst protecting your
                interest.
              </p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">
                Handling taxes to ensure business growth and profit.
              </p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">
                Contracts that are necessary to protect and scale your business.
              </p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">
                The role of trademarks in preserving and increasing your
                business’ profit.
              </p>
            </div>
            <div class="flex mt-6 leading-none">
              <img
                src="../assets/img/bullet.svg"
                alt="bullet"
                class="mt-1 h-2 sm:h-3"
              />
              <p class="ml-4">
                Securing your business from or during potential conflicts and
                court cases.
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
          Get ALL these and more at the very cheap price of NGN1500 and your
          business will thank you for it forever.
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
          <p class="sm:text-base text-sm xl:text-xl">
            Our books are not written just to give information. They are
            designed <br class="hidden xl:block" />
            to be practical and very result-oriented.
            <br class="hidden xl:block" />

            Here are the results we are certain you will get:
          </p>
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
              Our books are not written just to give information. They are
              designed to be practical and very result-oriented. <br />
              Here are the results we are certain you will get.
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
              Fewer Losses
            </h2>
            <p
              class="text-body-text text-center mt-3 leading-tight text-sm xl:text-lg inter-font"
            >
              Costly mistakes and terrible losses, which may sometimes be
              irreversible, have been made due ignorance of simple processes
              that should have even made the business more money.
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
              This book takes into account the different stages of growth of
              your business and allows you to plan into the next phase in a
              legal and secure and scalable manner.
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
import Modal from "./Modal.vue";
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Modal,
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
    showmodal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
