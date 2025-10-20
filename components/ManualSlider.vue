<!-- components/TeamGrid.vue -->
<template>
    <div class="relative w-full overflow-hidden">
        <div class="animate-scroll flex gap-12">
            <div v-for="(member, index) in [...teamWork, ...teamWork]" :key="`member-${index}`"
                class="flex gap-12 min-w-[700px] items-end">
                <img class="w-[50%] h-[50%] object-cover" :src="member.image" :alt="member.title" />
                <div class="space-y-2 mb-[30px]">
                    <p class="text-xl font-semibold text-black">{{ member.name }}</p>
                    <p class="text-md font-medium text-gray-600">{{ member.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        teamWork: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    display: flex;
    animation: scroll 35s linear infinite;
    width: max-content;
}
</style>
