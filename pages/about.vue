<template>
    <div class="container3 mt-[50px]">
        <div class=" flex flex-col gap-6 mb-[50px] w-full">
            <h1 class="text-[2rem] font-medium uppercase tracking-[.2rem]">Adventure begins</h1>
            <p class="text-[1.5rem] leading-[2rem] w-full capitalize text-gray-600 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi est tempore amet quae sunt et earum,
                minus doloremque laudantium! Reprehenderit officiis quaerat
                sunt mollitia est. Ab ratione nobis quisquam accusantium.
            </p>
        </div>

        <div class="square2 flex justify-center w-full  items-center mt-[150px]">
            <img src="/public/image/manager.jpg" alt="" class=" w-[70%]  h-[50%] object-cover">
        </div>

        <div class="line flex h-[30vh] w-[100%] sm:w-[110%] mt-[250px]  square2">
            <Icon name="material-symbols-light:emergency" size="50"
                class="relative square2 bottom-[26%] md:bottom-20 sm:w-[50%]" />
            <ClientOnly>
                <h4 class="text-[1rem] md:text-[1.5rem] font-semibold text-justify">
                    If we sum the experience of all members of our team, we get more than a century.
                </h4>
            </ClientOnly>
            <p class="text-[.7rem] md:text-[1rem] sm:w-full w-[200%] pt-[11rem] text-justify">
                We’re a highly collaborative team that enjoys working together and getting engaged in sharing our
                knowledge and experience. And then the best part begins. We are driven by challenges, we have
                ambitions, and we grow together. When our team starts the next project, we know that we can handle
                it with a wide range of skills and can count on each other.
            </p>
        </div>

        <div class="max-w-[1200px] mx-auto py-[25px] mb-[180px] square2">
            <ManualSlider :team-work="teamWork" />
        </div>
    </div>
</template>


<script setup lang="ts">


import { useSeoMeta } from 'nuxt/app';
import ManualSlider from '../components/ManualSlider.vue';
import { ref } from 'vue';

useSeoMeta({
    title: 'About Us',
    description: 'About us page',
})


interface TeamMember {
    id: number;
    image: string;
    name: string;
    title: string
}
const teamWork = ref<TeamMember[]>([
    { id: 1, image: "/image/manager.jpg", name: 'Ah', title: 'chief executive officer' },
    { id: 2, image: '/image/p1.jpg', name: 'AH ', title: 'salas manager' },
    { id: 3, image: '/image/p2.jpg', name: 'Ah', title: 'graphic designer' },
    { id: 4, image: '/image/p3.jpg', name: 'Ah', title: 'lead interior designer' },
    { id: 5, image: '/image/p-g-1.jpg', name: 'Es', title: 'interior designer' },
    { id: 6, image: '/image/p-g-2.jpg', name: 'Ze', title: 'interior design' },
    { id: 7, image: '/image/hr.jpg', name: 'El', title: 'HR Officer' },
])

</script>

<style lang="scss" scoped>
.container3 {
    padding-right: 100px;
    position: relative;
    transition: all 0.3s ease-in-out;
    min-height: 100vh;

    @media (max-width: 1024px) {
        min-height: 120vh;
        padding-right: 0;
    }

    @media (min-width: 1024px) {
        padding-right: 120px;
    }



    & .line {
        position: relative;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);


        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            margin: 30px;
            max-width: 1000px;
            height: 2px;
            background-color: #00000081;
            transform: translate(-50%, -50%) rotate(135deg);
        }

        @media (max-width: 769px) {
            height: 80px;

            &::after {
                margin: 100px;
            }
        }

        @media (max-width: 480px) {
            height: 60px;

            &::after {
                margin: 50px;
            }
        }

        @media (min-width: 500px) and (max-width: 800px) {
            height: 90px;

            &::after {
                margin: 20px;
            }
        }


        @media (width: 1024px) {
            height: 90px;

            &::after {
                margin: 90px;
            }
        }
    }

    .square2 {
        animation: appear linear;
        animation-timeline: view();
        animation-range: entry 0% cover 50%;
    }

    .auto-cols-team {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}

@keyframes appear {
    from {
        opacity: -2;
        clip-path: inset(100% 100% 100% 100%);
    }

    to {
        opacity: 1;
        clip-path: inset(0% 0% 0% 0%);
    }
}

.rotateC {
    transition: all 0.4s ease-in-out;

    &:hover {
        animation: rotateCube 1s linear infinite;
    }
}

@keyframes rotateCube {

    100% {
        transform: translateX(50%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    0%,
    50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
</style>
