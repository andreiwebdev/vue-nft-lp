<template>
    <div class="mb-20 lg:mb-40 bg-gradient-to-b from-white to-gray-100 pb-20 lg:pb-32">
        <container-wrapper>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <nft-item />
                <nft-item />
                <nft-item />
                <nft-item />
                <nft-item />
                <nft-item />
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
};
</script>
