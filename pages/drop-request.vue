<template>
    <div class="grid grid-cols-2 drop gap-4 w-full h-[75vh] py-10 transition-all duration-200">
        <div class="line"></div>

        <form @submit.prevent="handleSubmit()" class="flex flex-col gap-8 my-auto px-8">
            <!-- Full Name -->
            <div class="relative border-b-2 border-zinc-900">
                <input v-model="form.username" type="text" id="username" placeholder=" " required
                    class="peer w-full outline-none pt-6 text-lg placeholder-transparent" />
                <label for="username" class="absolute left-0 top-1 text-zinc-700 text-lg transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
          peer-placeholder-shown:text-zinc-400 peer-focus:top-1 peer-focus:text-lg peer-focus:text-zinc-700">
                    Full Name
                </label>
            </div>

            <!-- Phone -->
            <div class="relative border-b-2 border-zinc-900">
                <input v-model="form.phone" type="text" id="phone" placeholder="" required
                    class="peer w-full outline-none pt-6 text-lg placeholder-transparent" />
                <label for="phone" class="absolute left-0 top-1 text-zinc-700 text-lg transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
             peer-placeholder-shown:text-zinc-400 peer-focus:top-1    peer-focus:text-lg peer-focus:text-zinc-700">
                    Phone
                </label>
            </div>

            <!-- E-mail -->
            <div class="relative border-b-2 border-zinc-900">
                <input v-model="form.email" type="email" id="email" placeholder=" " required
                    class="peer w-full outline-none pt-6 text-lg placeholder-transparent" />
                <label for="email" class="absolute left-0 top-1 text-zinc-700 text-lg transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
          peer-placeholder-shown:text-zinc-400 peer-focus:top-1 peer-focus:text-lg peer-focus:text-zinc-700">
                    E-mail
                </label>
            </div>

            <!-- Message -->
            <div class="relative border-b-2 border-zinc-900">
                <textarea v-model="form.message" id="message" placeholder=" " required
                    class="peer w-full h-24 outline-none pt-6 text-md placeholder-transparent resize-none"></textarea>
                <label for="message" class="absolute left-0 top-1 text-zinc-700 text-lg transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
          peer-placeholder-shown:text-zinc-400 peer-focus:top-1 peer-focus:text-lg peer-focus:text-zinc-700">
                    Your Message
                </label>
            </div>

            <!-- Terms + Button -->
            <div class="terms-container flex flex-col lg:flex-row gap-3 mt-4 items-center justify-between">
                <div class="flex items-start gap-2 p-2">
                    <label for="checkbox"
                        class="relative flex size-8 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-[#979797] via-[#000000] to-[#313131] p-2 duration-100 hover:p-2.5">
                        <input type="checkbox" class="group peer hidden" id="checkbox" />
                        <label for="checkbox" class="size-full rounded-full bg-zinc-700 peer-checked:size-0"></label>
                        <div
                            class="absolute left-3 h-[4px] w-[15px] -translate-y-10 translate-x-10 rotate-[-41deg] rounded-sm bg-white duration-300 peer-checked:translate-x-0 peer-checked:translate-y-0">
                        </div>
                        <div
                            class="absolute left-2 top-4 h-[4px] w-[9px] -translate-x-10 -translate-y-10 rotate-[45deg] rounded-sm bg-white duration-300 peer-checked:translate-x-0 peer-checked:translate-y-0">
                        </div>
                    </label>

                    <a href="#" target="_blank" class="text-red-500 text-sm cursor-pointer sm:p-2 p-1 capitalize">
                        I accept the terms as laid out in the privacy policy
                    </a>
                </div>

                <button type="submit" class="mt-3 sm:mt-0">
                    <NuxtLink to="/" class="hover:text-zinc-500 text-lg uppercase flex rotateC items-center gap-4">
                        Submit
                        <Icon name="mdi-light:arrow-right" size="2.5rem" color="black" class="Icon cursor-pointer" />
                    </NuxtLink>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
    username: "",
    phone: "",
    email: "",
    message: "",
});

function handleSubmit() {
    console.log("Form data:", form.value);
    alert("Message sent successfully!");
}
</script>

<style lang="scss" scoped>
.drop {
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }

    @media (max-width: 991px) {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
}

.line {
    position: relative;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 1.5px;
        background-color: #000;
        transform: translate(-50%, -50%) rotate(135deg);
    }

    @media (max-width: 1024px) {
        display: none;
    }
}

.rotateC {
    .Icon {
        transition: transform 0.5s ease;
    }

    &:hover>.Icon {
        transform: translateX(10px);
    }
}

@media screen and (max-width: 768px) {
    .terms-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .terms-container a {
        font-size: 0.85rem;
        line-height: 1.2rem;
    }

    .terms-container button {

        text-align: center;
    }

    .terms-container .Icon {
        width: 1.5rem;
        height: 1.5rem;
    }
}
</style>
