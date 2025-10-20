<template>
    <div class="flex justify-between">
        <div class="flex justify-between nav-bar w-full" v-if="isMainPage">
            <div class="py-9">
                <div class="square">
                    <h4 class="text-[.5rem] px-[2px] font-bold ">DD</h4>
                    <h4 class="text-[.5rem]  font-bold flex justify-end px-[2px]">
                        BB
                    </h4>
                </div>
            </div>

            <NuxtLink to="/drop-request"
                class="link sm:text-[1.2rem] text-[.8rem] font-bold sm:px-[100px] py-9 md:py-5">
                <span class="hover:text-zinc-400 transition-all">DROP REQUEST</span>
            </NuxtLink>



            <nav class="fixed z-50 bg-[#f7f7f7] lg:flex hidden -right-[168px]">
                <div class="grid grid-cols-3 w-[45%] cursor-pointer">
                    <NuxtLink v-for="item in filteredMenu" :key="item.name" :to="item.link"
                        class=" flex items-center justify-center shadow-md shadow-slate-300 text-2xl font-bold border h-screen navItem border-black">
                        <p class="-rotate-90  flex items-center justify-center h-screen w-full  ">{{ item.name }}
                        </p>
                    </NuxtLink>
                </div>
            </nav>


            <div class="flex lg:hidden">
                <div class="flex lg:hidden">
                    <button class="flex items-center gap-2" @click="toggleMenu">
                        <svg viewBox="0 0 80 80" width="15" height="15" class="transition-transform duration-300">
                            <rect width="80" height="10" fill="#000" rx="5"></rect>
                            <rect y="30" width="50" height="10" fill="#000" rx="5"></rect>
                            <rect y="60" width="80" height="10" fill="#000" rx="5"></rect>
                        </svg>
                        <span class="font-bold text-black">MENU</span>
                    </button>
                </div>


                <transition name="open-center">
                    <div v-if="isOpen" class="menu-overlay" @click.self="isOpen = false">
                        <div class="grid grid-cols-2 grid-rows-2 w-full h-full">
                            <NuxtLink v-for="item in menuItem" :key="item.name" :to="item.link"
                                class="flex items-center justify-center navItem text-2xl font-bold border border-black"
                                @click="isOpen = false">
                                {{ item.name }}
                            </NuxtLink>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

        <div class="flex justify-end space-x-2 w-full py-3 pr-10" v-else>
            <a href="mailto:ex@gmail.com">ex@gmail.com</a>
            <a href="tel:+20101122333">+20101122333</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isOpen = ref(false);

const toggleMenu = () => (isOpen.value = !isOpen.value);

const isMainPage = computed(() =>
    route.path === "/" ||
    route.path === "/about" ||
    route.path === "/contacts" ||
    route.path.startsWith("/projects")
);



interface MenuItem {
    name: string;
    link: string;
}

const menuItem = <MenuItem[]>[
    { name: "Main", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "Contacts", link: "/contacts" },
];

const filteredMenu = computed(() => menuItem.filter(item => item.link !== route.path));
</script>

<style scoped lang="scss">
.menu-overlay {
    position: fixed;
    inset: 0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 40;
}


.open-center-enter-active,
.open-center-leave-active {
    transition: all 0.6s ease;
    transform-origin: center;
}

.open-center-enter-from,
.open-center-leave-to {
    transform: scaleY(0);
    opacity: 0;
}

.nav-bar {
    margin-right: 50px;


    @media (max-width: 912px) {
        margin-right: 0;
    }
}

.navItem {
    transition: all 0.3s ease;

    &:hover {
        background-image: url("/image/download.gif");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: .8;
        color: white;
    }
}


.link {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    transition: all 0.3s ease-out;

    &:hover {
        text-decoration: none;
        text-underline-offset: 0;
    }
}

.square {
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    position: relative;

    @media (max-width: 400px) {
        width: 25px;
        height: 25px;
    }
}

.square::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 140%;
    height: 1px;
    background-color: black;
    transform: translate(-50%, -50%) rotate(135deg);
}
</style>
