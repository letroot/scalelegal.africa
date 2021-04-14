<template>
  <div>
    <Header />
    <div class="xl:max-w-screen-2xl xl:mx-auto">
      <div class="sm:px-10 xl:px-56 mt-12 xl:mt-16" :class="{ hidden: closed }">
        <div
          class="bg-client-bg px-6 sm:px-10 py-10 sm:rounded-xl shadow-xl flex flex-col sm:flex-row justify-around items-center relative"
        >
          <img
            src="../assets/img/close.svg"
            alt=""
            class="absolute right-10 top-10 lg:h-6"
            @click="close"
          />
          <div class="sm:w-5/12 w-7/12">
            <img src="../assets/img/stack.png" alt="" class="" />
          </div>
          <div
            class="text-white inter-font w-11/12 sm:w-6/12 mt-5 sm:mt-0 text-center sm:text-left"
          >
            <h1
              class="font-medium text-sm sm:text-base lg:text-2xl xl:text-3xl"
            >
              Thank you for downloading <br />
              <span class="font-semibold">The Maximum Profit Checklist</span>
            </h1>
            <p class="italic mt-4 text-xs lg:text-base">
              Your download should begin shortly...
            </p>
            <p class="text-xs sm:text-sm lg:text-lg mt-7 font-medium">
              Before you go, we think you should consider getting this
              complimentary book. It will give you step by step action points on
              how to ensure your business is fully legally compliant for the
              growth and maximum profit it deserves.
            </p>
          </div>
        </div>
      </div>

      <div
        class="py-14 sm:py-20 lg:py-16 xl:py-32 xl:px-28 lg:px-20 px-6 sm:px-16 flex items-center justify-between space-x-2"
      >
        <div class="w-5/12 sm:w-6/12">
          <h1
            class="font-medium text-sm sm:text-3xl text-nav-text lg:text-5xl lg:tracking-tight xl:text-6xl uppercase libre"
          >
            <span class="font-semibold">build a maximum profit business</span>
            that is legally compliant with just
            <span class="font-semibold">10 simple action points</span>
          </h1>

          <a href="https://paystack.com/buy/max-profit">
            <button
              class="bg-scale-green py-2 sm:py-4 rounded-lg px-4 sm:px-6 mt-5 sm:mt-6 lg:mt-16 xl:mt-20 focus:outline-none text-white text-xs lg:text-base xl:text-xl inter-font"
            >
              I WANT TO BUY IT NOW
            </button>
          </a>
        </div>
        <div class="w-7/12 sm:w-6/12">
          <img
            src="../assets/img/star.svg"
            alt=""
            class="absolute xl:w-28 sm:w-20 w-8"
          />
          <img src="../assets/img/max-profit.png" alt="" class="" />
        </div>
      </div>

      <div class="px-8 sm:px-12 lg:px-24 xl:px-52">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl sm:w-9/12 mx-auto"
        >
          Get
          <span class="font-semibold">guaranteed tangible results</span> by
          following each action point whether you are about to start business,
          new to it or already been in it for a while
        </p>
      </div>

      <!-- START OF CTA BUTTONS -->

      <div
        class="mx:auto sm:mt-8 lg:mt-16 xl:mt-20 text-center sm:text-center flex justify-center"
      >
        <a href="https://paystack.com/buy/max-profit">
          <button
            class="bg-scale-green py-4 rounded-lg px-6 mt-8 sm:mt-0 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
          >
            GET EBOOK NOW
          </button>
        </a>
      </div>
      <!-- END OF CTA BUTTONS -->

      <div class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex px-10">
        <div class="sm:w-7/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-nav-text libre"
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
              <a href="https://paystack.com/buy/max-profit">GET EBOOK NOW</a>
            </button>
          </div>
        </div>
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:w-5/12">
          <img src="../assets/img/chapter7.png" alt="book" />
        </div>
      </div>

      <div class="py-14 px-8 sm:px-12 lg:px-24 xl:px-52 mt-10 lg:mt-20">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          This book, the
          <span class="font-semibold"
            >Legal Guide to a Maximum Profit Business</span
          >, resolves the question, doubts, issues and problems commonly faced
          at different cycles of one's business.
        </p>
      </div>

      <div
        class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex justify-between px-10"
      >
        <div class="sm:w-6/12 flex flex-col justify-between">
          <p
            class="text-center sm:text-left lg:text-2xl xl:text-3xl sm:w-11/12 sm:mt-8 lg:mt-10 text-nav-text libre"
          >
            It prepares the business owner ahead of the challenges that all
            businesses are bound to face now and in the coming days without
            simple concise and direct answers to otherwise difficult problems.
          </p>
          <div class="text-center sm:text-left">
            <button
              class="bg-scale-green py-4 rounded-lg px-5 mt-8 sm:mt-0 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
            >
              <a href="https://paystack.com/buy/max-profit">GET EBOOK NOW</a>
            </button>
          </div>
        </div>
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:w-5/12">
          <img src="../assets/img/lawyer.svg" alt="lawyer" />
        </div>
      </div>

      <div
        ref="bookcovers"
        class="lg:px-24 xl:px-36 sm:px-12 sm:flex sm:py-10 px-10 mt-10 lg:mt-20"
      >
        <div class="">
          <h1
            class="text-center font-medium sm:text-left text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-nav-text libre"
          >
            Areas covered in this easy to read book:
          </h1>
          <div
            class="sm:text-base lg:text-xl xl:text-2xl sm:w-11/12 mt-6 sm:mt-8 xl:mt-16 text-nav-text sm:leading-tight libre"
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
      </div>

      <div
        class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex sm:justify-between px-10"
      >
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:mx-0 sm:w-5/12">
          <img src="../assets/img/chapter5.png" alt="chapter5" />
        </div>
        <div class="sm:w-6/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-nav-text libre"
          >
            This book is just 27 pages and easy to read and reference based on
            the specific area of need that you may have as a business owner.
            There are action points that can be easily acted on immediately as
            you read to see tangible results in your business.
            <br />
            <br />
            To ensure this material and the bonuses in it are only available to
            serious minded business owners who are committed to building
            business we can work with for several years, we are putting a price
            of <span class="font-medium">NGN 1,000</span> to deter those who are
            simply interested in freebies.
          </p>
        </div>
      </div>

      <div class="py-20 xl:py-24 px-8 sm:px-12 lg:px-24 xl:px-52">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          For the serious minded who are ready to build solid and long lasting
          business, buying this book will give you the added privilege of
          <span class="font-semibold">
            one free legal consultation session
          </span>
          accessible with the email used to make this purchase.
        </p>
        <div class="flex justify-center mt-10">
          <button
            class="bg-scale-green py-4 rounded-lg px-5 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
          >
            <a href="https://paystack.com/buy/max-profit">DOWNLOAD IT NOW</a>
          </button>
        </div>
      </div>

      <div class="px-8 sm:px-12 lg:px-24 xl:px-52 py-10 mt-10">
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
        class="mt-20 sm:px-12 lg:px-24 xl:px-36 sm:flex sm:justify-between px-10"
      >
        <div class="mt-8 mr-7 sm:mr-0 sm:mt-0 w-9/12 mx-auto sm:mx-0 sm:w-5/12">
          <img src="../assets/img/chapter2.png" alt="chapter5" />
        </div>
        <div class="sm:w-6/12">
          <p
            class="text-center sm:text-left lg:text-xl xl:text-2xl sm:w-11/12 sm:mt-8 lg:mt-10 text-nav-text libre"
          >
            Out of this experience and concern was born this NGN 1000 ebook
            <span class="font-semibold"
              >“Legal Guide for a Maximum Profit Business”</span
            >
            and its complimentary
            <span class="font-semibold"
              >“The Maximum Profit Legal Checklist”</span
            >, which are now considered necessary handbooks for all business
            owners in Nigeria. Don't just take our word for it, hear from other
            business owners who have benefitted a whole lot from this book.
          </p>
          <div class="flex justify-center sm:justify-start mt-8 xl:mt-28">
            <button
              class="bg-scale-green py-4 rounded-lg px-5 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
            >
              <a href="https://paystack.com/buy/max-profit">DOWNLOAD IT NOW</a>
            </button>
          </div>
        </div>
      </div>

      <div class="py-20 xl:py-24 px-8 sm:px-12 lg:px-24 xl:px-52">
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl sm:w-9/12 mx-auto"
        >
          Don't just take our word for it,
          <span class="font-semibold">hear from other business owners</span>
          who have benefitted a whole lot from this book.
        </p>
      </div>

      <div
        class="px-10 lg:px-0 flex justify-center flex-wrap xl:space-x-16 lg:space-x-10"
      >
        <div
          class="sm:w-5/12 lg:w-3/12 shadow-xl rounded-xl px-10 sm:px-6 lg:px-5 py-8 libre flex flex-col justify-between"
        >
          <div>
            <img src="../assets/img/red500.svg" alt="" class="w-14" />
            <p class="mt-5 text-sm lg:text-xs xl:text-base italic">
              I highly recommend the ScaleLegal team. We had made some initial
              mistakes when we started out but they were able to spot it and
              help us avert some serious losses down the line. Kudos.
            </p>
          </div>
          <div class="flex items-center space-x-3 mt-5">
            <p class="text-sm xl:text-base">
              Ose Iyoke, <span class="font-semibold">Cofounder</span>
            </p>
          </div>
        </div>

        <div
          class="mt-10 sm:mt-0 sm:w-5/12 lg:w-3/12 shadow-xl rounded-xl px-10 sm:px-6 lg:px-5 py-8 libre sm:ml-14 flex flex-col justify-between"
        >
          <div>
            <img src="../assets/img/tiedywears.svg" alt="" class="w-28" />
            <p class="mt-5 text-sm lg:text-xs xl:text-base italic">
              I first got the checklist before the book and all I can say is
              scales fell off. Don't delay getting these book, I could have
              averted some foreseeable troubles that I now know I won't make
              again.
            </p>
          </div>
          <div class="flex items-center space-x-3 mt-5">
            <p class="text-sm xl:text-base">
              Dolapo Suleiman, <span class="font-semibold">CEO</span>
            </p>
          </div>
        </div>

        <div
          class="mt-10 lg:mt-0 sm:w-5/12 lg:w-3/12 shadow-xl rounded-xl px-10 sm:px-6 lg:px-5 py-8 libre flex flex-col justify-between"
        >
          <div>
            <img src="../assets/img/cheapmedia2.svg" alt="" class="w-36" />
            <p class="mt-10 text-sm lg:text-xs xl:text-base italic">
              The most intelligent lawyers I yet to meet. You always want to run
              your business through them anytime.
            </p>
          </div>
          <div class="flex items-center space-x-3">
            <p class="text-sm xl:text-base">
              Oladayo O, <span class="font-semibold">COO</span>
            </p>
          </div>
        </div>

        <div
          class="mt-10 sm:w-5/12 lg:w-3/12 shadow-xl rounded-xl px-10 sm:px-6 lg:px-5 py-8 libre sm:ml-14 flex flex-col justify-between"
        >
          <div>
            <img src="../assets/img/smileplug.svg" alt="" class="w-36" />
            <p class="mt-5 text-sm lg:text-xs xl:text-base italic">
              They came highly recommended and they didn't disappoint at all. If
              it;s about startups and business in Nigeria, you need ScaleLegal.
            </p>
          </div>
          <div class="flex items-center space-x-3 mt-5">
            <p class="text-sm xl:text-base">
              Mary A, <span class="font-semibold">CEO</span>
            </p>
          </div>
        </div>

        <div
          class="mt-10 sm:w-5/12 lg:w-3/12 shadow-xl rounded-xl px-10 sm:px-6 lg:px-5 py-8 libre flex flex-col justify-between"
        >
          <div>
            <img src="../assets/img/rapidpay.svg" alt="" class="w-36" />
            <p class="mt-5 text-sm lg:text-xs xl:text-base italic">
              The checklist saved my business big time. I had to read the book
              twice to ensure I didn't miss anything. I will always look forward
              to any content from your team.
            </p>
          </div>
          <div class="flex items-center space-x-3 mt-5">
            <p class="text-sm xl:text-base">
              Paul Akubo, <span class="font-semibold">CEO</span>
            </p>
          </div>
        </div>
      </div>

      <div
        class="py-20 xl:py-24 px-8 sm:px-12 lg:px-24 xl:px-52 mt-10 xl:mt-16"
      >
        <p
          class="text-center text-nav-text libre text sm:text-2xl lg:text-3xl xl:text-4xl sm:w-9/12 mx-auto"
        >
          Download the ebook now and take the guesswork out of the legal part of
          your business
          <span class="font-semibold">for just NGN 1,000</span>
        </p>
        <div class="flex justify-center mt-10">
          <button
            class="bg-scale-green py-4 rounded-lg px-5 focus:outline-none text-white lg:text-base xl:text-xl inter-font"
          >
            <a href="https://paystack.com/buy/max-profit">DOWNLOAD IT NOW</a>
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
  metaInfo: {
    title: "Publications :: ScaleLegal Africa",
  },
  data() {
    return {
      closed: false,
    };
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },
    close() {
      this.closed = true;
    },
  },
  mounted() {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1aE6Vy4h5PQwZ78h64RroCte3MYjylbSE";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700&display=swap");

.inter-font {
  font-family: "Inter", sans-serif;
}
</style>
