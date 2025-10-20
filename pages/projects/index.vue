<template>
    <div class="md:pr-[100px] p-2">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-center mb-12">
            <div class="flex items-center gap-6">
                <Icon name="ci:menu-alt-05" size="25" :class="getIconClass('filter')" @click="activeIcon = 'filter'" />
                <Icon name="mdi:menu" size="25" :class="getIconClass('menu')" @click="activeIcon = 'menu'" />
                <Icon name="mdi:web" size="25" :class="getIconClass('web')" @click="activeIcon = 'web'" />
            </div>
            <h1 class="text-3xl uppercase tracking-[.5rem]">Projects</h1>
        </div>

        <!-- Layout 1: Filter view -->
        <transition-group name="fade-slide" tag="div" v-if="activeIcon === 'filter'">
            <div v-for="(project, index) in displayedProjects" :key="project.id"
                class="flex flex-col md:flex-row md:items-end items-start  gap-8 mb-12"
                :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
                <NuxtLink :to="`/projects/${project.id}`" class="w-full md:w-1/2">
                    <div class="relative group overflow-hidden rounded-md shadow-lg">
                        <img :src="project.image" alt="Project image" class="w-full object-cover" />
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500">
                        </div>
                    </div>
                </NuxtLink>
                <div class=" md:w-1/2">
                    <h2 class="text-2xl font-semibold mb-3">{{ project.title }}</h2>
                    <p class="text-gray-500 mb-2 uppercase">{{ project.category }}</p>
                </div>
            </div>
        </transition-group>

        <!-- Layout 2: Menu view -->
        <transition-group name="fade-slide" tag="div" v-else-if="activeIcon === 'menu'"
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            <NuxtLink v-for="project in displayedProjects" :key="project.id" :to="`/projects/${project.id}`"
                class="relative group overflow-hidden cursor-pointer">
                <img :src="project.image" alt=""
                    class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div
                    class="absolute inset-0 hidden flex-col justify-end text-center text-white bg-black/0 group-hover:bg-black/40 group-hover:flex transition-all duration-300 px-3">
                    <h2 class="text-md font-semibold mb-2 tracking-wide uppercase">{{ project.title }}</h2>
                    <p class="text-sm text-gray-200 mb-1">{{ project.category }}</p>
                </div>
            </NuxtLink>
        </transition-group>

        <!-- Layout 3: Web view (Map) -->
        <div v-else-if="activeIcon === 'web'" class="w-full h-[500px] rounded-md overflow-hidden shadow-md">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.7122044316975!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c0f7f33333%3A0x9f8c0f21bb3f61f!2z2YXYr9mK2YbYqSDYp9mE2K_ZiNmG2YjZhQ!5e0!3m2!1sar!2seg!4v1690000000000!5m2!1sar!2seg"
                width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"></iframe>
        </div>

        <!--  Button View More / View Less -->
        <div v-if="filteredProjects.length > 5 && activeIcon !== 'web'" class="text-center mt-6">
            <button @click="showAll = !showAll"
                class="px-6 py-2 bg-gray-200 shadow-md shadow-slate-200 hover:shadow-slate-950  rounded-full hover:text-white hover:bg-gray-900 transition">
                {{ showAll ? 'View Less' : 'View More' }}
            </button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useFetch, useSeoMeta } from 'nuxt/app'


useSeoMeta({
    title: 'Projects',
    description: 'Projects page',
})

interface Project {
    id: number
    title: string
    category: string
    description: string
    image: string
}

const activeIcon = ref('filter')
const activeDesign = ref('all')
const showAll = ref(false)

const { data: projects, error } = await useFetch<Project[]>('/api/projects')

const filteredProjects = computed(() => {
    if (!projects.value) return []
    if (activeDesign.value === 'all') return projects.value
    return projects.value.filter((p: Project) => p.category === activeDesign.value)
})

const displayedProjects = computed(() => {
    return showAll.value ? filteredProjects.value : filteredProjects.value.slice(0, 5)
})

const getIconClass = (name: string) =>
    activeIcon.value === name
        ? 'text-black transition-all duration-300'
        : 'text-gray-400 hover:text-black transition-all duration-300'
</script>

<style scoped>
/* Animation للـ View More / View Less */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.4s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
