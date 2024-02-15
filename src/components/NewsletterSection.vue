<template>
    <container-wrapper container-classes="mb-20 lg:mb-40">
        <div class="text-center mb-20">
            <h2 class="font-outfit font-bold text-3xl mb-4 lg:text-4xl uppercase">We don't want to let you down</h2>
            <p class="text-gray-500 text-sm lg:text-md max-w-lg mx-auto">
                Get notify to our public mint sale event, make sure you didn’t
                miss it. Enter your email below, so we can invite you to join
                the party.
            </p>
        </div>
        <form @submit.prevent="console.log('form submited')" class="flex items-center max-w-2xl mx-auto gap-2 text-sora">
            <input class="border border-gray-300 rounded-[4px] p-4 text-sm focus:outline-none placeholder:text-gray-300 w-[80%]" placeholder="Enter email address" type="email">
            <button class="bg-black text-white h-full py-4 rounded-[4px] text-sm uppercase w-[20%]" type="submit">Subscribe</button>
        </form>
    </container-wrapper>
</template>

<script>
import ContainerWrapper from "./ContainerWrapper.vue";

export default {
    name: "NewsletterSection",
    components: {
        ContainerWrapper,
    },
};
</script>
