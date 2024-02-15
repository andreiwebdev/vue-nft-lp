<template>
  <div
    class="h-[50vh] w-full bg-hero bg-cover bg-fixed bg-center flex flex-col items-center justify-center text-white lg:justify-end lg:pb-[60px]"
  >
    <container-wrapper container-classes="lg:grid lg:grid-cols-2 lg:relative">
      <div class="relative">
        <h1
          class="max-w-[570px] mx-auto font-outfit text-6xl font-bold text-center lg:max-w-fit lg:text-left lg:text-7xl xl:text-8xl"
        >
          Mountain NFT Collectibles
        </h1>
        <a href="#content">
            <img class="w-40 h-40 absolute top-[140%] left-1/2 transform -translate-x-1/2 cursor-pointer lg:bottom-full lg:top-auto lg:left-0 lg:transform-none lg:w-60 lg:h-60" :src="scrollImage" alt="scroll-image" />
        </a>
      </div>
      <img
        class="hidden lg:block lg:absolute lg:w-[500px] lg:-top-[200px] lg:right-0 xl:w-[700px] xl:-top-[300px]"
        :src="orbImage"
        alt="orb graphic"
      />
    </container-wrapper>
  </div>
</template>

<script>
import ContainerWrapper from "./ContainerWrapper.vue";
import orbImage from "../assets/Orb.png";
import scrollImage from "../assets/scroll.png";

export default {
  name: "HeroArea",
  components: {
    ContainerWrapper,
  },
  data() {
    return {
      orbImage,
      scrollImage,
    };
  },
};
</script>

<style scoped></style>
