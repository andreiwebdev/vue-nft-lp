<template>
    <div
        class="mb-20 lg:mb-40 bg-gradient-to-b from-white to-gray-100 pb-20 lg:pb-32"
    >
        <container-wrapper>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <nft-item
                    v-for="(nft, index) in nfts"
                    :key="index"
                    :id="nft.id"
                    :image="nft.image"
                />
            </div>
        </container-wrapper>
    </div>
</template>

<script>
import ContainerWrapper from "./ContainerWrapper.vue";
import NftItem from "./NftItem.vue";

export default {
    name: "NftSection",
    components: {
        ContainerWrapper,
        NftItem,
    },
    data() {
        return {
            nfts: [
                {
                    id: 1,
                    image: "https://i.imgur.com/fJFYAJT.png",
                },
                {
                    id: 2,
                    image: "https://i.imgur.com/Kyty82k.png",
                },
                {
                    id: 3,
                    image: "https://i.imgur.com/uMlXCQU.png",
                },
                {
                    id: 4,
                    image: "https://i.imgur.com/xC7arZg.png",
                },
                {
                    id: 5,
                    image: "https://i.imgur.com/VIPxKG2.png",
                },
                {
                    id: 6,
                    image: "https://i.imgur.com/OnXzWvj.png",
                },
            ],
        };
    },
};
</script>
