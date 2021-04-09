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
            The One Book <br />
            that Every <br />
            Nigerian <br />
            Business <br />
            Owner needs <br />
            Immediately!
          </h1>

          <button
            class="bg-scale-green py-4 rounded-lg px-6 mt-8 sm:mt-12 focus:outline-none text-white text-sm lg:text-base xl:text-xl inter-font"
          >
            I WANT TO BUY IT NOW
          </button>
        </div>
        <div class="sm:w-5/12 mt-10 sm:mt-0">
          <img
            src="../assets/img/star.svg"
            alt=""
            class="absolute xl:w-28 w-20"
          />
          <img src="../assets/img/book-cover.png" alt="" />
        </div>
      </div>

      <div class="px-8 sm:px-12 lg:px-24 xl:px-52">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          Important both to those new in business or those who have been in
          business, as it contains direct action points that promise to deliver
          immediate tangible results in <br />
          <span class="font-semibold">
            securing and growing your business.
          </span>
        </p>
      </div>

      <!-- START OF CTA BUTTONS -->

      <div
        class="mx:auto sm:mt-16 xl:mt-20 text-center sm:text-center flex justify-center"
      >
        <button
          class="bg-scale-green py-4 rounded-lg px-6 mt-8 sm:mt-0 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
          @click="showmodal"
        >
          GET EBOOK NOW
        </button>
        <div class="">
          <modal v-show="isModalVisible" @close="closeModal" />
        </div>
      </div>
      <!-- END OF CTA BUTTONS -->

      <div class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex px-10">
        <div class="sm:w-7/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-body-text libre"
          >
            With the many challenges faced in business, one area a business
            owner cannot afford to be ignorant is the legal aspect.
            <br />
            <br />
            It can make the business grounded unexpectedly and for reasons that
            could easily have been resolved earlier.
            <br />
            <br />
            It could also mean that the business owner is making less money than
            should be made due to ignorance of certain benefits the business can
            access by the Law.
          </p>
          <div class="sm:mt-10 lg:mt-16 xl:mt-20 text-center sm:text-left">
            <button
              class="bg-scale-green py-4 rounded-lg px-5 mt-8 sm:mt-0 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
            >
              <a href="https://paystack.com/buy/boost-your-business-profit"
                >GET EBOOK NOW</a
              >
            </button>
          </div>
        </div>
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:w-5/12">
          <img src="../assets/img/chapter7.png" alt="book" />
        </div>
      </div>

      <div class="py-14 px-8 sm:px-12 lg:px-24 xl:px-52">
        <p
          class="text-center text-nav-text font-medium libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          In this book, the legal aspect of your business has
          <br class="hidden sm:block" />
          been explained in such a way that you will uncover
          <br class="hidden sm:block" />
          the legal steps that make certain businesses more <br />
          profitable than others.
        </p>
      </div>

      <div
        class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex justify-between px-10"
      >
        <div class="sm:w-6/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-body-text libre"
          >
            Many business owners shy away from the Law thinking it is just
            expensive and adds nothing to their business, but this is not true
            at all.
            <br />
            <br />
            The provisions of the Law are meant to give your business certain
            benefits. You will only miss out of this benefit due to ignorance of
            what they are and how to take advantage of them.
          </p>
        </div>
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:w-5/12">
          <img src="../assets/img/lawyer.svg" alt="lawyer" />
        </div>
      </div>

      <div
        class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex sm:justify-between px-10"
      >
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:mx-0 sm:w-5/12">
          <img src="../assets/img/chapter5.png" alt="chapter5" />
        </div>
        <div class="sm:w-6/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-body-text libre"
          >
            This book clearly explains the different aspects of the law and then
            the benefits that you can gain from them through appropriate steps
            which eventually end up in more profit for you as a business.
            <br />
            <br />
            There should be no room of guesswork or unnecessary mistakes in this
            aspect of your business, since it can be very costly.
            <br />
            <br />
            This is why we have made this book very affordable for all who seek
            one thing only: <span class="font-bold">RESULTS</span>.
          </p>
        </div>
      </div>
      <div class="mt-8 lg:mt-0 flex justify-center">
        <button
          class="bg-scale-green py-4 rounded-lg px-5 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
        >
          <a href="https://paystack.com/buy/boost-your-business-profit"
            >DOWNLOAD IT NOW</a
          >
        </button>
      </div>

      <div class="py-20 xl:py-24 px-8 sm:px-12 lg:px-24 xl:px-52">
        <p
          class="text-center text-nav-text font-medium libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          Set your business on a more secure, more
          <br class="hidden sm:block" />
          profitable and more successful path now.
        </p>
      </div>

      <div
        ref="bookcovers"
        class="lg:px-24 xl:px-36 sm:px-12 sm:flex sm:py-10 px-10"
      >
        <div class="sm:w-8/12">
          <h1
            class="text-center font-medium sm:text-left text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-nav-text libre"
          >
            What this Book Covers
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
              <p class="ml-4">
                The Choosing the most profitable legal structure specific to
                your business.
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
          </div>
        </div>
      </div>

      <div class="mt-14 xl:mt-20 sm:px-14 lg:px-24 xl:px-36 px-10">
        <h2
          class="text-center text-nav-text archivo-font text-xl sm:text-2xl lg:text-3xl xl:text-4xl sm:w-9/12 sm:mx-auto"
        >
          More Reasons Why You Should Read this
        </h2>
        <div
          class="sm:mt-8 mt-5 text-center libre text-body-text sm:w-9/12 sm:mx-auto"
        >
          <p class="sm:text-base text-sm xl:text-xl">
            Our books are not written just to give information. They
            <br class="hidden sm:block" />
            are designed to be practical and very result-oriented.
            <br />
            <br />
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
              class="text-body-text text-center mt-3 leading-tight text-xs lg:text-sm inter-font"
            >
              Understanding the legal steps in this book gives you advantages
              which others are unaware of or unable to utilise in maximising
              profit
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
              class="text-body-text text-center mt-3 leading-tight text-xs lg:text-sm inter-font"
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
              class="text-body-text text-center mt-3 leading-tight text-xs lg:text-sm inter-font"
            >
              This book takes into account the different stages of growth of
              your business and allow you to plan into the next phase in a legal
              and secure and scalable manner
            </p>
          </div>
        </div>
        <div class="mt-8 lg:mt-12 flex justify-center">
          <button
            class="bg-scale-green py-4 rounded-lg px-5 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
          >
            <a href="https://paystack.com/buy/boost-your-business-profit"
              >I WANT TO GET IT NOW</a
            >
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
