<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useFetch } from 'nuxt/app'

interface Project {
    id: number
    title: string
    category: string
    description: string
    image: string
}

const route = useRoute()
const router = useRouter()

const { data: project, error } = await useFetch<Project>(`/api/projects/${route.params.id}`)

const goBack = () => {
    router.back()
}
</script>

<template>
    <div class="pr-0 md:pr-[100px]">
        <div v-if="project" class="py-16 ">
            <button @click="goBack"
                class="absolute top-28 flex items-center gap-2 px-4 py-2 shadow-inner rounded-md text-gray-400 hover:text-gray-800 transition-colors duration-300">
                ← Back
            </button>
            <div class="flex md:flex-row flex-col gap-6">
                <img :src="project.image" alt=""
                    class="rounded-lg mb-6 w-full max-w-xl md:w-50 object-cover shadow-xl shadow-slate-600" />
                <div>
                    <h1 class="text-3xl font-bold mb-1">
                        {{ project.title }}
                    </h1>
                    <p class="text-gray-400 uppercase mb-4">
                        {{ project.category }}
                        / 2020
                    </p>
                    <p class="text-gray-600 capitalize">
                        {{ project.description }}
                    </p>
                </div>
            </div>
        </div>

        <div v-else-if="error" class="text-center py-12">
            <p class="text-red-500 text-lg font-semibold">Project not found.</p>
        </div>
    </div>
</template>
