<template>
    <div class="pr-0 md:pr-[100px]">
        <!-- Footer home page-->
        <footer v-if="isMainPage" class="w-full md:h-full lg:pr-16 md:pr-10 pr-0">
            <ul class="flex list relative w-full bottom-0 justify-between items-center text-sm uppercase">
                <li class="flex space-x-2 md:justify-normal justify-center flex-wrap">
                    <a href="#" target="_blank" rel="noopener noreferrer">whatsapp</a>
                    <a href="#" target="_blank">instagram</a>
                    <a href="#" target="_blank">facebook</a>
                    <a href="#" target="_blank">linkedin</a>
                    <a href="#" target="_blank">Pinterest</a>
                    <a href="#" target="_blank">snapchat</a>
                </li>
                <li class="flex space-x-5 md:justify-normal justify-center lg:pr-60 md:pr-10 xs:pr-0">
                    <a href="mailto:ex@gmail.com">ex@gmail.com</a>
                    <a href="tel:+20101122333">+20101122333</a>
                </li>
            </ul>
        </footer>

        <!-- Footer Contact -->
        <footer v-if="isContactsPage || isProjectsPage"
            class="bg-[#f7f7f7] w-full h-[100px] flex justify-between items-center px-6 md:px-12 lg:pr-16 md:pr-10 xs:pr-0">
            <!-- Left side -->
            <div class="flex items-center gap-2 text-zinc-700">
                <span class="text-2xl">&copy;</span>
                <span class="text-xs md:text-sm tracking-wide">
                    All RIGHTS RESERVED 2023. LEQB ARCHITECTS
                </span>
            </div>

            <!-- Right side -->
            <a href="https://thefirstthelast.agency/"
                class="flex flex-col items-end group transition-all duration-300 lg:pr-16 md:pr-10 xs:pr-0"
                target="_blank" rel="noopener noreferrer">
                <span
                    class="font-bold text-lg md:text-xl pr-8 group-hover:text-zinc-900 transition-colors duration-300">
                    THE FIRST
                </span>
                <span
                    class="text-sm md:text-lg text-zinc-500 italic group-hover:text-zinc-700 transition-colors duration-300">
                    THE LAST
                </span>
            </a>
        </footer>


        <!-- About page -->
        <div v-if="isAboutPage">
            <div class="square2">
                <h2 class="text-[2.5rem] uppercase tracking-[.2rem] mb-[50px]">AWARDS</h2>

                <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-12 overflow-hidden">
                    <div class="flex flex-col">
                        <a href="https://ifdesign.com/en/winner-ranking/project/minimalistic-villa-in-uae/342910"
                            target="_blank" rel="noopener noreferrer" class="my-12">
                            <img src="/image/image.jpg" alt="awards" class="w-[50%] h-[100%]" />
                        </a>
                        <p class="text-[1rem] leading-[1.5rem] w-full capitalize opacity-70">
                            <span>DISCIPLINE INTERIOR ARCHITECTURE</span><br />
                            <span>CATEGORY 4.05 Residential</span>
                        </p>
                    </div>

                    <div class="flex flex-col">
                        <a href="https://ifdesign.com/en/winner-ranking/project/minimalistic-villa-in-uae/342910"
                            target="_blank" rel="noopener noreferrer" class="my-12">
                            <img src="/image/images.png" alt="awards" class="w-[50%] h-[100%]" />
                        </a>
                        <p class="text-[1rem] leading-[1.5rem] w-full capitalize opacity-70">
                            <span>DISCIPLINE INTERIOR ARCHITECTURE</span><br />
                            <span>CATEGORY 4.05 Residential</span>
                        </p>
                    </div>

                    <div class="flex flex-col">
                        <a href="https://ifdesign.com/en/winner-ranking/project/minimalistic-villa-in-uae/342910"
                            target="_blank" rel="noopener noreferrer" class="my-12">
                            <img src="/image/IDA_logo.png" alt="awards" class="w-[50%] h-[100%]" />
                        </a>
                        <p class="text-[1rem] leading-[1.5rem] w-full capitalize opacity-70">
                            <span>DISCIPLINE INTERIOR ARCHITECTURE</span><br />
                            <span>CATEGORY 4.05 Residential</span>
                        </p>
                    </div>

                </div>
            </div>

            <!-- jobs -->
            <div class="mt-[50px] w-[80%]">
                <div v-for="(job, index) in jobs" :key="job.title"
                    :class="index === 0 ? 'lg:py-[70px] sm:py-[30px]  border-t-0 border-black' : 'border-t-2 border-black/50 lg:py-[70px] sm:py-[30px] '">
                    <div class="flex justify-between w-[90%]">
                        <h1 class="lg:text-[2.5rem] sm:text-[1.5rem]">{{ job.title }}</h1>
                        <Icon name="mdi-light:arrow-right" size="2.5rem" color="black" @click="toggleForm(job.title)"
                            class="rotateC cursor-pointer" />
                    </div>

                    <div v-show="formVisible === job.title" class="flex flex-col gap-4 mt-4">
                        <p class="text-[1rem] leading-[1.5rem] capitalize text-justify opacity-70">
                            {{ job.description }}
                        </p>

                        <button
                            class="bg-gray-200 text-center  w-40 rounded-full h-12 relative text-black text-xl font-medium  group"
                            type="button">
                            <a href="#">
                                <div
                                    class="bg-black rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[150px] z-10 duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px"
                                        width="25px">
                                        <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#fff" />
                                        <path
                                            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                            fill="#fff" />
                                    </svg>
                                </div>
                                <p class="translate-x-6">Apply Now</p>
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div class="lg:pr-16 md:pr-10 xs:pr-0">
                <!-- Left side -->
                <div class="flex items-center gap-2 text-zinc-600 font-bold mt-10">
                    <span class="text-2xl">&copy;</span>
                    <span class="text-xs md:text-sm tracking-wide">
                        All RIGHTS RESERVED 2023. LEQB ARCHITECTS
                    </span>
                </div>

                <!-- Right side -->
                <a href="https://thefirstthelast.agency/"
                    class="flex flex-col items-end group transition-all duration-300 lg:pr-16 md:pr-10 xs:pr-0 "
                    target="_blank" rel="noopener noreferrer">
                    <span class="font-bold text-lg md:text-xl group-hover:text-zinc-900 transition-colors duration-300">
                        THE FIRST
                    </span>
                    <span
                        class="text-sm md:text-lg text-zinc-500 italic group-hover:text-zinc-700 transition-colors duration-300">
                        THE LAST
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()

const isMainPage = computed(() => route.path === '/')
const isContactsPage = computed(() => ['/contacts', '/drop-request'].includes(route.path))
const isAboutPage = computed(() => route.path === '/about')
const isProjectsPage = computed(() => {
    return route.path === '/projects' || route.path.startsWith('/projects/')
})
const formVisible = ref<string | null>(null)

interface jobTeam {
    title: string
    description: string
}


const jobs = ref<jobTeam[]>([
    {
        title: "Architect",
        description: `You know that a good architect is not only a person with strong skills in AutoCAD, ArchiCAD, and Revit that can be illustrated with a portfolio. It’s also the one who understands the purpose of each detail, has experience in redesigning and repurposing, can offer dozens of options for the same space, and knows how to read and create working documentation. Sounds like this one is you? Then apply with your portfolio using the form below. See you at the interview!`,
    },
    {
        title: "Interior Designer",
        description: `Can you envision stunning interiors and skillfully use 3Ds Max, Adobe, and other software to produce photorealistic renders? Do you have a deep appreciation for art and a passion for original, creative ideas? If so, we invite you to join our professional team! We eagerly await your application and portfolio. Looking forward to meeting you at the interview!`,
    },
    {
        title: "Revit Drafter",
        description: `We are currently hiring and seeking a skilled and experienced drafter to join our team! What are we looking for? Proficiency in 3Ds Max and Revit, Upper-Intermediate English, a robust portfolio, a keen eye for detail, and a deep respect for your craft. Interested candidates, please apply using the form below and include your portfolio. We look forward to seeing you at the interview!`,
    },
    {
        title: "Graphic Designer",
        description: `Are you a talented and skilled graphic designer with a passion for creating minimalistic yet splendid design masterpieces? If you have an eye for detail and are eager to reach new career heights in our professional team, we're looking for you. Our requirements include proficiency in Photoshop, Illustrator, and InDesign, along with motion design skills and experience in Final Cut, After Effects, or Cinema 4D. Your responsibilities will involve developing corporate styles, creating static and video content for social networks, and crafting brand identities for our clients. This is a full-time opportunity. Don't miss your chance to showcase your skills; submit your portfolio now. We look forward to meeting you at the interview!`,
    },
    {
        title: "Sales Manager",
        description: `You know that sales are not just about selling — they’re about building relationships and understanding the needs of every client. If you’re great at connecting with people, closing deals, and have a passion for design, we want you on our team. Apply now, and let’s talk at the interview!`,
    },
    {
        title: "Project Manager",
        description: `A great project manager can take care of timelines, budgets, and teams with ease. If you’re organized, detail-oriented, and thrive on seeing a project through from concept to realization, we’d love to meet you. Apply now and show us your expertise!`,
    },
    {
        title: "Account Manager",
        description: `You’re the person who keeps everything running smoothly behind the scenes. If you’re great at organizing workflows, assisting, managing deals and documentation, and ensuring everything is accurate and in order, this role is for you. Apply now, and let’s get things done together!`,
    },
    {
        title: "HR Manager",
        description: `You believe that a strong team is the backbone of any company, and you know how to find, nurture, and grow talent. If you are passionate about people, processes, and creating a positive work culture, we need you. Apply now, and let’s build our team's future!`,
    },
    {
        title: "Construction Project Manager",
        description: `A great construction project manager is able to turn blueprints into reality while keeping everything on schedule and within budget. If you’re hands-on, like problem-solving, and thrive on-site, this is for you. Apply now, and let’s start building together!`,
    },
])

function toggleForm(title: any) {
    formVisible.value = formVisible.value === title ? null : title
}
</script>

<style>
.list {
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
}
</style>